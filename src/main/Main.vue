<script>
import './components'
import { EventManager } from '../utilities'
import { mapState } from 'vuex'
import router from '../router'
import { Axios as api } from '../api'
const { ipcRenderer } = require('electron')

export default {
	props: {},
	data() {
		return {
			initializing: true
		}
	},
	computed: mapState({
		// The logged in user (auth) may be able to switch the current user (i.e. admins)
		// user: state => state.users.current,
		// auth: state => state.auth.user,
		apiToken: state => state.settings.apiToken
	}),
	created() {
		if (ipcRenderer.sendSync('get-setting', 'apiToken')) {
			this.init()
		} else {
			this.initializing = false
		}

		// Intercept all api calls to check if unauthenticated, then remove user
		api.interceptors.response.use(undefined, error => {
			return new Promise((resolve, reject) => {
				if (401 === error.response.status) {
					this.$store.commit('users/setUser', null)
					this.$store.commit('auth/setUserHasValidApiToken', false)
					router.push('settings')
					reject(error)
				}
			})
		})
	},
	methods: {
		init() {
			this.notifyInfo('Connecting...', 'Connecting...', true)
			this.$store.dispatch('users/getCurrentUser').then(response => {
				if (200 === response.status) {
					router.push('settings') // TODO default to home
					this.notifySuccess('token-ok', 'Success. Logged in.', true)
				}
				this.initializing = false
			})
		}
	}
}
</script>
