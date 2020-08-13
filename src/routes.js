import aboutProject from './components/aboutProject';
import aboutVue from './components/aboutVue';
import aboutInstallations from './components/aboutInstallations';
import CLIFilesSctures from './components/CLIFilesSctures';
import componentScturesGiris from './components/componentScturesGiris';
import interComponentCommunication from './components/interComponentCommunication';
import usingAdvancedComponent from './components/usingAdvancedComponent';
import vueRouter from './components/vueRouter';
import vuex from './components/vuex';




export const routes = [
    {path :"/", component :aboutProject},
    {path :"/aboutVue", component :aboutVue},
    {path :"/aboutInstallations", component :aboutInstallations},
    {path :"/CLIFilesSctures", component :CLIFilesSctures},
    {path :"/componentScturesGiris", component :componentScturesGiris},
    {path :"/interComponentCommunication", component :interComponentCommunication},
    {path :"/usingAdvancedComponent", component :usingAdvancedComponent},
    {path :"/vueRouter", component :vueRouter},
    {path :"/vuex", component :vuex},
]