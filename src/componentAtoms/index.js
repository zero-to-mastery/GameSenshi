import { Exports as ExportProtons } from 'componentaProton'
import { FinalForm } from './FinalForm'
import { TextAlert } from './TextAlert'
import {
	InputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	INPUT_SELECT_DISABLED,
	COLOR,
} from './InputSelect'
import { InputText } from './InputText'
import { PopoverCommon } from './PopoverCommon'
import Footer from './Footers/Footer'
import { ButtonsCommonOptioned, ButtonsCommonPropedAuth } from './ButtonsCommon'
import {
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
} from './ButtonSignInUp'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { ImageUploadStoreUserPropedSettings } from './ImageUpload'
import { AlertCommonStoreAlert } from './AlertCommon'
import { ProgressCommonStoreProgress } from './ProgressCommon'
import { CheckBox } from './CheckBox'
import { HeaderLined } from './HeaderLined'
import { ModalCommonStoreModalPropedAuth, ModalCommon } from './ModalCommon'
import { ButtonSubmit } from './ButtonSubmit'
import { TabPaneContainer } from './TabPaneContainer'
import {
	TabListVerticalPropedWithRouter,
	TAB_LIST_VERTICAL_NAME,
	TAB_LIST_VERTICAL_TO,
	TAB_LIST_VERTICAL_ICON,
} from './TabListVertical'
import { IconCard } from './IconCard'
import { LabelForm, LabelFormSimple } from './LabelForm'
import { InputDate } from './InputDate'
import { BrandNavbarStoreUserPropedNavbar } from './BrandNavbar'
import { LoaderNavLinkStoreUserPropedNavbar } from './LoaderNavLink'
import { IconNotificationStoreUserPropedNavbar } from './IconNotification'
import {
	ListNavItemStoreUserPropedNavbarIndex,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
} from './ListNavItem'
import { MenuHamburger } from './MenuHamburger'
import { HeaderCollapsedPropedNavbarIndex } from './HeaderCollapsed'
import { DropdownMenuNavbarStoreUserPropedNavbar } from './DropdownMenuNavbar'
import { AvatarUserStoreUser } from './AvatarUser'
import { DropdownNavbarStoreUser } from './DropdownNavbar'
import { ButtonsCommonChatAndCheckout } from './ButtonsCommon'
import { QuantityProfile } from './Quantity'
import {
	CarouselCommonPropedProfile,
	CarouselCommonPropedIndex,
} from './CarouselCommon'
import {
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
	TextIconPropedProfileGift,
	TextIconPropedProfileGallery,
	TextIconPropedProfileComments,
} from './TextIcon'

import {
	CommentCommonPropedDefault,
	ID,
	NAME,
	POSTED_TIME,
	AVATAR,
	BODY,
	NUM_COMMENTS,
} from './Comment'
import { PaginationCommonPropedDefault } from './PaginationCommon'
import { BadgesOptioned, Badges, BadgesPropedSenshi } from './Badges'
import {
	ImagesTooltipOptioned,
	ImagesTooltipPropedTabs,
	ImagesTooltip,
} from './ImagesTooltip'
import { StatusCommonPropedOnline } from './StatusCommon'
import {
	ButtonSoundStoreSoundPropedGender,
	ButtonSoundStoreSoundPropedCardUser,
} from './ButtonSound'
import {
	CheckBoxIconPropedFavorite,
	CheckBoxIconPropedTip,
} from './CheckBoxIcon'
import { Section } from './Section'
import {
	WrapperStoreWrapperPropedIndex,
	WrapperStoreWrapperPropedAccount,
	WrapperStoreWrapperPropedProfile,
	WrapperStoreWrapperPropedRegister,
	WrapperStoreWrapperPropedLogin,
	WrapperStoreWrapperPropedReset,
	WrapperStoreWrapperPropedError,
	WrapperStoreWrapperPropedCheckout,
} from './Wrapper'
import { CardUserSimple } from './CardUserSimple'
import {
	TabCommon,
	TAB_COMMON_TAB_NAME,
	TAB_COMMON_TAB_CONTENT,
} from './TabCommon'

export const Exports = {
	...ExportProtons,
	Footer,
	FinalForm,
	ErrorBoundary,
	ImageUploadStoreUserPropedSettings,
	AlertCommonStoreAlert,
	ProgressCommonStoreProgress,
	ButtonsCommonOptioned,
	ButtonsCommonPropedAuth,
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
	TextAlert,
	InputSelect,
	INPUT_SELECT_VALUE,
	INPUT_SELECT_LABEL,
	INPUT_SELECT_DISABLED,
	COLOR,
	InputText,
	PopoverCommon,
	CheckBox,
	HeaderLined,
	ModalCommonStoreModalPropedAuth,
	ModalCommon,
	ButtonSubmit,
	TabPaneContainer,
	TabListVerticalPropedWithRouter,
	TAB_LIST_VERTICAL_NAME,
	TAB_LIST_VERTICAL_TO,
	TAB_LIST_VERTICAL_ICON,
	IconCard,
	LabelForm,
	LabelFormSimple,
	InputDate,
	BrandNavbarStoreUserPropedNavbar,
	LoaderNavLinkStoreUserPropedNavbar,
	IconNotificationStoreUserPropedNavbar,
	ListNavItemStoreUserPropedNavbarIndex,
	MenuHamburger,
	HeaderCollapsedPropedNavbarIndex,
	DropdownMenuNavbarStoreUserPropedNavbar,
	AvatarUserStoreUser,
	DropdownNavbarStoreUser,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
	QuantityProfile,
	BadgesOptioned,
	Badges,
	BadgesPropedSenshi,
	ImagesTooltipPropedTabs,
	ImagesTooltipOptioned,
	ImagesTooltip,
	StatusCommonPropedOnline,
	ButtonSoundStoreSoundPropedGender,
	ButtonSoundStoreSoundPropedCardUser,
	CommentCommonPropedDefault,
	PaginationCommonPropedDefault,
	ID,
	NAME,
	POSTED_TIME,
	AVATAR,
	BODY,
	NUM_COMMENTS,
	CheckBoxIconPropedFavorite,
	CheckBoxIconPropedTip,
	CarouselCommonPropedProfile,
	CarouselCommonPropedIndex,
	Section,
	WrapperStoreWrapperPropedIndex,
	WrapperStoreWrapperPropedAccount,
	WrapperStoreWrapperPropedProfile,
	WrapperStoreWrapperPropedRegister,
	WrapperStoreWrapperPropedLogin,
	WrapperStoreWrapperPropedReset,
	WrapperStoreWrapperPropedError,
	WrapperStoreWrapperPropedCheckout,
	TextIconPropedPopularPlayer,
	TextIconPropedNewPlayer,
	TextIconPropedRandomPlayer,
	TextIconPropedProfileGift,
	TextIconPropedProfileGallery,
	TextIconPropedProfileComments,
	CardUserSimple,
	ButtonsCommonChatAndCheckout,
	TabCommon,
	TAB_COMMON_TAB_NAME,
	TAB_COMMON_TAB_CONTENT,
}
