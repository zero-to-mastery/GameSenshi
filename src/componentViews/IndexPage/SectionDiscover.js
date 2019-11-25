import React from 'reat'
import { Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

const SectionDiscover = () => {
	return (
		<div>
			<Nav className='nav-pills-primary' pills role='tablist'>
				<NavItem>
					<NavLink
						className={classnames({
							active: this.state.hTabs === 1,
						})}
						onClick={e => this.toggleTabs(e, 'hTabs', 1)}
						href='#pablo'
					>
						Profile
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active: this.state.hTabs === 2,
						})}
						onClick={e => this.toggleTabs(e, 'hTabs', 2)}
						href='#pablo'
					>
						Settings
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({
							active: this.state.hTabs === 3,
						})}
						onClick={e => this.toggleTabs(e, 'hTabs', 3)}
						href='#pablo'
					>
						Options
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	)
}

export { SectionDiscover }
