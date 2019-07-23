import Vue from 'vue'
import Swal from 'sweetalert2'
import { EventManager } from '../utilities'
import "@sweetalert2/theme-dark/dark.scss";

Vue.mixin({
	created() {
		this.notify = Swal.mixin({
			toast: true,
			position: 'bottom-end',
			showConfirmButton: false,
			timer: 3000,
			customClass: {
				popup: 'shadow-lg'
			}
		})
	},
	methods: {
		// These are mainly meant for logging and not ideal for hooking into events
		notifyInfo(id, message, toast = false) {
			console.log('WP DeployKit:', message)
			EventManager.$emit(id, message)
			toast && this.notify.fire({
				type: 'info',
				title: 'string' === typeof message ? message : this.__('Doing something...', 'ml-slider')
			})
		},
		notifyWarning(id, message, toast = false) {
			console.warn('WP DeployKit:', message)
			EventManager.$emit(id, message)
			toast && this.notify.fire({
				type: 'warning',
				title: 'string' === typeof message ? message : this.__('No error message provided.', 'ml-slider')
			})
		},
		notifySuccess(id, message, toast = false) {
			console.log('WP DeployKit:', message)
			EventManager.$emit(id, message)
			toast && this.notify.fire({
				type: 'success',
				title: 'string' === typeof message ? message : this.__('Success', 'ml-slider')
			})
		},
		notifyError(id, message, toast = false) {
			console.error('WP DeployKit:', message)
			EventManager.$emit(id, message)
			toast && this.notify.fire({
				showConfirmButton: true,
				timer: null,
				type: 'error',
				title: 'string' === typeof message ? message : this.__('Error', 'ml-slider')
			})
		}
	}
})