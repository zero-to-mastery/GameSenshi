import React from 'react'
import { NavbarIndex, NAVBAR_COLORED } from './NavbarIndex'
import { StateContainer, storeAlert, STORE_ALERT_STATE_IS_OPEN } from 'state'
import ReactResizeDetector from 'react-resize-detector'
import { stopUndefined } from '1_utils'
import { storeWrapperSetOffsetTop } from 'state'
import { Exports } from 'component_d_Compounds'

const { AlertStoreAlert } = stopUndefined(Exports)

const mapStoreAlertStateToProp = {
	[NAVBAR_COLORED]: STORE_ALERT_STATE_IS_OPEN,
}

const NavbarIndexStoreAlert = StateContainer(
	NavbarIndex,
	[storeAlert],
	[mapStoreAlertStateToProp],
	[]
)

const onResize = (width, height) => {
	storeWrapperSetOffsetTop(height)
}
const NavbarIndexStoreAlertPropApp = props => {
	return (
		<NavbarIndexStoreAlert {...props}>
			<ReactResizeDetector handleHeight onResize={onResize} />
			<AlertStoreAlert />
		</NavbarIndexStoreAlert>
	)
}

export { NavbarIndexStoreAlertPropApp }
