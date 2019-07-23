module.exports = {
	"packagerConfig": {},
	"makers": [
		{
			"name": "@electron-forge/maker-squirrel",
			"config": {
				"name": "Electron Vue Starter"
			}
		},
		{
			"name": "@electron-forge/maker-zip",
			"platforms": [
				"darwin"
			]
		},
		{
			"name": "@electron-forge/maker-deb",
			"config": {}
		},
		{
			"name": "@electron-forge/maker-rpm",
			"config": {}
		}
	],
	hooks: {
		postStart: async () => {
			if ('start' === process.env.npm_lifecycle_event) {
				terminal = require('child_process').spawn('bash')
				setTimeout(function () {
					terminal.stdin.write('npm run mix-watch\n')
					terminal.stdin.end()
				}, 1000)

				terminal.stdout.on('data', data => {
					console.log(`${data}`)
				})

				terminal.stderr.on('data', data => {
					console.log(`${data}`)
				})

				terminal.on('close', code => {
					console.log(`child process exited with code ${code}`)
				})
			}
			return true
		},
		generateAssets: async () => {
			if ('make' === process.env.npm_lifecycle_event) {
				terminal = require('child_process').spawn('bash')
				setTimeout(function () {
					terminal.stdin.write('npm run mix-build\n')
					terminal.stdin.end()
					return true
				}, 1000)

				terminal.stdout.on('data', data => {
					console.log(`${data}`)
				})

				terminal.stderr.on('data', data => {
					console.log(`${data}`)
				})

				terminal.on('close', code => {
					console.log(`child process exited with code ${code}`)
				})
			}
		}
	}
}