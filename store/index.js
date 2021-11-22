export const state = () => ({
    isLoggedIn: false
})

export const mutations = {
    setLogin(state) {
        state.isLoggedIn = true
    },

    setLogout(state) {
        state.isLoggedIn = false
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        const token = this.$cookies.get('token')

        if (token) {
            commit('setLogin')
        }
    }
}
