import React from 'react'
import { NavbarIndex, NAVBAR_COLORED } from './NavbarIndex'
import { StateContainer, storeAlert, STORE_ALERT_STATE_IS_OPEN } from 'state'
import ReactResizeDetector from 'react-resize-detector'
import { stopUndefined } from 'utils'
import { storeWrapperSetOffsetTop } from 'state'
import { Exports } from 'componentnCompounds'

const { AlertCommonStoreAlert } = stopUndefined(Exports)

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
			<AlertCommonStoreAlert />
		</NavbarIndexStoreAlert>
	)
}

export { NavbarIndexStoreAlertPropApp }
