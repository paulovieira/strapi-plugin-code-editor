# strapi-plugin-code-editor

A strapi plugin that replaces the `<textarea>` element (in the long text fields) by a proper text editor (using CodeMirror 6).


## Install

This plugin can be installed like any other plugin

in the strapi base directory:

```
npm install github:paulovieira/strapi-plugin-code-editor
npm run build
npm run develop
```

## Configuration options

A handful of aspects about the text editor can be easily configured (example: font size, light/dark theme, etc). There are 2 ways to adjust the options:

1) changing the default options: this will affect all instances of Codemirror (that is, the options will apply to all long text fields)
2) overriding using the `.settings.json` files relative to each model (or the respective `.json` file for components)




reference:

https://docs-v3.strapi.io/developer-docs/latest/development/plugin-customization.html

copy from 
```node_modules/strapi-plugin-code-editor/admin/src/components/defaultOptions.js```
to
```extensions/code-editor/admin/src/components/defaultOptions.js```

(if the `extensions/code-editor/admin/src/components/` directory doesn't exist, it will have to be created)





If you want to change the look of the editor or remove unused add-ons, you can add a custom Editor.js configuration to override the default settings:

Go to your Strapi folder
Copy template config file node_modules/strapi-plugin-react-editorjs/admin/src/config/customTools.js to extensions/react-editorjs/admin/src/config
Set up extensions/react-editorjs/admin/src/config/customTools.js
Rebuild Strapi


## Add new Codemirror extensions

same methodology as was done for the configuration options

Example: