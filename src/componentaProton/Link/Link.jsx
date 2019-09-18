import createLinkNoStack from 'react-router-link-nostack'
import { Link as Link1, withRouter } from 'react-router-dom'

const Link = createLinkNoStack(Link1, withRouter)

export { Link }
