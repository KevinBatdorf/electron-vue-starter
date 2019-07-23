<template>
	<div class="p-4">
		<button id="basic-noti">home</button>
	</div>
</template>

<script>
const { ipcRenderer } = require('electron')
export default {
	data() {
		return {
			message: 'From home.'
		}
	},
	mounted() {
		const notification = {
			title: 'Basic Notification',
			body: 'Short message part'
		}

		const notificationButton = document.getElementById('basic-noti')

		notificationButton.addEventListener('click', () => {
			const myNotification = new window.Notification(notification.title, notification)

			myNotification.onclick = () => {
				console.log('Notification clicked')
			}

			console.log(ipcRenderer.sendSync('set-setting', {option: 'apiToken', value: 'hi'}))

		})
	}
}
</script>