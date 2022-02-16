import {html} from '@codemirror/lang-html';
import {markdown} from '@codemirror/lang-markdown';
import {javascript} from '@codemirror/lang-javascript';
import {json} from '@codemirror/lang-json';
import {sql} from '@codemirror/lang-sql';
import {php} from '@codemirror/lang-php';
import {rust} from '@codemirror/lang-rust';
import {python} from '@codemirror/lang-python';
import {java} from '@codemirror/lang-java';
import {css} from '@codemirror/lang-css';
import {xml} from '@codemirror/lang-xml';
import {wast} from '@codemirror/lang-wast';
import {cpp} from '@codemirror/lang-cpp';
import {lezer} from '@codemirror/lang-lezer';

import customDefaultOptions from './customDefaultOptions.js';

let hardcodedDefaultOptions = {
  lang: '',
  height: '250px',
  fontFamily: '',
  fontSize: '12px',
  darkTheme: false,
  indentWithTab: true,
  indentationMarkers: true,
  lineWrapping: true,
  columnElClass: null,  // use 'col-12' for a full-width column
  // emmet: ...
}

let defaultOptions = Object.assign({}, hardcodedDefaultOptions, customDefaultOptions);

function isEditingUserContent(attribute = {}) {

  /*

  attributes should be an object with a shape like this:

  { "type": "string" }

  or this

  { "type": "component", "repeatable": false, "component": "default.text-block" }

  they are defined in files in these directories

  api/ * /models/*.settings.json
  components/ * /*.json 

  */

  return attribute['type'] != null
}

function getParsedOption(key, attribute = {}) {

  let optionValue = attribute[key];

  if (key === 'lang') {
    return (typeof optionValue === 'string') ? optionValue.toLowerCase() : defaultOptions[key];
  }

  if (key === 'height') {
    return (typeof optionValue === 'string') ? optionValue.toLowerCase() : defaultOptions[key];
  }

  if (key === 'fontFamily') {
    let allowedFonts = [
      'fira mono',  // https://fonts.google.com/specimen/Fira+Mono
      'fira code',  // https://fonts.google.com/specimen/Fira+Code
      'inconsolata',  // https://fonts.google.com/specimen/Inconsolata
      'roboto mono',  // https://fonts.google.com/specimen/Roboto+Mono
      'ubuntu mono',  // https://fonts.google.com/specimen/Ubuntu+Mono
      'ibm plex mono'  // https://fonts.google.com/specimen/IBM+Plex+Mono
    ];

    return (typeof optionValue === 'string' && allowedFonts.includes(optionValue.toLowerCase())) ? optionValue : defaultOptions[key];
  }

  if (key === 'fontSize') {
    return (typeof optionValue === 'string') ? optionValue.toLowerCase() : defaultOptions[key];
  }

  if (key === 'darkTheme') {
    return (typeof optionValue === 'boolean') ? optionValue : defaultOptions[key];
  }

  if (key === 'indentWithTab') {
    return (typeof optionValue === 'boolean') ? optionValue : defaultOptions[key];
  }

  if (key === 'indentationMarkers') {
    return (typeof optionValue === 'boolean') ? optionValue : defaultOptions[key];
  }

  if (key === 'lineWrapping') {
    return (typeof optionValue === 'boolean') ? optionValue : defaultOptions[key];
  }

  if (key === 'singleLine') {
    return (typeof optionValue === 'boolean') ? optionValue : defaultOptions[key];
  }
  
  if (key === 'columnElClass') {
    // the string given to classList.add must not by empty and can't have space characters
    return (typeof optionValue === 'string' && optionValue !== '' && /\s/.test(optionValue) === false) ? optionValue : defaultOptions[key];
  }

  // emmet support will be added in the future

  // if (key === 'emmet') {
  //   return (typeof optionValue === 'boolean' && getParsedOption(attrs, 'lang') === 'html') ? optionValue : defaultOptions[key];
  // }

  throw new Error('invalid option: ' + key);
}

function getLangProvider(lang) {

  if (lang === 'html') { return html }
  else if (lang === 'markdown') { return markdown }
  else if (lang === 'javascript') { return javascript }
  else if (lang === 'json') { return json }
  else if (lang === 'sql') { return sql }
  else if (lang === 'php') { return php }
  else if (lang === 'rust') { return rust }
  else if (lang === 'python') { return python }
  else if (lang === 'java') { return java }
  else if (lang === 'css') { return css }
  else if (lang === 'xml') { return xml }
  else if (lang === 'wast') { return wast }
  else if (lang === 'cpp') { return cpp }
  else if (lang === 'lezer') { return lezer }
  else { return null }
}

function log(message, ...rest) {

  //if (new URLSearchParams(window.location.search).get('debug') !== 'true') { return }
  if (!window.pluginDebug) { return }

  console.log(message, ...rest);
}

function adjustFocusStyles(el, hasFocus) {

  // manually adjust the border color, to be like the other input elements

  log('adjustFocusStyles');

  el.style['border-color'] = hasFocus ? 'rgb(120, 202, 255)' : 'rgb(227, 233, 243)';
}

function loadFont(fontFamily) {

  let id = 'strapi-plugin-code-editor-' + fontFamily.replace(/\s/g, '-');
  let fontAlreadyLoaded = document.getElementById(id) != null;

  if (fontAlreadyLoaded) { return }

  let linkEl = document.createElement('link');
  linkEl.rel = 'stylesheet';
  linkEl.id = id;
  linkEl.href = getFontHref(fontFamily);
  linkEl.dataset.description = 'this stylesheet was inserted dynamically by strapi-plugin-code-editor';
  
  document.querySelector('head').appendChild(linkEl);
}

function getFontHref(fontFamily) {

  if (fontFamily === 'fira mono') {
    return 'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'fira code') {
    return 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'inconsolata') {
    return 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'roboto mono') {
    return 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'ubuntu mono') {
    return 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'ibm plex mono') {
    return 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap';
  }
}


export {
  isEditingUserContent,
  getParsedOption,
  log,
  getLangProvider,
  adjustFocusStyles,
  loadFont
}
