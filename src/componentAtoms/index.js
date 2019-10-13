import { ExportProton } from 'componentaProton'
import { FinalForm } from 'componentAtoms/FinalForm'
import { ListText } from 'componentAtoms/ListText'
import {
	InputSelect,
	VALUE,
	LABEL,
	DISABLE,
	COLOR,
} from 'componentAtoms/InputSelect'
import { InputText } from 'componentAtoms/InputText'
import { PopoverCommon } from 'componentAtoms/PopoverCommon'
import Footer from 'componentAtoms/Footers/Footer'
import IndexHeader from 'componentAtoms/Headers/IndexHeader.jsx'
import { ButtonsSocialAuthPropedDefault } from 'componentAtoms/ButtonsSocialAuth'
import {
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
} from 'componentAtoms/ButtonSignInUp'
import ErrorBoundary from 'componentAtoms/ErrorBoundary/ErrorBoundary'
import { AvatarUserStoreUserPropedSettings } from 'componentAtoms/ImageUpload'
import { AlertCommonStoreAlert } from 'componentAtoms/AlertCommon'
import { ProgressCommonStoreProgress } from 'componentAtoms/ProgressCommon'
import { CheckBox } from 'componentAtoms/CheckBox'
import { HeaderLined } from 'componentAtoms/HeaderLined'
import {
	ModalStoreModalPropedAuth,
	ModalCommon,
} from 'componentAtoms/ModalCommon'
import { ButtonSubmit } from 'componentAtoms/ButtonSubmit/ButtonSubmit'
import { TabPaneContainer } from 'componentAtoms/TabPaneContainer/TabPaneContainer'
import { TabListVerticalPropedSettingPage } from 'componentAtoms/TabListVertical'
import { IconCard } from 'componentAtoms/IconCard'
import { LabelForm, LabelFormSimple } from 'componentAtoms/LabelForm'
import { InputDate } from 'componentAtoms/InputDate'
import { BrandNavbarPropedIndexNavbarStoreUser } from 'componentAtoms/BrandNavbar'
import { LoaderNavLinkPropedIndexNavbarStoreUser } from 'componentAtoms/LoaderNavLink'
import { IconNotificationStoreUserPropedIndexNavbar } from 'componentAtoms/IconNotification'
import {
	ListNavItemStoreUserPropedNavbarIndex,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
} from 'componentAtoms/ListNavItem'
import { MenuHamburger } from 'componentAtoms/MenuHamburger'
import { HeaderCollapsedPropedNavbarIndex } from 'componentAtoms/HeaderCollapsed'
import { DropdownMenuNavbarStoreUserPropedNavbarIndex } from 'componentAtoms/DropdownMenuNavbar'
import { AvatarUserStoreUser } from 'componentAtoms/AvatarUser'
import { DropdownNavbarStoreUser } from 'componentAtoms/DropdownNavbar'
import { Shader } from 'componentAtoms/Shader'

export const ExportAtoms = {
	...ExportProton,
	Shader,
	Footer,
	FinalForm,
	IndexHeader,
	ErrorBoundary,
	AvatarUserStoreUserPropedSettings,
	AlertCommonStoreAlert,
	ProgressCommonStoreProgress,
	ButtonsSocialAuthPropedDefault,
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
	ModalStoreModalPropedAuth,
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
}
