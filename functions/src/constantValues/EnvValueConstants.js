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
const ENV_VALUE_TWITCH_REDIRECT = env.REACT_APP_TWITCH_REDIRECT

const ENV_VALUE_TWITCH_OAUTH_LINK = `https://id.twitch.tv/oauth2/authorize?client_id=${ENV_VALUE_TWITCH_CLIENT}&redirect_uri=${ENV_VALUE_TWITCH_REDIRECT}&response_type=code&scope=openid+user_read+user:read:email&`

export {
	ENV_VALUE_FIREBASE_CONFIG,
	ENV_VALUE_TWITCH_REDIRECT,
	ENV_VALUE_TWITCH_OAUTH_LINK,
}
