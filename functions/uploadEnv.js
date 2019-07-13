// https://medium.com/@AllanHasegawa/setting-config-for-firebase-cloud-functions-with-json-136f455e7c69
import child_process from 'child_process'

import {
	ENV,
	ENV_REACT_APP_API_KEY,
	ENV_REACT_APP_AUTH_DOMAIN,
	ENV_REACT_APP_DATABASE_URL,
	ENV_REACT_APP_PROJECT_ID,
	ENV_REACT_APP_STORAGE_BUCKET,
	ENV_REACT_APP_MESSAGING_SENDER_ID,
	ENV_REACT_APP_APP_ID,
	ENV_PROJECT_ID,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_URL,
	ENV_APOLLO_ENGINE_API_KEY,
} from './src/constantValues'

const spawn = child_process.spawn

const env = process.env

const obj = {
	[ENV]: {
		[ENV_REACT_APP_API_KEY]: env[ENV_REACT_APP_API_KEY],
		[ENV_REACT_APP_AUTH_DOMAIN]: env[ENV_REACT_APP_AUTH_DOMAIN],
		[ENV_REACT_APP_DATABASE_URL]: env[ENV_REACT_APP_DATABASE_URL],
		[ENV_REACT_APP_PROJECT_ID]: env[ENV_REACT_APP_PROJECT_ID],
		[ENV_REACT_APP_STORAGE_BUCKET]: env[ENV_REACT_APP_STORAGE_BUCKET],
		[ENV_REACT_APP_MESSAGING_SENDER_ID]: env[ENV_REACT_APP_MESSAGING_SENDER_ID],
		[ENV_REACT_APP_APP_ID]: env[ENV_REACT_APP_APP_ID],
		[ENV_PROJECT_ID]: env[ENV_PROJECT_ID],
		[ENV_VERIFY_EMAIL_API_URL]: env[ENV_VERIFY_EMAIL_API_URL],
		[ENV_ENABLE_PLAYGROUND]: env[ENV_ENABLE_PLAYGROUND],
		[ENV_APOLLO_ENGINE_API_KEY]: env[ENV_APOLLO_ENGINE_API_KEY],
		[ENV_CORS_WHITELIST]: env[ENV_CORS_WHITELIST],
	},
}

const isObj = x => x !== null && typeof x === 'object'

const parse = tree => {
	const values = []
	const properties = Object.keys(tree)
	properties.forEach(prop => {
		if (isObj(tree[prop])) {
			const children = parse(tree[prop])
			children.forEach(child => {
				const value = `${prop}.${child}`
				values.push(value)
			})
		} else {
			const value = `${prop}="${tree[prop]}"`
			values.push(value)
		}
	})
	return values
}

const runFirebaseConfigSet = properties => {
	return new Promise((resolve, reject) => {
		const args = ['functions:config:set'].concat(properties)
		const cmd = spawn('firebase', args, { shell: true })
		cmd.stdout.setEncoding('utf8')
		cmd.stdout.on('data', data => {
			console.log(data)
		})
		cmd.stderr.on('data', data => {
			console.log('Error:', cmd.stderr.toString())
		})
		cmd.on('close', code => {
			console.log(`Exit code: ${code}`)
			resolve(code)
		})
	})
}
runFirebaseConfigSet(parse(obj))
