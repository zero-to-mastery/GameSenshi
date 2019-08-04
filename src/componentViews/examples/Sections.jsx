import React from 'react'

// reactstrap components
// import {
//
// } from "reactstrap";

// core components
import ScrollNavbar from 'componentAtoms/Navbars/ScrollNavbar.jsx'
import DemoFooter from 'componentAtoms/Footers/DemoFooter.jsx'

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Headers from './SectionsSections/Headers.jsx'
import Features from './SectionsSections/Features.jsx'
import Blogs from './SectionsSections/Blogs.jsx'
import Teams from './SectionsSections/Teams.jsx'
import Projects from './SectionsSections/Projects.jsx'
import Pricing from './SectionsSections/Pricing.jsx'
import Testimonials from './SectionsSections/Testimonials.jsx'
import ContactUs from './SectionsSections/ContactUs.jsx'
import Tables from './SectionsSections/Tables.jsx'
import Accordion from './SectionsSections/Accordion.jsx'

class Sections extends React.Component {
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		var href = window.location.href.substring(
			window.location.href.lastIndexOf('#') + 1
		)
		if (
			window.location.href.lastIndexOf('#') > 0 &&
			document.getElementById(href) !== null
		) {
			document.getElementById(href).scrollIntoView()
		}
		document.body.classList.add('sections-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('sections-page')
	}
	render() {
		return (
			<>
				{/* Navbar START */}
				<ScrollNavbar />
				{/* Navbar END */}
				<div className='wrapper' ref='wrapper'>
					<div className='section-space' />
					{/* Sections START */}
					<Headers />
					<Features />
					<Blogs />
					<Teams />
					<Projects />
					<Pricing />
					<Testimonials />
					<ContactUs />
					<Tables />
					<Accordion />
					{/* Sections END */}
					{/* Footer */}
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default Sections
