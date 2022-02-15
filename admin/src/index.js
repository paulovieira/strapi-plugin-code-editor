import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import App from './containers/App';
import Initializer from './containers/Initializer';
import lifecycles from './lifecycles';
import trads from './translations';
import CodemirrorEditor from './components/CodemirrorEditor.js'
import fieldsToRegister from './components/fieldsToRegister.js'

export default strapi => {
  const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;
  const icon = pluginPkg.strapi.icon;
  const name = pluginPkg.strapi.name;

  const plugin = {
    blockerComponent: null,
    blockerComponentProps: {},
    description: pluginDescription,
    icon,
    id: pluginId,
    initializer: Initializer,
    injectedComponents: [],
    isReady: false,
    isRequired: pluginPkg.strapi.required || false,
    layout: null,
    lifecycles,
    mainComponent: App,
    name,
    preventComponentRendering: false,
    trads,
    // menu: {
    //   pluginsSectionLinks: [
    //     {
    //       destination: `/plugins/${pluginId}`,
    //       icon,
    //       label: {
    //         id: `${pluginId}.plugin.name`,
    //         defaultMessage: name,
    //       },
    //       name,
    //       permissions: [
    //         // Uncomment to set the permissions of the plugin here
    //         // {
    //         //   action: '', // the action name should be plugins::plugin-name.actionType
    //         //   subject: null,
    //         // },
    //       ],
    //     },
    //   ],
    // },
  };

  // for "short text"  

  if (fieldsToRegister['text']) {
    strapi.registerField({ type: 'text', Component: CodemirrorEditor });  
  }
  
  // for "long text"

  if (fieldsToRegister['textarea']) {
    strapi.registerField({ type: 'textarea', Component: CodemirrorEditor })  
  }

  return strapi.registerPlugin(plugin);
};
