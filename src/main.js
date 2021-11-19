import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import store from './store/store';
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

// Axios Configuration
axios.interceptors.request.use((config) => {
    const axiosConfig = config;
    axiosConfig.baseURL = 'http://universities.hipolabs.com';
    return axiosConfig;
});

new Vue({
    vuetify,
    store: store,
    render: h => h(App),
}).$mount('#app')
