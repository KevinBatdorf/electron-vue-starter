<template>
	<div class="bg-gray-700 h-full pt-12 pb-4 px-2" style="width:70px;-webkit-app-region:drag">
		<div class="h-full flex items-center justify-between flex-col text-center text-gray-400">
			<div>
				<router-link to="/home"><font-awesome-icon size="lg" :icon="dashboardIcon" /></router-link>
			</div>
			<div>
				<router-link to="/settings"><font-awesome-icon size="lg" :icon="settingsIcon" /></router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCog, faThLarge } from '@fortawesome/free-solid-svg-icons'
export default {
	data() {
		return {
			body: 'I am a notifications.',
			settingsIcon: faCog,
			dashboardIcon: faThLarge
		}
	},
	components: {
    	FontAwesomeIcon
  	}
}
</script>