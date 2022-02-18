# strapi-plugin-code-editor

A strapi plugin that replaces the native `<textarea>` element (in the long text fields) by a proper text editor (using CodeMirror 6).


## Motivations and use cases

- Much better authoring experience than using the native `<textarea>`! With Codemirror6 we have all the useful features of a modern text editor (such as line numbers, multi-cursor, syntax highlighting, etc). It's also possible to customize the editor with new features (see below)
- The main use case is when the content is html, which gives some freedom to the editor that adds the content (this works very well when using TailwindCSS or a similar tool)
- also very useful to author content in raw markdown (using the markdown syntax highlighter provided by codemirror)
- text fields to store small programming code snippets; the syntax highlighting can be adjusted per-model (that is, it's possible to have a textfield for javascript code snippets, other textfield for rust, etc, and all of them have the correct syntax highlights - see the `lang` option below)

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

## Debug mode

TODO: change the gray of the gutter, to have a better contrast in relation to the gray of the strapi componennt
TODO: for the single-line editor (short text), don't install the basicSetup extension from
TODO: short text is stored internally as varchar(255)
TODO: import the css border colors from an option (for the focus)
TODO: the configuration files should all be in admin/config (or just config?)