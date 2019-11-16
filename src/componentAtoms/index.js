import { Exports as ExportProtons } from 'componentaProton'
import { FinalForm } from './FinalForm'
import { TextAlert } from './TextAlert'
import { InputSelect, VALUE, LABEL, DISABLE, COLOR } from './InputSelect'
import { InputText } from './InputText'
import { PopoverCommon } from './PopoverCommon'
import Footer from './Footers/Footer'
import {
	ButtonsIconOptioned,
	ButtonsIconPropedAuth,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
} from './ButtonsIcon'
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
import { RatingProfile } from './RatingProfile'
import { ButtonAddToCartPropedProfile } from './ButtonAddToCart'
import { QuantityProfile } from './Quantity'
import { ContainerTitledPropedDefault } from './ContainerTitled'
import {
	CarouselCommonPropedProfile,
	CarouselCommonPropedIndex,
} from './CarouselCommon'

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
import { BadgesPropedDefault } from './Badges'
import {
	IconsImagePropedGameIcons,
	IconsImageOptioned,
	IconsImage,
} from './IconsImage'
import { StatusCommonPropedOnline } from './StatusCommon'
import { ButtonSound } from './ButtonSound'
import {
	CheckBoxIconPropedFavorite,
	CheckBoxIconPropedTip,
} from './CheckBoxIcon'
import { Section } from './Section'
import {
	WrapperPropedIndex,
	WrapperPropedAccount,
	WrapperPropedProfile,
} from './Wrapper'

export const Exports = {
	...ExportProtons,
	Footer,
	FinalForm,
	ErrorBoundary,
	ImageUploadStoreUserPropedSettings,
	AlertCommonStoreAlert,
	ProgressCommonStoreProgress,
	ButtonsIconOptioned,
	ButtonsIconPropedAuth,
	BUTTONS_ICON_ID,
	BUTTONS_ICON_ICON,
	BUTTONS_ICON_COLOR,
	BUTTONS_ICON_TOOLTIP,
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
	TextAlert,
	InputSelect,
	VALUE,
	LABEL,
	DISABLE,
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
	RatingProfile,
	ButtonAddToCartPropedProfile,
	QuantityProfile,
	ContainerTitledPropedDefault,
	BadgesPropedDefault,
	IconsImagePropedGameIcons,
	IconsImageOptioned,
	IconsImage,
	StatusCommonPropedOnline,
	ButtonSound,
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
	WrapperPropedIndex,
	WrapperPropedAccount,
	WrapperPropedProfile,
}
