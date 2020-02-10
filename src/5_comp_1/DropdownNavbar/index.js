import {
	DropdownNavbar,
	DROPDOWN_NAVBAR_STATE_SHOW,
	DROPDOWN_NAVBAR_STATE_AVATAR,
} from './DropdownNavbar'
import {
	StateContainer,
	storeUser,
	STORE_USER_STATE_SIGNED_IN,
	STORE_USER_STATE_AVATAR,
} from '2_state'

const mapStoreUserStateToProp = {
	[DROPDOWN_NAVBAR_STATE_SHOW]: STORE_USER_STATE_SIGNED_IN,
	[DROPDOWN_NAVBAR_STATE_AVATAR]: STORE_USER_STATE_AVATAR,
}

const DropdownNavbarStoreUser = StateContainer(
	DropdownNavbar,
	[storeUser],
	[mapStoreUserStateToProp],
	[]
)

export { DropdownNavbarStoreUser }
