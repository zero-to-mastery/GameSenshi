import { DropdownNavbar, DROPDOWN_NAVBAR_STATE_SHOW } from './DropdownNavbar'
import { StateContainer, storeUser, STORE_USER_STATE_SIGNED_IN } from 'state'

const mapStoreUserStateToProp = {
	[DROPDOWN_NAVBAR_STATE_SHOW]: STORE_USER_STATE_SIGNED_IN,
}

const DropdownNavbarStoreUser = StateContainer(
	DropdownNavbar,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

export { DropdownNavbarStoreUser }
