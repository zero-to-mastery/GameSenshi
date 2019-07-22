import React from 'react'
// nodejs library that concatenates classes
import classnames from 'classnames'
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImg,
	CardTitle,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Col,
} from 'reactstrap'

// core components
import ColorNavbar from 'componentsAtom/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentsAtom/Footers/DemoFooter.jsx'

class ResetPage extends React.Component {
	state = {}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('reset-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('reset-page')
	}
	render() {
		return (
			<>
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header'>
						<div className='squares square1' />
						<div className='squares square2' />
						<div className='squares square3' />
						<div className='squares square4' />
						<div className='squares square5' />
						<div className='squares square6' />
						<div className='page-header-image' />
						<Container>
							<Col className='mx-auto' lg='5' md='8'>
								<Card className='card-login'>
									<Form action='' className='form' method=''>
										<CardHeader>
											<CardImg
												alt='...'
												src={require('assets/img/shape.png')}
											/>
											<CardTitle tag='h4'>Reset Password</CardTitle>
										</CardHeader>
										<CardBody>
											<h4 className='description text-center'>
												Enter email address to reset password
											</h4>
											<InputGroup
												className={classnames('input-lg', {
													'input-group-focus': this.state.focus,
												})}>
												<InputGroupAddon addonType='prepend'>
													<InputGroupText>
														<i className='tim-icons icon-email-85' />
													</InputGroupText>
												</InputGroupAddon>
												<Input
													className='form-control-lg'
													placeholder='Your email'
													type='email'
													onFocus={e => this.setState({ focus: true })}
													onBlur={e => this.setState({ focus: false })}
												/>
											</InputGroup>
											<Button
												block
												className='btn-round'
												color='warning'
												href='#pablo'
												onClick={e => e.preventDefault()}
												size='lg'>
												Request Reset
											</Button>
										</CardBody>
										<CardFooter>
											<div className='pull-left ml-3 mb-3'>
												<h6>
													<a
														className='link footer-link'
														href='#pablo'
														onClick={e => e.preventDefault()}>
														Back to Sign in
													</a>
												</h6>
											</div>
											<div className='pull-right mr-3 mb-3'>
												<h6>
													<a
														className='link footer-link'
														href='#pablo'
														onClick={e => e.preventDefault()}>
														Need Help?
													</a>
												</h6>
											</div>
										</CardFooter>
									</Form>
								</Card>
							</Col>
						</Container>
					</div>
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default ResetPage
