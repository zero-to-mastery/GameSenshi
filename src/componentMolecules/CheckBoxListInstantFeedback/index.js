import React from 'react'

import { CheckBoxListInstantFeedback } from 'componentMolecules/CheckBoxListInstantFeedback/CheckBoxListInstantFeedback'
import {
	checkBoxesPush,
	checkBoxesEmail,
} from 'componentMolecules/CheckBoxListInstantFeedback/utils'

const CheckBoxListInstantFeedbackPropedSettingNotificationsPush = props => {
	return <CheckBoxListInstantFeedback list={checkBoxesPush} {...props} />
}

const CheckBoxListInstantFeedbackPropedSettingNotificationsEmail = props => {
	return <CheckBoxListInstantFeedback list={checkBoxesEmail} {...props} />
}

export {
	CheckBoxListInstantFeedbackPropedSettingNotificationsPush,
	CheckBoxListInstantFeedbackPropedSettingNotificationsEmail,
}
