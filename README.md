# Electron Vue Starter

**A starting point for building Electron apps geared toward front-end developers.** This is meant as a starting place for personal projects, but perhaps someone will find it useful. 

I'm developing it alongside another Electron-based app and will update here over time with defaults that make sense with how I want to build apps. This is a work in progress, and definitely opinionated. But conversation is welcomed!

I'm using Laravel Spark for the app I'm building alongside, which lets users create an API token to communicate with the server. This starter also requires users have a valid API token before accessing the app.

Uses Electron Store to communicate with the server, but the server code is used minimially. This is intended for front-end developers. 

```
yarn
npm run start
```

Update the url in the config.json file. Until then you can add any API token using the dummy request and it will work. 

## Defaults
* Vuejs ([docs](https://vuejs.org/v2/guide/))
* Vuex ([docs](https://vuex.vuejs.org/))
* Vue Router ([docs](https://router.vuejs.org/))
* Tailwind CSS ([docs](https://tailwindcss.com/))
* Sweetalert2 ([docs](https://sweetalert2.github.io/))
* Axios ([docs](https://github.com/axios/axios))
* Laravel Mix ([docs](https://laravel-mix.com/docs/4.1/installation))
* Vue Fontawesome ([docs](https://github.com/FortAwesome/vue-fontawesome))

*Built off of Electron Forge ([docs](https://www.electronforge.io/))*

### Known issues
1. Vue Devtools work sporatically. I believe this is an issue specific to Electron 3 but at the moment I wouldn't expect the Vue Devtools to function

### TODO
1. Add tests
2. Add more default tools
