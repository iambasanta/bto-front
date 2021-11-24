export const state = () => ({
    isLoggedIn: false,
    user: {}
})

export const mutations = {
    setLogin(state, payload) {
        state.isLoggedIn = true
        state.user = payload
    },

    setLogout(state) {
        state.isLoggedIn = false
    }
}

export const actions = {
    async nuxtServerInit({ commit }, { req }) {
        const token = this.$cookies.get('token')

        if (token) {
            const res = await this.$axios.$get('user/profile')
            commit('setLogin', res.data)
        }
    }
}
