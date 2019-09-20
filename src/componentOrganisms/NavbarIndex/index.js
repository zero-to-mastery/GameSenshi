import {
	NavbarIndex,
	NAVBAR_INDEX_HEIGHT_CHANGED,
} from 'componentOrganisms/NavbarIndex/NavbarIndex'
import { StateContainer, storeAlert, STORE_ALERT_STATE_OPEN } from 'state'

const mapStoreAlertStateToProp = {
	[NAVBAR_INDEX_HEIGHT_CHANGED]: STORE_ALERT_STATE_OPEN,
}

const NavbarIndexStoreAlert = StateContainer(
	NavbarIndex,
	[storeAlert],
	[mapStoreAlertStateToProp],
	[]
)

export { NavbarIndexStoreAlert }
