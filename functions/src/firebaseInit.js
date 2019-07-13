import * as functions from 'firebase-functions' // https://stackoverflow.com/questions/51118943/cannot-read-property-https-of-undefined-error-in-firebase-functions
import * as admin from 'firebase-admin'

import { ENV } from 'constantValues'

const env = functions.config()[ENV]

admin.initializeApp()

export { functions, env }
