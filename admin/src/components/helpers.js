import customDefaultOptions from './customDefaultOptions.js';
import languages from './languages.js';
import legacyLanguageModes from './legacyLanguageModes.js';

let customLanguages = {};  // should go to config
let availableLanguages = Object.assign({}, legacyLanguageModes, languages, customLanguages);

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

  attribute should be an object with a shape like this:

  { "type": "string" }

  or this

  { "type": "component", "repeatable": false, "component": "default.text-block" }

  they are defined in files in these directories

  api/ * /models/*.settings.json
  components/ * /*.json 

  */

  return attribute['type'] != null
}

function getParsedOption(key, value, fieldName, attribute = {}) {

  let fieldCustomOptions = attribute['strapi-plugin-code-editor'] || {};
  let optionValue = fieldCustomOptions[key];

  if (key === 'lang') {
    return (typeof optionValue === 'string') 
      ? optionValue 
      : (typeof defaultOptions[key] === 'function')
        ? defaultOptions[key](value, fieldName, attribute)
        : defaultOptions[key];
  }

  if (key === 'height') {
    return (typeof optionValue === 'string') ? optionValue : defaultOptions[key];
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
    return (typeof optionValue === 'string') ? optionValue : defaultOptions[key];
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
  availableLanguages,
  isEditingUserContent,
  getParsedOption,
  log,
  adjustFocusStyles,
  loadFont
}
