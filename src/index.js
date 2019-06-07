import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from 'serviceWorker'

// routing
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'

// state management
import { Provider } from 'unstated'
import { authStore, socialAuthModalStore } from 'state'

// constants
import {
	SOCIAL_AUTH_MODAL_BODY,
	SOCIAL_AUTH_MODAL_OPEN,
	SOCIAL_AUTH_MODAL_TITLE,
	SOCIAL_AUTH_MODAL_LOADER,
} from 'constantValues'

// styles
import 'assets/css/nucleo-icons.css'
import 'assets/scss/blk-design-system-pro-react.scss?v1.0.0'
import 'assets/demo/demo.css'
import 'assets/demo/react-demo.css'
import 'assets/css/game-senshi.css'

// presentation pages
import Index from 'views/Index.jsx'
import Presentation from 'views/Presentation.jsx'
import Sections from 'views/Sections.jsx'

// example pages
import AboutUs from 'views/examples/AboutUs.jsx'
import BlogPost from 'views/examples/BlogPost.jsx'
import BlogPosts from 'views/examples/BlogPosts.jsx'
import ContactUs from 'views/examples/ContactUs.jsx'
import LandingPage from 'views/examples/LandingPage.jsx'
import Pricing from 'views/examples/Pricing.jsx'
import Ecommerce from 'views/examples/Ecommerce.jsx'
import ProductPage from 'views/examples/ProductPage.jsx'
import ProfilePage from 'views/examples/ProfilePage.jsx'
import Error404 from 'views/examples/Error404.jsx'
import Error500 from 'views/examples/Error500.jsx'
import AccountSettings from 'views/examples/AccountSettings.jsx'
import ResetPage from 'views/examples/ResetPage.jsx'
import InvoicePage from 'views/examples/InvoicePage.jsx'
import CheckoutPage from 'views/examples/CheckoutPage.jsx'
import ChatPage from 'views/examples/ChatPage.jsx'
import SignInPage from 'views/SignInPage'
import SignUpPage from 'views/SignUpPage'

// show social auth modal after redirect back
const showSignInModal = sessionStorage.getItem('showSignInModal')
sessionStorage.removeItem('showSignInModal')
showSignInModal &&
	socialAuthModalStore.setState({
		[SOCIAL_AUTH_MODAL_BODY]: (
			<>
				Signing in with <b>{showSignInModal}</b>...Almost there!
			</>
		),
		[SOCIAL_AUTH_MODAL_OPEN]: true,
		[SOCIAL_AUTH_MODAL_TITLE]: 'Signing You In...',
		[SOCIAL_AUTH_MODAL_LOADER]: true,
	})
// do same thing as showSignInModal but this is specifically for account linking
const showAuthLinkingModal = sessionStorage.getItem('showAuthLinkingModal')
sessionStorage.removeItem('showAuthLinkingModal')
showAuthLinkingModal &&
	socialAuthModalStore.setState({
		[SOCIAL_AUTH_MODAL_BODY]: (
			<>
				Please wait while we signing you in with <b>{showAuthLinkingModal}</b>.
			</>
		),
		[SOCIAL_AUTH_MODAL_OPEN]: true,
		[SOCIAL_AUTH_MODAL_TITLE]: 'Signing You In...',
		[SOCIAL_AUTH_MODAL_LOADER]: true,
	})
// show auth after link redirect
const isLinked = sessionStorage.getItem('linking successful?')
isLinked &&
	socialAuthModalStore.setState({
		[SOCIAL_AUTH_MODAL_BODY]: (
			<>
				Please wait while we linking your <b>{isLinked}</b> account.
			</>
		),
		[SOCIAL_AUTH_MODAL_OPEN]: true,
		[SOCIAL_AUTH_MODAL_TITLE]: 'Linking...',
		[SOCIAL_AUTH_MODAL_LOADER]: true,
	})

ReactDOM.render(
	<Provider to={[authStore]}>
		<BrowserRouter>
			<LastLocationProvider>
				<Switch>
					<Route path='/index' render={props => <Index {...props} />} />
					<Route
						path='/presentation'
						render={props => <Presentation {...props} />}
					/>
					<Route path='/sections' render={props => <Sections {...props} />} />
					<Route path='/about' render={props => <AboutUs {...props} />} />
					<Route path='/blog' render={props => <BlogPost {...props} />} />
					<Route path='/blogs' render={props => <BlogPosts {...props} />} />
					<Route path='/contact' render={props => <ContactUs {...props} />} />
					<Route path='/landing' render={props => <LandingPage {...props} />} />
					<Route path='/pricing' render={props => <Pricing {...props} />} />
					<Route path='/eCommerce' render={props => <Ecommerce {...props} />} />
					<Route path='/product' render={props => <ProductPage {...props} />} />
					<Route path='/profile' render={props => <ProfilePage {...props} />} />
					<Route path='/404' render={props => <Error404 {...props} />} />
					<Route path='/500' render={props => <Error500 {...props} />} />
					<Route
						path='/settings'
						render={props => <AccountSettings {...props} />}
					/>
					<Route path='/reset' render={props => <ResetPage {...props} />} />
					<Route path='/invoice' render={props => <InvoicePage {...props} />} />
					<Route path='/signUp' render={props => <SignUpPage {...props} />} />
					<Route path='/signIn' render={props => <SignInPage {...props} />} />
					<Route
						path='/checkOut'
						render={props => <CheckoutPage {...props} />}
					/>
					<Route path='/chat' render={props => <ChatPage {...props} />} />
					<Redirect from='/' to='/index' />
				</Switch>
			</LastLocationProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.register()
