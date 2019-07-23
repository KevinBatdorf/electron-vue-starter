import { Axios as api } from '../../api'
const { ipcRenderer } = require('electron')

// initial state
const state = {
	apiToken: ipcRenderer.sendSync('get-setting', 'apiToken') || ''
}

// getters
const getters = {}

// actions
const actions = {
	
}

// mutations
const mutations = {
	updateApiToken(state, token) {
		state.apiToken = token
		api.defaults.headers.Authorization = 'Bearer ' + token
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}