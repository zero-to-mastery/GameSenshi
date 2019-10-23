import { Exports as ExportProtons } from 'componentaProton'
import { FinalForm } from './FinalForm'
import { ListText } from './ListText'
import { InputSelect, VALUE, LABEL, DISABLE, COLOR } from './InputSelect'
import { InputText } from './InputText'
import { PopoverCommon } from './PopoverCommon'
import Footer from './Footers/Footer'
import IndexHeader from './Headers/IndexHeader.jsx'
import {
	ButtonsSocialOptioned,
	ButtonsSocialsPropedAuth,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
} from './ButtonIcons'
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
import { TabListVerticalPropedSettingPage } from './TabListVertical'
import { IconCard } from './IconCard'
import { LabelForm, LabelFormSimple } from './LabelForm'
import { InputDate } from './InputDate'
import { BrandNavbarPropedIndexNavbarStoreUser } from './BrandNavbar'
import { LoaderNavLinkPropedIndexNavbarStoreUser } from './LoaderNavLink'
import { IconNotificationStoreUserPropedIndexNavbar } from './IconNotification'
import {
	ListNavItemStoreUserPropedNavbarIndex,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
} from './ListNavItem'
import { MenuHamburger } from './MenuHamburger'
import { HeaderCollapsedPropedNavbarIndex } from './HeaderCollapsed'
import { DropdownMenuNavbarStoreUserPropedNavbarIndex } from './DropdownMenuNavbar'
import { AvatarUserStoreUser } from './AvatarUser'
import { DropdownNavbarStoreUser } from './DropdownNavbar'
import { CarouselCommonPropedProfile } from './CarouselCommon'
import { RatingProfile } from './RatingProfile'
import { ButtonAddToCartPropedProfile } from './ButtonAddToCart'
import { QuantityProfile } from './Quantity'
import { ContainerTitledPropedDefault } from './ContainerTitled'

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
import { IconGames } from './IconGames'
import { StatusCommonPropedOnline } from './StatusCommon'
import { ButtonSound } from './ButtonSound'
import {
	CheckBoxIconPropedFavorite,
	CheckBoxIconPropedTip,
} from './CheckBoxIcon'

export const Exports = {
	...ExportProtons,
	Footer,
	FinalForm,
	IndexHeader,
	ErrorBoundary,
	ImageUploadStoreUserPropedSettings,
	AlertCommonStoreAlert,
	ProgressCommonStoreProgress,
	ButtonsSocialOptioned,
	ButtonsSocialsPropedAuth,
	BUTTON_SOCIALS_ID,
	BUTTON_SOCIALS_ICON,
	BUTTON_SOCIALS_COLOR,
	BUTTON_SOCIALS_TOOLTIP,
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
	ListText,
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
	TabListVerticalPropedSettingPage,
	IconCard,
	LabelForm,
	LabelFormSimple,
	InputDate,
	BrandNavbarPropedIndexNavbarStoreUser,
	LoaderNavLinkPropedIndexNavbarStoreUser,
	IconNotificationStoreUserPropedIndexNavbar,
	ListNavItemStoreUserPropedNavbarIndex,
	MenuHamburger,
	HeaderCollapsedPropedNavbarIndex,
	DropdownMenuNavbarStoreUserPropedNavbarIndex,
	AvatarUserStoreUser,
	DropdownNavbarStoreUser,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
	CarouselCommonPropedProfile,
	RatingProfile,
	ButtonAddToCartPropedProfile,
	QuantityProfile,
	ContainerTitledPropedDefault,
	BadgesPropedDefault,
	IconGames,
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
}
