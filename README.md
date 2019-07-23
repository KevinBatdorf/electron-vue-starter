# Electron Vue Starter

A starting point for building Electron apps. This is meant as a starting place for personal projects, but perhaps someone will find it useful. 

I'm developing it alongside another Electron-based app and will update here over time with defaults that make sense with how I want to build apps. This is a work in progress, and definitely opinionated. But conversation is welcomed!

I'm using Laravel Spark for the app I'm building alongside, which lets users create an API token to communicate with the server. This starter also requires users have a valid API token before accessing the app.

*Built off of Electron Forge*

Uses Electron Store to communicate with the server, but the server code is used minimially. This is intended for front-end developers. 

## Defaults
* Vuejs
* Vuex
* Vue Router
* Tailwind CSS
* Sweetalert2
* Axios
* Laravel Mix
* Fontawesome

### Known issues
1. Vue Devtools work sporatically. I believe this is an issue specific to Electron 3 but at the moment I wouldn't expect the Vue Devtools to function
