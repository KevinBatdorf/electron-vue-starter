import User from '../../api/User'

// initial state
const state = {
	all: [],
	known: [],
	current: null
}

// getters
const getters = {}

// actions
const actions = {
	getCurrentUser({ commit }) {
		return User.current().then((response) => {
			commit('setUser', response.data)
			commit('auth/setUserHasValidApiToken', true, { root: true })
			return response
		}).catch(error => {
			return error.response
		})
	}
}

// mutations
const mutations = {
	setUser(state, user) {
		state.current = user
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}