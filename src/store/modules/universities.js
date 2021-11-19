import axios from "axios";

const state = {
    universities: [],
    searchUniversitiesPending: {}
}

const mutations = {
    SEARCH_UNIVERSITIES_PENDING(state) {
        state.searchUniversitiesPending = true
    },
    SEARCH_UNIVERSITIES_FULFILLED(state, payload) {
        state.universities = [...payload]
        state.searchUniversitiesPending = false
    },
    SEARCH_UNIVERSITIES_ERROR(state) {
        state.searchUniversitiesPending = false
    }
}

const actions = {
    async searchUniversities({ commit }) {
        commit('SEARCH_UNIVERSITIES_PENDING')
        try {
            const url = '/search?country=switzerland'
            const response = await axios.get(url)
            commit('SEARCH_UNIVERSITIES_FULFILLED', response.data)
            return Promise.resolve(response)
        } catch (error) {
            commit('SEARCH_UNIVERSITIES_ERROR')
            return Promise.reject(error)
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
