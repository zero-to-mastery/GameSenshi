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
} from './src/utils/envKeyConstants'

const spawn = child_process.spawn

const {
	[REACT_APP_API_KEY]: react_app_api_key,
	[REACT_APP_AUTH_DOMAIN]: react_app_auth_domain,
	[REACT_APP_DATABASE_URL]: react_app_database_url,
	[REACT_APP_PROJECT_ID]: react_app_project_id,
	[REACT_APP_STORAGE_BUCKET]: react_app_storage_bucket,
	[REACT_APP_MESSAGING_SENDER_ID]: react_app_messaging_sender_id,
	[REACT_APP_APP_ID]: react_app_app_id,
	[VERIFY_EMAIL_API_KEY]: verify_email_api_key,
} = process.env

const obj = {
	[ENV]: {
		[REACT_APP_API_KEY]: react_app_api_key,
		[REACT_APP_AUTH_DOMAIN]: react_app_auth_domain,
		[REACT_APP_DATABASE_URL]: react_app_database_url,
		[REACT_APP_PROJECT_ID]: react_app_project_id,
		[REACT_APP_STORAGE_BUCKET]: react_app_storage_bucket,
		[REACT_APP_MESSAGING_SENDER_ID]: react_app_messaging_sender_id,
		[REACT_APP_APP_ID]: react_app_app_id,
		[VERIFY_EMAIL_API_KEY]: verify_email_api_key,
	},
}
const isObj = x => x !== null && typeof x === 'object'

const parse = tree => {
	const values = []
	const properties = Object.keys(tree)
	properties.forEach(prop => {
		if (isObj(tree[prop])) {
			const childrens = parse(tree[prop])
			childrens.forEach(child => {
				const value = prop + '.' + child
				values.push(value)
			})
		} else {
			const value = prop + '=' + '"' + tree[prop] + '"'
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
