//https://cloud.google.com/billing/docs/how-to/notify#cap_disable_billing_to_stop_usage
// ! this should be removed because it may stop all services
import { google } from 'googleapis'
import { auth } from 'google-auth-library'

import { PROJECT_ID, onCall } from '1_fire_init'

const PROJECT_NAME = `projects/${PROJECT_ID}`
const billing = google.cloudbilling('v1').projects

/**
 * @return {Promise} Credentials set globally
 */
const _setAuthCredential = async () => {
	const res = await auth.getApplicationDefault()

	let client = res.credential
	if (client.hasScopes && !client.hasScopes()) {
		client = client.createScoped([
			'https://www.googleapis.com/auth/cloud-billing',
			'https://www.googleapis.com/auth/cloud-platform',
		])
	}

	// Set credential globally for all requests
	google.options({
		auth: client,
	})
}

/**
 * Determine whether billing is enabled for a project
 * @param {string} projectName Name of project to check if billing is enabled
 * @return {bool} Whether project has billing enabled or not
 */
const _isBillingEnabled = async projectName => {
	const res = await billing.getBillingInfo({ name: projectName })
	return res.data.billingEnabled
}

/**
 * Disable billing for a project by removing its billing account
 * @param {string} projectName Name of project disable billing on
 * @return {string} Text containing response from disabling billing
 */
const _disableBillingForProject = async projectName => {
	const res = await billing.updateBillingInfo({
		name: projectName,
		resource: { billingAccountName: '' }, // Disable billing
	})
	return `Billing disabled: ${JSON.stringify(res.data)}`
}

const stopBilling = onCall(async pubsubEvent => {
	const pubsubData = JSON.parse(
		Buffer.from(pubsubEvent.data, 'base64').toString()
	)
	if (pubsubData.costAmount <= pubsubData.budgetAmount) {
		return `No action necessary. (Current cost: ${pubsubData.costAmount})`
	}

	await _setAuthCredential()
	if (await _isBillingEnabled(PROJECT_NAME)) {
		return _disableBillingForProject(PROJECT_NAME)
	} else {
		return 'Billing already disabled'
	}
})

export { stopBilling }
