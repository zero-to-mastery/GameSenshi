import { ExportAtoms } from 'componentAtoms'
import {
	FinalInputText,
	FinalInputSelect,
	FinalInputDate,
} from 'componentMolecules/FinalInput'
import { TabPaneNotificationSettings } from 'componentMolecules/TabPaneNotificationSettings'
import {
	CheckBoxListInstantFeedbackPropedSettingNotificationsPush,
	CheckBoxListInstantFeedbackPropedSettingNotificationsEmail,
} from 'componentMolecules/CheckBoxListInstantFeedback'

export const ExportMolecules = {
	...ExportAtoms,
	TabPaneNotificationSettings,
	FinalInputText,
	FinalInputSelect,
	FinalInputDate,
	CheckBoxListInstantFeedbackPropedSettingNotificationsPush,
	CheckBoxListInstantFeedbackPropedSettingNotificationsEmail,
}
