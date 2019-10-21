import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { stopUndefined } from 'utils'
// reactstrap components
import {
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'

// core components
import { Exports } from 'componentpMultiOrganisms'

const { Footer } = stopUndefined(Exports)

const PrivacyPolicy = props => {
	const [tab, setTab] = useState(1)
	useEffect(() => {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		return () => {
			document.body.classList.remove('index-page')
		}
	}, [])
	const toggleTab = (e, index) => {
		e.preventDefault()
		setTab(index)
	}
	return (
		<>
			<Container>
				<Row style={{ height: 100 }}></Row>
				<Row>
					<Col lg='2' md='3'>
						<Nav
							className='nav-pills-primary nav-pills-icons flex-column'
							pills
							role='tablist'>
							<NavItem>
								<NavLink
									className={classnames({
										active: tab === 1,
									})}
									onClick={e => toggleTab(e, 1)}>
									<i
										style={{ fontSize: '40px' }}
										className='tim-icons icon-lock-circle'
									/>
									Privacy Policy
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames({
										active: tab === 2,
									})}
									onClick={e => toggleTab(e, 2)}>
									<i
										style={{ fontSize: '40px' }}
										className='tim-icons icon-single-copy-04'
									/>
									Cookie Policy
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col lg='9' md='8'>
						<TabContent activeTab={'viTabs' + tab}>
							<TabPane tabId='viTabs1'>
								<h1 className='paragraph-heading'>
									Privacy Notice for Game Senshi
								</h1>
								<p className='paragraph-content'>
									This privacy policy describes how Game Senshi collects,
									protects and uses the personally identifiable information you
									may provide on the gamesenshi.com website and any of its
									products or services . It also describes the choices available
									to you regarding our use of your Personal Information and how
									you can access and update this information. This Policy does
									not apply to the practices of companies that we do not own or
									control, or to individuals that we do not employ or manage.
								</p>
								<h4 className='paragraph-heading'>
									Automatic collection of information
								</h4>
								<p className='paragraph-content'>
									When you visit the Website our servers automatically record
									information that your browser sends. This data may include
									information such as your device's IP address, browser type and
									version, operating system type and version, language
									preferences or the webpage you were visiting before you came
									to our Website, pages of our Website that you visit, the time
									spent on those pages, information you search for on our
									Website, access times and dates, and other statistics.
								</p>
								<h4 className='paragraph-heading'>
									Collection of personal information
								</h4>
								<p className='paragraph-content'>
									You can visit the Website without telling us who you are or
									revealing any information by which someone could identify you
									as a specific, identifiable individual. If, however, you wish
									to use some of the Website's features, you will be asked to
									provide certain Personal Information (for example, your name
									and e-mail address). We receive and store any information you
									knowingly provide to us when you create an account, publish
									content, or fill any online forms on the Website. When
									required, this information may include your email address,
									name, credit card information, bank information, or other
									Personal Information. You can choose not to provide us with
									your Personal Information, but then you may not be able to
									take advantage of some of the Website's features. Users who
									are uncertain about what information is mandatory are welcome
									to contact us.
								</p>
								<h4 className='paragraph heading'>
									Managing personal information
								</h4>
								<p className='paragraph-content'>
									You are able to access, add to, update and delete certain
									Personal Information about you. The information you can view,
									update, and delete may change as the Website or Services
									change. When you update information, however, we may maintain
									a copy of the unrevised information in our records. Some
									information may remain in our private records after your
									deletion of such information from your account. We will retain
									and use your Personal Information for the period necessary to
									comply with our legal obligations, resolve disputes, and
									enforce our agreements unless a longer retention period is
									required or permitted by law. We may use any aggregated data
									derived from or incorporating your Personal Information after
									you update or delete it, but not in a manner that would
									identify you personally. Once the retention period expires,
									Personal Information shall be deleted. Therefore, the right to
									access, the right to erasure, the right to rectification and
									the right to data portability cannot be enforced after the
									expiration of the retention period.
								</p>
								<h4 className='paragraph-heading'>
									Use and processing of collected information
								</h4>
								<p className='paragraph-content'>
									Any of the information we collect from you may be used to
									personalize your experience; improve our Website; improve
									customer service and respond to queries and emails of our
									customers; send newsletters; send notification emails such as
									password reminders, updates, etc; run and operate our Website
									and Services. Information collected automatically is used only
									to identify potential cases of abuse and establish statistical
									information regarding Website usage. This statistical
									information is not otherwise aggregated in such a way that
									would identify any particular user of the system.
									<br />
									We may process Personal Information related to you if one of
									the following applies: (i) You have given your consent for one
									or more specific purposes. Note that under some legislations
									we may be allowed to process information until you object to
									such processing (by opting out), without having to rely on
									consent or any other of the following legal bases below. This,
									however, does not apply, whenever the processing of Personal
									Information is subject to European data protection law; (ii)
									Provision of information is necessary for the performance of
									an agreement with you and/or for any pre-contractual
									obligations thereof; (iii) Processing is necessary for
									compliance with a legal obligation to which you are subject;
									(iv) Processing is related to a task that is carried out in
									the public interest or in the exercise of official authority
									vested in us; (v) Processing is necessary for the purposes of
									the legitimate interests pursued by us or by a third party. In
									any case, we will be happy to clarify the specific legal basis
									that applies to the processing, and in particular whether the
									provision of Personal Information is a statutory or
									contractual requirement, or a requirement necessary to enter
									into a contract.
								</p>
								<h4 className='paragraph-heading'>
									Information transfer and storage
								</h4>
								<p className='paragraph-content'>
									Depending on your location, data transfers may involve
									transferring and storing your information in a country other
									than your own. You are entitled to learn about the legal basis
									of information transfers to a country outside the European
									Union or to any international organization governed by public
									international law or set up by two or more countries, such as
									the UN, and about the security measures taken by us to
									safeguard your information. If any such transfer takes place,
									you can find out more by checking the relevant sections of
									this document or inquire with us using the information
									provided in the contact section.
								</p>
								<h4 className='paragraph-heading'>The rights of users</h4>
								<p className='paragraph-content'>
									You may exercise certain rights regarding your information
									processed by us. In particular, you have the right to do the
									following: (i) you have the right to withdraw consent where
									you have previously given your consent to the processing of
									your information; (ii) you have the right to object to the
									processing of your information if the processing is carried
									out on a legal basis other than consent; (iii) you have the
									right to learn if information is being processed by us, obtain
									disclosure regarding certain aspects of the processing and
									obtain a copy of the information undergoing processing; (iv)
									you have the right to verify the accuracy of your information
									and ask for it to be updated or corrected; (v) you have the
									right, under certain circumstances, to restrict the processing
									of your information, in which case, we will not process your
									information for any purpose other than storing it; (vi) you
									have the right, under certain circumstances, to obtain the
									erasure of your Personal Information from us; (vii) you have
									the right to receive your information in a structured,
									commonly used and machine readable format and, if technically
									feasible, to have it transmitted to another controller without
									any hindrance. This provision is applicable provided that your
									information is processed by automated means and that the
									processing is based on your consent, on a contract which you
									are part of or on pre-contractual obligations thereof.
								</p>
							</TabPane>
							<TabPane tabId='viTabs2'>
								<h1>Cookie Policy for Game Senshi</h1>
								<p>
									This is the Cookie Policy for Game Senshi, accessible from
									https://www.gamesenshi.com
								</p>
								<strong>
									<strong>What Are Cookies</strong>
								</strong>
								<p>
									As is common practice with almost all professional websites
									this site uses cookies, which are tiny files that are
									downloaded to your computer, to improve your experience. This
									page describes what information they gather, how we use it and
									why we sometimes need to store these cookies. We will also
									share how you can prevent these cookies from being stored
									however this may downgrade or 'break' certain elements of the
									sites functionality.
								</p>
								<p>
									For more general information on cookies see the Wikipedia
									article on HTTP Cookies.
								</p>
								<strong>
									<strong>How We Use Cookies</strong>
								</strong>
								<p>
									We use cookies for a variety of reasons detailed below.
									Unfortunately, in most cases, there are no industry standard
									options for disabling cookies without completely disabling the
									functionality and features they add to this site. It is
									recommended that you leave on all cookies if you are not sure
									whether you need them or not in case they are used to provide
									a service that you use.
								</p>
								<p>
									<strong>Disabling Cookies</strong>
								</p>

								<p>
									You can prevent the setting of cookies by adjusting the
									settings on your browser (see your browser Help for how to do
									this). Be aware that disabling cookies will affect the
									functionality of this and many other websites that you visit.
									Disabling cookies will usually result in also disabling
									certain functionality and features of this site. Therefore it
									is recommended that you do not disable cookies.
								</p>
								<p>
									<strong>The Cookies We Set</strong>
								</p>
								<ul>
									<li>
										<p>Account related cookies</p>
										<p>
											If you create an account with us then we will use cookies
											for the management of the signup process and general
											administration. These cookies will usually be deleted when
											you log out however in some cases they may remain
											afterward to remember your site preferences when logged
											out.
										</p>
									</li>

									<li>
										<p>Login related cookies</p>
										<p>
											We use cookies when you are logged in so that we can
											remember this fact. This prevents you from having to log
											in every single time you visit a new page. These cookies
											are typically removed or cleared when you log out to
											ensure that you can only access restricted features and
											areas when logged in.
										</p>
									</li>

									<li>
										<p>Email newsletters related cookies</p>
										<p>
											This site offers newsletter or email subscription services
											and cookies may be used to remember if you are already
											registered and whether to show certain notifications which
											might only be valid to subscribed/unsubscribed users.
										</p>
									</li>

									<li>
										<p>Orders processing related cookies</p>
										<p>
											This site offers e-commerce or payment facilities and some
											cookies are essential to ensure that your order is
											remembered between pages so that we can process it
											properly.
										</p>
									</li>

									<li>
										<p>Surveys related cookies</p>
										<p>
											From time to time we offer user surveys and questionnaires
											to provide you with interesting insights, helpful tools,
											or to understand our user base more accurately. These
											surveys may use cookies to remember who has already taken
											part in a survey or to provide you with accurate results
											after you change pages.
										</p>
									</li>

									<li>
										<p>Forms related cookies</p>
										<p>
											When you submit data to through a form such as those found
											on contact pages or comment forms cookies may be set to
											remember your user details for future correspondence.
										</p>
									</li>

									<li>
										<p>Site preferences cookies</p>
										<p>
											In order to provide you with a great experience on this
											site we provide the functionality to set your preferences
											for how this site runs when you use it. In order to
											remember your preferences we need to set cookies so that
											this information can be called whenever you interact with
											a page is affected by your preferences.
										</p>
									</li>
								</ul>
								<p>
									<strong>Third Party Cookies</strong>
								</p>
								<p>
									In some special cases we also use cookies provided by trusted
									third parties. The following section details which third party
									cookies you might encounter through this site.
								</p>
								<ul>
									<li>
										<p>
											This site uses Google Analytics which is one of the most
											widespread and trusted analytics solutions on the web for
											helping us to understand how you use the site and ways
											that we can improve your experience. These cookies may
											track things such as how long you spend on the site and
											the pages that you visit so we can continue to produce
											engaging content.
										</p>
										<p>
											For more information on Google Analytics cookies, see the
											official Google Analytics page.
										</p>
									</li>

									<li>
										<p>
											Third party analytics are used to track and measure usage
											of this site so that we can continue to produce engaging
											content. These cookies may track things such as how long
											you spend on the site or pages you visit which helps us to
											understand how we can improve the site for you.
										</p>
									</li>

									<li>
										<p>
											From time to time we test new features and make subtle
											changes to the way that the site is delivered. When we are
											still testing new features these cookies may be used to
											ensure that you receive a consistent experience whilst on
											the site whilst ensuring we understand which optimizations
											our users appreciate the most.
										</p>
									</li>

									<li>
										<p>
											As we sell products it's important for us to understand
											statistics about how many of the visitors to our site
											actually make a purchase and as such this is the kind of
											data that these cookies will track. This is important to
											you as it means that we can accurately make business
											predictions that allow us to monitor our advertising and
											product costs to ensure the best possible price.
										</p>
									</li>

									<li>
										<p>
											The Google AdSense service we use to serve to advertise
											uses a DoubleClick cookie to serve more relevant ads
											across the web and limit the number of times that a given
											ad is shown to you.
										</p>
										<p>
											For more information on Google AdSense see the official
											Google AdSense privacy FAQ.
										</p>
									</li>

									<li>
										<p>
											We use adverts to offset the costs of running this site
											and provide funding for further development. The
											behavioral advertising cookies used by this site are
											designed to ensure that we provide you with the most
											relevant adverts where possible by anonymously tracking
											your interests and presenting similar things that may be
											of interest.
										</p>
									</li>

									<li>
										<p>
											Several partners advertise on our behalf and affiliate
											tracking cookies simply allow us to see if our customers
											have come to the site through one of our partner sites so
											that we can credit them appropriately and where applicable
											allow our affiliate partners to provide any bonus that
											they may provide you for making a purchase.
										</p>
									</li>

									<li>
										<p>
											We also use social media buttons and/or plugins on this
											site that allow you to connect with your social network in
											various ways. For these to work the following social media
											sites including: List the social networks whose features
											you have integrated with your site?, will set cookies
											through our site which may be used to enhance your profile
											on their site or contribute to the data they hold for
											various purposes outlined in their respective privacy
											policies.
										</p>
									</li>
								</ul>
								<p>
									<strong>More Information</strong>
								</p>
								<p>
									Hopefully that has clarified things for you and as was
									previously mentioned if there is something that you aren't
									sure whether you need or not it's usually safer to leave
									cookies enabled in case it does interact with one of the
									features you use on our site. This Cookies Policy was created
									with the help of the{' '}
									<a href='https://www.cookiepolicygenerator.com'>
										Cookies Policy Template Generator
									</a>{' '}
									and the{' '}
									<a href='https://www.termsandcondiitionssample.com'>
										Terms and Conditions Template
									</a>
									.
								</p>
								<p>
									However if you are still looking for more information then you
									can contact us through one of our preferred contact methods:
								</p>
								<ul>
									<li>Email: admin@gamesenshi.com</li>
								</ul>
							</TabPane>
						</TabContent>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export { PrivacyPolicy }
