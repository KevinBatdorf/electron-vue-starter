<template>
	<div class="p-4 max-w-5xl flex-grow">
		<h1 class="text-black font-bold mb-4">Settings</h1>
		<form
			@submit.prevent="verifyUserApi()"
			class="rounded-lg bg-gray-100 w-full p-6">
			<label
				for="apiKey"
				class="block"><small class="font-bold uppercase">API Key</small></label>
			<div class="flex">
				<input
					@input="updateApiToken"
					:value="apiToken"
					:disabled="verifying"
					:class="{ 'bg-gray-200 text-gray-400 italic': verifying }"
					type="text"
					class="flex-grow border border-r-0 focus:border-gray-500 shadow-none m-0 py-2 px-3 block focus:outline-none appearance-none leading-normal">
				<button
					@click="verifyUserApi()"
					class="w-24 bg-gray-600 border border-gray-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r inline-flex justify-center items-center focus:outline-none">
						<font-awesome-icon
							v-if="verifying"
							:icon="loadingIcon"
							spin
							class="spin"
						/>
						<span v-else>Verify</span>
				</button>
			</div>
			<p v-if="maybeTokenError"><small class="text-red-500">This API token needs to be vefified.</small></p>
			<p v-else><small v-if="apiToken.length" class="text-green-700">API token is valid.</small></p>
		</form>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
const { ipcRenderer } = require('electron')
export default {
	data() {
		return {
			loadingIcon: faSpinner,
			verifying: false
		}
	},
	computed: {
		maybeTokenError() {
			return this.apiToken.length && !this.hasValidApiToken
		},
		...mapState({
			hasValidApiToken: state => state.auth.user.hasValidApiToken,
			apiToken: state => state.settings.apiToken
		})
	},
	methods: {
		updateApiToken(e) {
			this.$store.commit('settings/updateApiToken', e.target.value)
		},
		verifyUserApi() {
			this.verifying = true
			// Update the stored data with the new token
			ipcRenderer.sendSync('set-setting', {option: 'apiToken', value: this.apiToken})
			// Getting the user data will verify it
			this.$store.dispatch('users/getCurrentUser').then(response => {
				if (401 === response.status) {
					this.notifyError('invalid-token', 'Error : ' + response.data.message, true)
				}
				
				if (200 === response.status) {
					this.notifySuccess('token-verified', 'Success. Logged in.', true)
				}

				this.verifying = false

			})
		}
	},
	components: {
    	FontAwesomeIcon
  	}
}
</script>