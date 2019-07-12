// firebase do not allow to use any capital letter in env var name
// these env only used by backend
const ENV = 'env'
const ENV_REACT_APP_ = ENV + '_react_app_'
const ENV_REACT_APP_API_KEY = ENV_REACT_APP_ + 'api_key'
const ENV_REACT_APP_AUTH_DOMAIN = ENV_REACT_APP_ + 'auth_domain'
const ENV_REACT_APP_DATABASE_URL = ENV_REACT_APP_ + 'database_url'
const ENV_REACT_APP_PROJECT_ID = ENV_REACT_APP_ + 'project_id'
const ENV_REACT_APP_STORAGE_BUCKET = ENV_REACT_APP_ + 'storage_bucket'
const ENV_REACT_APP_MESSAGING_SENDER_ID = ENV_REACT_APP_ + 'messaging_sender_id'
const ENV_REACT_APP_APP_ID = ENV_REACT_APP_ + 'app_id'
const ENV_ENABLE_PLAYGROUND = ENV + '_playground_enabled'
const ENV_CORS_WHITELIST = ENV + '_cors_whitelist'

// third party service
const ENV_VERIFY_EMAIL_API_KEY = ENV + '_verify_email_api_key'
const ENV_APOLLO_ENGINE_API_KEY = ENV + '_apollo_engine_api_key'

export {
	ENV,
	ENV_REACT_APP_API_KEY,
	ENV_REACT_APP_AUTH_DOMAIN,
	ENV_REACT_APP_DATABASE_URL,
	ENV_REACT_APP_PROJECT_ID,
	ENV_REACT_APP_STORAGE_BUCKET,
	ENV_REACT_APP_MESSAGING_SENDER_ID,
	ENV_REACT_APP_APP_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_KEY,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
}
