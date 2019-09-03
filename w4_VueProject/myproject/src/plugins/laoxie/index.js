let myPlugin = {}

import step from './components/step.vue';

myPlugin.install = function(Vue){
    Vue.component(step.name,step)
}

export default myPlugin;