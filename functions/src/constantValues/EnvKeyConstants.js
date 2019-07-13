// firebase do not allow to use any capital letter in env var name
// these env only used by backend
const ENV = 'env'
const ENV_PROJECT_ID = ENV + '_project_id'
const ENV_ENABLE_PLAYGROUND = ENV + '_playground_enabled'
const ENV_CORS_WHITELIST = ENV + '_cors_whitelist'

// third party service
const ENV_VERIFY_EMAIL_API_KEY = ENV + '_verify_email_api_key'
const ENV_APOLLO_ENGINE_API_KEY = ENV + '_apollo_engine_api_key'

export {
	ENV,
	ENV_PROJECT_ID,
	ENV_CORS_WHITELIST,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_KEY,
	ENV_APOLLO_ENGINE_API_KEY,
}
