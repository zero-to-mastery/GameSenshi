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
	Row,
} from 'reactstrap'

// core components
import { Footer, IndexNavbar, SocialAuthButtonGroup } from 'components'

class LoginPage extends React.Component {
	state = {}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		document.body.classList.add('login-page')
	}
	componentWillUnmount() {
		document.body.classList.remove('login-page')
	}
	render() {
		const {
			props: { history },
		} = this
		return (
			<>
				<IndexNavbar />
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
											src={require('assets/img/square-purple-1.png')}
										/>
										<CardTitle tag='h4'>Login</CardTitle>
									</CardHeader>
									<CardBody>
										<div className='text-muted text-center ml-auto mr-auto'>
											<h3 className='mb-0'>Sign in with</h3>
										</div>
									</CardBody>
									<CardBody>
										<SocialAuthButtonGroup />
										<Row>
											<Col />
											<Col className='text-center text-muted mb-4 mt-3 col-auto'>
												<small>Or Classically</small>
											</Col>
											<Col />
										</Row>
										<InputGroup
											className={classnames('input-lg', {
												'input-group-focus': this.state.firstNameFocus,
											})}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<i className='tim-icons icon-single-02' />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												placeholder='First Name...'
												type='text'
												onFocus={e => this.setState({ firstNameFocus: true })}
												onBlur={e => this.setState({ firstNameFocus: false })}
											/>
										</InputGroup>
										<InputGroup
											className={classnames('input-lg', {
												'input-group-focus': this.state.lastNameFocus,
											})}>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<i className='tim-icons icon-caps-small' />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												placeholder='Last Name...'
												type='text'
												onFocus={e => this.setState({ lastNameFocus: true })}
												onBlur={e => this.setState({ lastNameFocus: false })}
											/>
										</InputGroup>
									</CardBody>
									<CardFooter className='text-center'>
										<Button
											block
											className='btn-round'
											color='primary'
											href='#pablo'
											onClick={e => e.preventDefault()}
											size='lg'>
											Get Started
										</Button>
									</CardFooter>
									<div className='pull-left ml-3 mb-3'>
										<h6>
											<a
												className='link footer-link'
												href='#pablo'
												onClick={() => {
													history.push('/signUp')
												}}>
												Create Account
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
								</Form>
							</Card>
						</Col>
					</Container>
				</div>
				<Footer />
			</>
		)
	}
}

export default LoginPage
