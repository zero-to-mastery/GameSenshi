// firebase do not allow to use any capital letter in env var name
// these env only used by backend
const ENV = 'env'
const ENV_ENABLE_PLAYGROUND = ENV + '_playground_enabled'
const ENV_CORS_WHITELIST = ENV + '_cors_whitelist'
const ENV_VERIFY_EMAIL_API_URL = ENV + '_verify_email_api_url'
const ENV_APOLLO_ENGINE_API_KEY = ENV + '_apollo_engine_api_key'
const ENV_PROJECT_ID = ENV + '_project-id'

export {
	ENV,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_URL,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	ENV_PROJECT_ID,
}
