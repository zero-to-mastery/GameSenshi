// https://medium.com/@AllanHasegawa/setting-config-for-firebase-cloud-functions-with-json-136f455e7c69
import child_process from 'child_process'

import {
	ENV,
	REACT_APP_API_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_DATABASE_URL,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_MESSAGING_SENDER_ID,
	REACT_APP_APP_ID,
	VERIFY_EMAIL_API_KEY,
	PLAYGROUND,
} from './src/constantValues'

const spawn = child_process.spawn

const obj = {
	[ENV]: {
		[REACT_APP_API_KEY]: process.env[REACT_APP_API_KEY],
		[REACT_APP_AUTH_DOMAIN]: process.env[REACT_APP_AUTH_DOMAIN],
		[REACT_APP_DATABASE_URL]: process.env[REACT_APP_DATABASE_URL],
		[REACT_APP_PROJECT_ID]: process.env[REACT_APP_PROJECT_ID],
		[REACT_APP_STORAGE_BUCKET]: process.env[REACT_APP_STORAGE_BUCKET],
		[REACT_APP_MESSAGING_SENDER_ID]: process.env[REACT_APP_MESSAGING_SENDER_ID],
		[REACT_APP_APP_ID]: process.env[REACT_APP_APP_ID],
		[VERIFY_EMAIL_API_KEY]: process.env[VERIFY_EMAIL_API_KEY],
		[PLAYGROUND]: process.env[PLAYGROUND],
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
