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

import defaultOptions from './defaultOptions.js';

function getParsedOption(key, attribute) {

  let optionValue = attribute[key];

  if (key === 'lang') {
    return (typeof optionValue === 'string') ? optionValue.toLowerCase() : defaultOptions[key];
  }

  if (key === 'height') {
    return (typeof optionValue === 'string') ? optionValue.toLowerCase() : defaultOptions[key];
  }

  if (key === 'fontFamily') {
    let allowedFonts = [
      'fira mono',
      'fira code',
      'inconsolata',
      'roboto mono',
      'ubuntu mono'
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

  let id = 'strapi-plugin-code-editor-' + fontFamily.replace(/\s/g, '');
  let fontAlreadyLoaded = document.getElementById(id) != null;

  if (fontAlreadyLoaded) { return }

  let linkEl = document.createElement('link');
  linkEl.rel = 'stylesheet';
  linkEl.id = id;
  linkEl.dataset.description = 'this stylesheet inserted dynamically by strapi-plugin-code-editor';

  if (fontFamily === 'fira mono') {
    // reference: https://fonts.google.com/specimen/Fira+Mono
    linkEl.href = 'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'fira code') {
    // reference: https://fonts.google.com/specimen/Fira+Code
    linkEl.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'inconsolata') {
    // reference: https://fonts.google.com/specimen/Inconsolata
    linkEl.href = 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'roboto mono') {
    // reference: https://fonts.google.com/specimen/Roboto+Mono
    linkEl.href = 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap';
  }
  else if (fontFamily === 'ubuntu mono') {
    // reference: https://fonts.google.com/specimen/Ubuntu+Mono
    linkEl.href = 'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;500;700&display=swap';
  }
  // other monospace fonts can be added here
  
  document.querySelector('head').appendChild(linkEl);
}

export {
	getParsedOption,
	log,
	getLangProvider,
	adjustFocusStyles,
	loadFont
}
