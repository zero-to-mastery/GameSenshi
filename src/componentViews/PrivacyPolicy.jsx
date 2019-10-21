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
	CardHeader,
	Collapse,
	CardBody,
	Card,
} from 'reactstrap'

// core components
import { Exports } from 'componentpMultiOrganisms'

const { Footer } = stopUndefined(Exports)

const PrivacyPolicy = props => {
	const [tab, setTab] = useState(1)
	const [collapse, setCollapse] = useState()
	const [openedCollapse, setOpenedCollapse] = useState(['collapseOne'])
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
	const collapseToggle = selected => {
		let openedCollapses = openedCollapse
		if (openedCollapses.includes(selected)) {
			setOpenedCollapse(openedCollapse =>
				openedCollapse.filter(prop => prop !== selected)
			)
		} else {
			setOpenedCollapse([...openedCollapse, selected])
		}
	}
	return (
		<>
			<Container>
				<Row style={{ height: 120 }}></Row>
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
						<TabContent activeTab={'viTabs' + tab} className='mb-5'>
							<TabPane tabId='viTabs1'>
								{/* <div id='collapse'>
									<div
										aria-multiselectable={true}
										className='card-collapse'
										id='accordion'
										role='tablist'>
										<Card className='card-plain'>
											<CardHeader id='headingOne' role='tab'>
												<a
													className='d-flex'
													href='#pablo'
													data-toggle='collapse'
													aria-expanded={openedCollapse.includes('collapseOne')}
													onClick={e => {
														e.preventDefault()
														collapseToggle('collapseOne')
													}}>
													Automatic collection of information{' '}
													<i className='tim-icons icon-minimal-down ml-auto' />
												</a>
											</CardHeader>
											<Collapse
												role='tabpanel'
												isOpen={openedCollapse.includes('collapseOne')}>
												<CardBody>Hello</CardBody>
											</Collapse>
										</Card>
									</div>
								</div> */}

								<h1 className='paragraph-heading'>Privacy Policy</h1>
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
								<h4 className='paragraph-heading'>
									The right to object to processing
								</h4>
								<p className='paragraph-content'>
									Where Personal Information is processed for the public
									interest, in the exercise of an official authority vested in
									us or for the purposes of the legitimate interests pursued by
									us, you may object to such processing by providing a ground
									related to your particular situation to justify the objection.
									You must know that, however, should your Personal Information
									be processed for direct marketing purposes, you can object to
									that processing at any time without providing any
									justification. To learn, whether we are processing Personal
									Information for direct marketing purposes, you may refer to
									the relevant sections of this document.
								</p>
								<h4 className='paragraph-heading'>
									How to exercise these rights
								</h4>
								<p className='paragraph-content'>
									Any requests to exercise User rights can be directed to the
									Owner through the contact details provided in this document.
									These requests can be exercised free of charge and will be
									addressed by the Owner as early as possible.
								</p>
								<h4 className='paragraph-heading'>Privacy of children</h4>
								<p className='paragraph-content'>
									We do not knowingly collect any Personal Information from
									children under the age of 13. If you are under the age of 13,
									please do not submit any Personal Information through our
									Website or Service. We encourage parents and legal guardians
									to monitor their children's Internet usage and to help enforce
									this Policy by instructing their children never to provide
									Personal Information through our Website or Service without
									their permission. If you have reason to believe that a child
									under the age of 13 has provided Personal Information to us
									through our Website or Service, please contact us. You must
									also be at least 16 years of age to consent to the processing
									of your Personal Information in your country (in some
									countries we may allow your parent or guardian to do so on
									your behalf).
								</p>
								<h4 className='paragraph-heading'>Newsletters</h4>
								<p className='paragraph-content'>
									We offer electronic newsletters to which you may voluntarily
									subscribe at any time. You may choose to stop receiving our
									newsletter or marketing emails by following the unsubscribe
									instructions included in these emails or by contacting us.
									However, you will continue to receive essential transactional
									emails.
								</p>
								<h4 className='paragraph-heading'>Do Not Track signals</h4>
								<p className='paragraph-content'>
									Some browsers incorporate a Do Not Track feature that signals
									to websites you visit that you do not want to have your online
									activity tracked. Tracking is not the same as using or
									collecting information in connection with a website. For these
									purposes, tracking refers to collecting personally
									identifiable information from consumers who use or visit a
									website or online service as they move across different
									websites over time. Our Website does not track its visitors
									over time and across third party websites. However, some third
									party sites may keep track of your browsing activities when
									they serve you content, which enables them to tailor what they
									present to you.
								</p>
								<h4 className='paragraph-heading'>Links to other websites</h4>
								<p className='paragraph-content'>
									Our Website contains links to other websites that are not
									owned or controlled by us. Please be aware that we are not
									responsible for the privacy practices of such other websites
									or third-parties. We encourage you to be aware when you leave
									our Website and to read the privacy statements of each and
									every website that may collect Personal Information.
								</p>
								<h4 className='paragraph-heading'>Information security</h4>
								<p className='paragraph-content'>
									We secure information you provide on computer servers in a
									controlled, secure environment, protected from unauthorized
									access, use, or disclosure. We maintain reasonable
									administrative, technical, and physical safeguards in an
									effort to protect against unauthorized access, use,
									modification, and disclosure of Personal Information in its
									control and custody. However, no data transmission over the
									Internet or wireless network can be guaranteed. Therefore,
									while we strive to protect your Personal Information, you
									acknowledge that (i) there are security and privacy
									limitations of the Internet which are beyond our control; (ii)
									the security, integrity, and privacy of any and all
									information and data exchanged between you and our Website
									cannot be guaranteed; and (iii) any such information and data
									may be viewed or tampered with in transit by a third-party,
									despite best efforts.
								</p>
								<h4 className='paragraph-heading'>Data breach</h4>
								<p className='paragraph-cont'>
									In the event we become aware that the security of the Website
									has been compromised or users Personal Information has been
									disclosed to unrelated third parties as a result of external
									activity, including, but not limited to, security attacks or
									fraud, we reserve the right to take reasonably appropriate
									measures, including, but not limited to, investigation and
									reporting, as well as notification to and cooperation with law
									enforcement authorities. In the event of a data breach, we
									will make reasonable efforts to notify affected individuals if
									we believe that there is a reasonable risk of harm to the user
									as a result of the breach or if notice is otherwise required
									by law. When we do, we will send you an email.
								</p>
								<h4 className='paragraph-heading'>Legal disclosure</h4>
								<p className='paragraph-content'>
									We will disclose any information we collect, use or receive if
									required or permitted by law, such as to comply with a
									subpoena, or similar legal process, and when we believe in
									good faith that disclosure is necessary to protect our rights,
									protect your safety or the safety of others, investigate
									fraud, or respond to a government request. In the event we go
									through a business transition, such as a merger or acquisition
									by another company, or sale of all or a portion of its assets,
									your user account, and Personal Information will likely be
									among the assets transferred.
								</p>
								<h4 className='paragraph-heading'>Changes and amendments</h4>
								<p className='paragraph-content'>
									We may update this Privacy Policy from time to time in our
									discretion and will notify you of any material changes to the
									way in which we treat Personal Information. When changes are
									made, we will send you an email to notify you. We may also
									provide notice to you in other ways in our discretion, such as
									through contact information you have provided. Any updated
									version of this Privacy Policy will be effective immediately
									upon the posting of the revised Privacy Policy unless
									otherwise specified. Your continued use of the Website or
									Services after the effective date of the revised Privacy
									Policy (or such other act specified at that time) will
									constitute your consent to those changes. However, we will
									not, without your consent, use your Personal Data in a manner
									materially different than what was stated at the time your
									Personal Data was collected. Policy was created with
									WebsitePolicies.
								</p>
								<h4 className='paragraph-heading'>Acceptance of this policy</h4>
								<p className='paragraph-content'>
									You acknowledge that you have read this Policy and agree to
									all its terms and conditions. By using the Website or its
									Services you agree to be bound by this Policy. If you do not
									agree to abide by the terms of this Policy, you are not
									authorized to use or access the Website and its Services.
								</p>
								<h4 className='paragraph-heading'>Contacting us</h4>
								<p className='paragraph-content'>
									If you would like to contact us to understand more about this
									Policy or wish to contact us concerning any matter relating to
									individual rights and your Personal Information, you may send
									an email to <strong>admin@gamesenshi.com</strong>
								</p>
							</TabPane>
							<TabPane tabId='viTabs2'>
								<h1 className='paragraph-heading'>Cookie Policy</h1>
								<p className='paragraph-content'>
									This is the Cookie Policy for Game Senshi, accessible from
									<strong>https://www.gamesenshi.com</strong>
								</p>
								<h4 className='paragraph-heading'>What are cookies</h4>
								<p className='paragraph-content'>
									As is common practice with almost all professional websites
									this site uses cookies, which are tiny files that are
									downloaded to your computer, to improve your experience. This
									page describes what information they gather, how we use it and
									why we sometimes need to store these cookies. We will also
									share how you can prevent these cookies from being stored
									however this may downgrade or 'break' certain elements of the
									sites functionality.
								</p>
								<p className='paragraph-content'>
									For more general information on cookies see the Wikipedia
									article on HTTP Cookies.
								</p>
								<h4 className='paragraph-heading'>How we use cookies</h4>
								<p className='paragraph-content'>
									We use cookies for a variety of reasons detailed below.
									Unfortunately, in most cases, there are no industry standard
									options for disabling cookies without completely disabling the
									functionality and features they add to this site. It is
									recommended that you leave on all cookies if you are not sure
									whether you need them or not in case they are used to provide
									a service that you use.
								</p>
								<h4 className='paragraph-heading'>Disabling cookies</h4>
								<p className='paragraph-content'>
									You can prevent the setting of cookies by adjusting the
									settings on your browser (see your browser Help for how to do
									this). Be aware that disabling cookies will affect the
									functionality of this and many other websites that you visit.
									Disabling cookies will usually result in also disabling
									certain functionality and features of this site. Therefore it
									is recommended that you do not disable cookies.
								</p>
								<h4 className='paragraph-heading'>The cookies we set</h4>
								<ul>
									<li>
										<h4 className='paragraph-heading'>
											Account related cookies
										</h4>
										<p className='paragraph-content'>
											If you create an account with us then we will use cookies
											for the management of the signup process and general
											administration. These cookies will usually be deleted when
											you log out however in some cases they may remain
											afterward to remember your site preferences when logged
											out.
										</p>
									</li>

									<li>
										<h4 className='paragraph-heading'>Login related cookies</h4>
										<p className='paragraph-content'>
											We use cookies when you are logged in so that we can
											remember this fact. This prevents you from having to log
											in every single time you visit a new page. These cookies
											are typically removed or cleared when you log out to
											ensure that you can only access restricted features and
											areas when logged in.
										</p>
									</li>

									<li>
										<h4 className='paragraph-heading'>
											Email newsletters related cookies
										</h4>
										<p className='paragraph-content'>
											This site offers newsletter or email subscription services
											and cookies may be used to remember if you are already
											registered and whether to show certain notifications which
											might only be valid to subscribed/unsubscribed users.
										</p>
									</li>

									<li>
										<h4 className='paragraph-heading'>
											Orders processing related cookies
										</h4>
										<p clasName='paragraph-content'>
											This site offers e-commerce or payment facilities and some
											cookies are essential to ensure that your order is
											remembered between pages so that we can process it
											properly.
										</p>
									</li>

									<li>
										<h4 className='paragraph-heading'>
											Surveys related cookies
										</h4>
										<p className='paragraph-content'>
											From time to time we offer user surveys and questionnaires
											to provide you with interesting insights, helpful tools,
											or to understand our user base more accurately. These
											surveys may use cookies to remember who has already taken
											part in a survey or to provide you with accurate results
											after you change pages.
										</p>
									</li>

									<li>
										<h4 className='paragraph-heading'>Forms related cookies</h4>
										<p className='paragraph-content'>
											When you submit data to through a form such as those found
											on contact pages or comment forms cookies may be set to
											remember your user details for future correspondence.
										</p>
									</li>

									<li>
										<h4 className='paragraph-heading'>
											Site preferences cookies
										</h4>
										<p className='paragraph-content'>
											In order to provide you with a great experience on this
											site we provide the functionality to set your preferences
											for how this site runs when you use it. In order to
											remember your preferences we need to set cookies so that
											this information can be called whenever you interact with
											a page is affected by your preferences.
										</p>
									</li>
								</ul>
								<h4 className='paragraph-heading'>Third party Cookies</h4>
								<p className='paragraph-content'>
									In some special cases we also use cookies provided by trusted
									third parties. The following section details which third party
									cookies you might encounter through this site.
								</p>
								<ul>
									<li>
										<p className='paragraph-content'>
											This site uses Google Analytics which is one of the most
											widespread and trusted analytics solutions on the web for
											helping us to understand how you use the site and ways
											that we can improve your experience. These cookies may
											track things such as how long you spend on the site and
											the pages that you visit so we can continue to produce
											engaging content.
										</p>
										<p className='paragraph-content'>
											For more information on Google Analytics cookies, see the
											official Google Analytics page.
										</p>
									</li>

									<li>
										<p className='paragraph-content'>
											Third party analytics are used to track and measure usage
											of this site so that we can continue to produce engaging
											content. These cookies may track things such as how long
											you spend on the site or pages you visit which helps us to
											understand how we can improve the site for you.
										</p>
									</li>

									<li>
										<p className='paragraph-content'>
											From time to time we test new features and make subtle
											changes to the way that the site is delivered. When we are
											still testing new features these cookies may be used to
											ensure that you receive a consistent experience whilst on
											the site whilst ensuring we understand which optimizations
											our users appreciate the most.
										</p>
									</li>

									<li>
										<p className='paragraph-content'>
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
										<p className='paragraph-content'>
											The Google AdSense service we use to serve to advertise
											uses a DoubleClick cookie to serve more relevant ads
											across the web and limit the number of times that a given
											ad is shown to you.
										</p>
										<p className='paragraph-content'>
											For more information on Google AdSense see the official
											Google AdSense privacy FAQ.
										</p>
									</li>

									<li>
										<p className='paragraph-content'>
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
										<p className='paragraph-content'>
											Several partners advertise on our behalf and affiliate
											tracking cookies simply allow us to see if our customers
											have come to the site through one of our partner sites so
											that we can credit them appropriately and where applicable
											allow our affiliate partners to provide any bonus that
											they may provide you for making a purchase.
										</p>
									</li>

									<li>
										<p className='paragraph-content'>
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
									<h4 className='paragraph-heading'>More information</h4>
								</p>
								<p className='paragraph-content'>
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
								<p className='paragraph-content'>
									However if you are still looking for more information then you
									can contact us through one of our preferred contact methods:
								</p>
								<ul>
									<li>
										<strong>Email: admin@gamesenshi.com</strong>
									</li>
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
