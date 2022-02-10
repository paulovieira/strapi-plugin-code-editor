import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Label, Padded } from '@buffetjs/core';

import {EditorState, basicSetup} from '@codemirror/basic-setup';
import {EditorView, keymap } from '@codemirror/view';
import {indentWithTab} from '@codemirror/commands';
import {oneDark} from '@codemirror/theme-one-dark';
import { indentationMarkers } from '@replit/codemirror-indentation-markers';
//import { abbreviationTracker, expandAbbreviation } from '@emmetio/codemirror6-plugin';

import { getParsedOption, getLangProvider, log, adjustFocusStyles, loadFont } from './helpers.js';
import getExtraCodemirrorExtensions from './getExtraCodemirrorExtensions.js';

function CodemirrorEditor(props) {

  let { label, name, value, onChange, attribute, type, ...other } = props;
  let editorParentEl = useRef(null);
  let editorViewInstance = useRef(null);
  let getOption = key => getParsedOption(key, attribute['strapi-plugin-code-editor'] || {});

  log('strapi-plugin-code-editor', { label, name, value, attribute, type, other })

  log('parsed options', {
    'lang': getOption('lang'),
    'height': getOption('height'),
    'fontFamily': getOption('fontFamily'),
    'fontSize': getOption('fontSize'),
    'darkTheme': getOption('darkTheme'),
    'indentWithTab': getOption('indentWithTab'),
    'indentationMarkers': getOption('indentationMarkers'),
    'lineWrapping': getOption('lineWrapping'),
    'columnElClass': getOption('columnElClass'),
  });

  useEffect(function () {

    log('useEffect0', Date.now(), { name, value, editorParentEl });

    // create the editor with an empty initial state; it will be replaced
    // immediatelly in the other effect

    let initialState = EditorState.create({ 
      doc: value || '',
      extensions: []
    });

    editorViewInstance.current = new EditorView({ 
      state: initialState,
      parent: editorParentEl.current
    });

    // when the editor is focused, Codemirror will add the .cm-focused class, 
    // which has a outline property that doesn't look good with the other strapi
    // elements; we remove that outline

    editorParentEl.current.firstChild.style['outline'] = 'none';

    // allow the user to override the default 'col-6' class in the div.row > div.col-N structure

    if (getOption('columnElClass')) {
      let columnEl = editorParentEl.current.parentNode.parentNode;

      if (columnEl.classList.contains('col-6')) {
        columnEl.classList.remove('col-6');
        columnEl.classList.add(getOption('columnElClass'));
      }
    }
    
    // load font dynamically

    if (getOption('fontFamily') !== '') {
      loadFont(getOption('fontFamily'));  
    }

    return function onDestroy() { 
      
      log('useEffect0 onDestroy');

      editorViewInstance.current.destroy();
    }

  }, [])

  useEffect(function () {

    log('useEffect1', Date.now(), { name, value, editorParentEl });

    // this effect will run everytime the `value` prop is changed; that can happen in 2 situations
    //
    // 1) the `value` prop changed cause is was loaded from the database (by strapi)
    // 2) the `value` prop changed becasue the user is actively editing the text in the code editor

    // we want to proceed only in case 1; in case 2 we want to return early; to identify that case
    // we check if the code editor has the focus; this seems to be the same technique used by the
    // official InputJSON component (which uses Codemirror 5), as can be seen in the reference below
    // (in the componentDidUpdate lifecycle):
    //
    // https://github.com/strapi/strapi/tree/v3.6.9/packages/strapi-plugin-content-manager/admin/src/components/InputJSON
    //
    // note that technically it could happen (but it's very unlikely) that the code editor might
    // have the focus before the data was loaded from the database (case 1), in which case the 
    // editor would not be updated as expected; but we assume the data load is fast enough 

    if (editorViewInstance.current.hasFocus) { return }

    log('codemirror setState', Date.now())

    let extensions = [];

    // CodeMirror 6 is published as a set of NPM packages/Extensions under the @codemirror scope
    // https://codemirror.net/6/docs/ref/

    // the @codemirror/basic-setup extension is always used:
    // https://codemirror.net/6/docs/ref/#basic-setup

    extensions.push(basicSetup);

    // "register a function to be called every time the view updates"
    // https://codemirror.net/6/docs/ref/#view.EditorView^updateListener

    extensions.push(EditorView.updateListener.of(viewUpdate => {

      log('viewUpdate', viewUpdate)

      if (viewUpdate.focusChanged) { adjustFocusStyles(editorParentEl.current, viewUpdate.view.hasFocus) }

      if (!viewUpdate.docChanged) { return }

      // the 'type' prop is the string 'textarea', which probably comes from the type used in strapi.registerField;
      // however, in the *.settings.json files we have "type": "text"

      // QUESTION: which one should we be using? does it make a difference?

      onChange({
        target: {
          name,
          type,  
          value: viewUpdate.view.state.doc.toString()
        },
      });

    }));

    // the other selected extensions can be loaded or not, depending on the respective option values 
    // (given in the *.settings.json files)

    // option: lang
    
    let langProvider = getLangProvider(getOption('lang'));

    if (langProvider != null) {
      extensions.push(langProvider()) 
    }
    
    // option: height, fontFamily and fontSize

    // we have to create some more specific css rules to override the font-family
    // declarations from the strapi css (which uses Lato, a non-monospace font)

    let height = getOption('height');
    let fontFamily = getOption('fontFamily');
    let fontSize = getOption('fontSize');

    let themeConfig = {
      '&': { height: height, fontFamily: 'monospace', fontSize: fontSize },
      '.cm-scroller': { overflow: 'auto' },
      '.cm-line': { fontFamily: 'monospace', fontSize: fontSize },
      '.cm-line span': { fontFamily: 'monospace', fontSize: fontSize },
      '.cm-content': {}
    };

    // when using the light theme, the background color of the content container is gray by default;
    // this doesn't look good when using a long text inside a strapi component, because the component
    // itself will have a gray container, so the text editor becomes blended; we prefer to mimic the 
    // look of the native textarea (that is, white background)

    if (getOption('darkTheme') === false) {
      themeConfig['.cm-content']['background-color'] = 'white';
    }

    if (fontFamily !== '') {
      themeConfig['&']['fontFamily'] = `'${fontFamily}', monospace`;
      themeConfig['.cm-line']['fontFamily'] = `'${fontFamily}', monospace`;
      themeConfig['.cm-line span']['fontFamily'] = `'${fontFamily}', monospace`;

      // NOTE: the font is download dynamically in useEffect0
    }
    
    extensions.push(EditorView.theme(themeConfig));

    // option: darkTheme

    if (getOption('darkTheme')) {
      extensions.push(oneDark);
    }

    // option: indentWithTab and emmet
    // (keybindings for the keymap facet: https://codemirror.net/6/docs/ref/#view.keymap)

    let keybindings = [];

    if (getOption('indentWithTab')) {
      keybindings.push(indentWithTab);
    }

    // if (getOption('emmet') && (getOption('lang') === 'markdown' || getOption('lang') === 'html')) {
    //   keybindings.push({ key: 'Ctrl-e', run: expandAbbreviation });
    // }

    extensions.push(keymap.of(keybindings));
    
    // option: emmet

    // if (getOption('emmet') && (getOption('lang') === 'markdown' || getOption('lang') === 'html')) {
    //   extensions.push(abbreviationTracker());
    // }

    // option: indentationMarkers

    if (getOption('indentationMarkers')) {
      extensions.push(indentationMarkers());
    }

    // option: lineWrapping

    if (getOption('lineWrapping')) {
      extensions.push(EditorView.lineWrapping);
    }

    let extraCodemirrorExtensions = getExtraCodemirrorExtensions(props);
    if (Array.isArray(extraCodemirrorExtensions)) {
      extensions = extensions.concat(extraCodemirrorExtensions);
    }

    let state = EditorState.create({ 
      doc: value || '',
      extensions
    });

    editorViewInstance.current.setState(state);
    
  }, [value]);
  

  return (
    <Padded bottom size="md">
      <Label htmlFor={name}>
        <span>{label}</span>
      </Label>
      <div 
        style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'rgb(227, 233, 243)', borderRadius: '2px' }}
        ref={editorParentEl}
      ></div>
    </Padded>
  )
}


CodemirrorEditor.defaultProps = {
  label: '',
  value: '  '
}

CodemirrorEditor.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default CodemirrorEditor
