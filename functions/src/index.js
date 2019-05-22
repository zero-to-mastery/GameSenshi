// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
const functions = require('firebase-functions')

// setup for absolute path https://coderwall.com/p/th6ssq/absolute-paths-require
global.base_dir = __dirname
global.abs_path = function(path) {
	return base_dir + path
}
global.include = function(file) {
	return require(abs_path('/' + file))
}

const admin = require('firebase-admin')
admin.initializeApp()

exports.signUp = functions.https.onCall((data, context) => {
	return { data }
})
// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	response.send('Hello from Firebase!')
// })
