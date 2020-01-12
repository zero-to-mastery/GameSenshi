const env = process.env

const ENV_VALUE_FIREBASE_CONFIG = Object.freeze({
	apiKey: env.REACT_APP_API_KEY,
	authDomain: env.REACT_APP_AUTH_DOMAIN,
	databaseURL: env.REACT_APP_DATABASE_URL,
	projectId: env.REACT_APP_PROJECT_ID,
	storageBucket: env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
	appId: env.REACT_APP_APP_ID,
})

const ENV_VALUE_TWITCH_CLIENT = env.REACT_APP_TWITCH_CLIENT

let redirect = ''

try {
	redirect = window.location.origin
} catch (err) {
	// back end doesnt need this, this is to prevent error in backen because window not defined
}

const ENV_VALUE_TWITCH_OAUTH_LINK = `https://id.twitch.tv/oauth2/authorize?client_id=${ENV_VALUE_TWITCH_CLIENT}&redirect_uri=${redirect}&response_type=code&scope=openid+user_read+user:read:email&`

export { ENV_VALUE_FIREBASE_CONFIG, ENV_VALUE_TWITCH_OAUTH_LINK }
