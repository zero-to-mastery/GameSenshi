// firebase do not allow to use any capital letter in env var name
// these env only used by backend
const ENV = 'env'
const generateEnv = string => ENV + '_' + string
const ENV_ENABLE_PLAYGROUND = generateEnv('playground_enabled')
const ENV_CORS_WHITELIST = generateEnv('cors_whitelist')
const ENV_VERIFY_EMAIL_API_URL = generateEnv('verify_email_api_url')
const ENV_APOLLO_ENGINE_API_KEY = generateEnv('apollo_engine_api_key')
const ENV_PROJECT_ID = generateEnv('project_id')
const ENV_TWITCH_ID = generateEnv('twitch_id')
const ENV_TWITCH_SECRET = generateEnv('twitch_secret')

export {
	ENV,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_URL,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	ENV_PROJECT_ID,
	ENV_TWITCH_ID,
	ENV_TWITCH_SECRET,
}
