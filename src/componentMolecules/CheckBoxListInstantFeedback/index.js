import React from 'react'

import { CheckBoxListInstantFeedback } from 'componentMolecules/CheckBoxListInstantFeedback/CheckBoxListInstantFeedback'
import {
	checkBoxesPush,
	checkBoxesEmail,
} from 'componentMolecules/CheckBoxListInstantFeedback/utils'

const CheckBoxListInstantFeedbackPropedPush = props => {
	return <CheckBoxListInstantFeedback list={checkBoxesPush} {...props} />
}

const CheckBoxListInstantFeedbackPropedEmail = props => {
	return <CheckBoxListInstantFeedback list={checkBoxesEmail} {...props} />
}

export {
	CheckBoxListInstantFeedbackPropedPush,
	CheckBoxListInstantFeedbackPropedEmail,
}
