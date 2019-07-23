import axios from 'axios'
import config from '../config.json'
import User from './User'
const { ipcRenderer } = require('electron')

const Axios = axios.create({
	baseURL: config.homebase,
	headers: {
		'Authorization': 'Bearer ' + ipcRenderer.sendSync('get-setting', 'apiToken'),
		'X-Requested-With': 'XMLHttpRequest'
	}
})


export { Axios, User }
