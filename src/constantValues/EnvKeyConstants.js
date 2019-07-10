// firebase do not allow to use any capital letter in env var name
const ENV = 'env'
const REACT_APP_ = 'react_app_'
const REACT_APP_API_KEY = REACT_APP_ + 'api_key'
const REACT_APP_AUTH_DOMAIN = REACT_APP_ + 'auth_domain'
const REACT_APP_DATABASE_URL = REACT_APP_ + 'database_url'
const REACT_APP_PROJECT_ID = REACT_APP_ + 'project_id'
const REACT_APP_STORAGE_BUCKET = REACT_APP_ + 'storage_bucket'
const REACT_APP_MESSAGING_SENDER_ID = REACT_APP_ + 'messaging_sender_id'
const REACT_APP_APP_ID = REACT_APP_ + 'app_id'
const ENABLE_PLAYGROUND = 'playground_enabled'

// third party service
const VERIFY_EMAIL_API_KEY = 'verify_email_api_key'
const APOLLO_ENGINE_API_KEY = 'apollo_engine_api_key'

export {
	ENV,
	REACT_APP_API_KEY,
	REACT_APP_AUTH_DOMAIN,
	REACT_APP_DATABASE_URL,
	REACT_APP_PROJECT_ID,
	REACT_APP_STORAGE_BUCKET,
	REACT_APP_MESSAGING_SENDER_ID,
	REACT_APP_APP_ID,
	ENABLE_PLAYGROUND,
	VERIFY_EMAIL_API_KEY,
	APOLLO_ENGINE_API_KEY,
}
