import Vue from 'vue';
import Vuex from 'vuex';

import universities from './modules/universities';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        universities
    },
    strict: true,
});
