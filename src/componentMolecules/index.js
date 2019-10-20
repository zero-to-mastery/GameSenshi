import { Exports as ExportAtoms } from 'componentAtoms'
import { FinalInputText, FinalInputSelect, FinalInputDate } from './FinalInput'
import { TabPaneSettingListStoreUserPropedNotification } from './TabPaneSettingList'
import { ModalImageCropperPropedSettings } from './ModalImageCropper'
import { AvatarProfile } from './AvatarProfile'

export const Exports = {
	...ExportAtoms,
	TabPaneSettingListStoreUserPropedNotification,
	FinalInputText,
	FinalInputSelect,
	FinalInputDate,
	ModalImageCropperPropedSettings,
	AvatarProfile,
}
