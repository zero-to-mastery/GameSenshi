import React from 'react'
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
	Label,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from 'reactstrap'

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar.jsx'
import Footer from 'components/Footer/Footer.jsx'

class SignUpPage extends React.Component {
	state = {
		squares1to6: '',
		squares7and8: '',
	}
	componentDidMount() {
		document.body.classList.toggle('register-page')
		document.documentElement.addEventListener('mousemove', this.followCursor)
	}
	componentWillUnmount() {
		document.body.classList.toggle('register-page')
		document.documentElement.removeEventListener('mousemove', this.followCursor)
	}
	followCursor = event => {
		let posX = event.clientX - window.innerWidth / 2
		let posY = event.clientY - window.innerWidth / 6
		this.setState({
			squares1to6:
				'perspective(500px) rotateY(' +
				posX * 0.05 +
				'deg) rotateX(' +
				posY * -0.05 +
				'deg)',
			squares7and8:
				'perspective(500px) rotateY(' +
				posX * 0.02 +
				'deg) rotateX(' +
				posY * -0.02 +
				'deg)',
		})
	}
	render() {
		return (
			<>
				<IndexNavbar />
				<div className='wrapper'>
					<div className='page-header'>
						<div className='page-header-image' />
						<div className='content'>
							<Container>
								<Row>
									<Col className='offset-lg-0 offset-md-3' lg='5' md='6'>
										<div
											className='square square-7'
											id='square7'
											style={{ transform: this.state.squares7and8 }}
										/>
										<div
											className='square square-8'
											id='square8'
											style={{ transform: this.state.squares7and8 }}
										/>
										<Card className='card-register'>
											<CardHeader>
												<CardImg
													alt='...'
													src={require('assets/img/square-purple-1.png')}
												/>
												<CardTitle tag='h4'>Sign up</CardTitle>
											</CardHeader>
											<CardBody>
												<div
													style={{
														marginBottom: '10px',
														display: 'flex',
														flexDirection: 'row',
														justifyContent: 'center',
													}}>
													<div style={{ marginRight: '10px' }}>
														<Button
															size='lg'
															className='btn-icon btn-round'
															color='facebook'
															href=''
															id='facebook'
															target='_blank'>
															<i className='fab fa-facebook-square' />
														</Button>
													</div>
													<div style={{ marginRight: '10px' }}>
														<Button
															size='lg'
															className='btn-icon btn-round'
															color='warning'
															href=''
															id=''
															target='_blank'>
															<i className='fab fa-google' />
														</Button>
													</div>
													<div>
														<Button
															size='lg'
															className='btn-icon btn-round'
															color='twitter'
															href=''
															id=''
															target='_blank'>
															<i className='fab fa-twitter' />
														</Button>
													</div>
												</div>
												<hr style={{ width: '100%' }} />
												<Form className='form'>
													<InputGroup
														className={classnames({
															'input-group-focus': this.state.fullNameFocus,
														})}>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='tim-icons icon-single-02' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder='Username'
															type='text'
															onFocus={e =>
																this.setState({ fullNameFocus: true })
															}
															onBlur={e =>
																this.setState({ fullNameFocus: false })
															}
														/>
													</InputGroup>
													<InputGroup
														className={classnames({
															'input-group-focus': this.state.emailFocus,
														})}>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='tim-icons icon-email-85' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder='Email'
															type='text'
															onFocus={e => this.setState({ emailFocus: true })}
															onBlur={e => this.setState({ emailFocus: false })}
														/>
													</InputGroup>
													<InputGroup
														className={classnames({
															'input-group-focus': this.state.passwordFocus,
														})}>
														<InputGroupAddon addonType='prepend'>
															<InputGroupText>
																<i className='tim-icons icon-lock-circle' />
															</InputGroupText>
														</InputGroupAddon>
														<Input
															placeholder='Password'
															type='text'
															onFocus={e =>
																this.setState({ passwordFocus: true })
															}
															onBlur={e =>
																this.setState({ passwordFocus: false })
															}
														/>
													</InputGroup>
													<FormGroup check className='text-left'>
														<Label check>
															<Input type='checkbox' />
															<span className='form-check-sign' />I agree to the{' '}
															<a
																href='#pablo'
																onClick={e => e.preventDefault()}>
																terms and conditions
															</a>
															.
														</Label>
													</FormGroup>
												</Form>
											</CardBody>
											<CardFooter>
												<Button className='btn-round' color='primary' size='lg'>
													Get Started
												</Button>
											</CardFooter>
										</Card>
									</Col>
								</Row>
								<div className='register-bg' />
								<div
									className='square square-1'
									id='square1'
									style={{ transform: this.state.squares1to6 }}
								/>
								<div
									className='square square-2'
									id='square2'
									style={{ transform: this.state.squares1to6 }}
								/>
								<div
									className='square square-3'
									id='square3'
									style={{ transform: this.state.squares1to6 }}
								/>
								<div
									className='square square-4'
									id='square4'
									style={{ transform: this.state.squares1to6 }}
								/>
								<div
									className='square square-5'
									id='square5'
									style={{ transform: this.state.squares1to6 }}
								/>
								<div
									className='square square-6'
									id='square6'
									style={{ transform: this.state.squares1to6 }}
								/>
							</Container>
						</div>
					</div>
					<Footer />
				</div>
			</>
		)
	}
}

export default SignUpPage
