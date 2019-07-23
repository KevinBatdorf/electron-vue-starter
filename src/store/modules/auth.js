
// initial state
const state = {
	user: {
		hasValidApiToken: false
	}
}

// getters
const getters = {
	auth(state) {
		return state.user
	}
}

// actions
const actions = {}

// mutations
const mutations = {
	setUserHasValidApiToken(state, status) {
		state.user.hasValidApiToken = status
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}