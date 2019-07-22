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
import ColorNavbar from 'componentsAtom/Navbars/ColorNavbar.jsx'
import DemoFooter from 'componentsAtom/Footers/DemoFooter.jsx'

class RegisterPage extends React.Component {
	state = {
		squares1to6: '',
		squares7and8: '',
	}
	componentDidMount() {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		this.refs.wrapper.scrollTop = 0
		document.body.classList.add('register-page')
		document.documentElement.addEventListener('mousemove', this.followCursor)
	}
	componentWillUnmount() {
		document.body.classList.remove('register-page')
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
				<ColorNavbar />
				<div className='wrapper' ref='wrapper'>
					<div className='page-header'>
						<div className='page-header-image' />
						<Container>
							<Row>
								<Col className='mx-auto' lg='5' md='12'>
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
												src={require('assets/img/square1.png')}
											/>
											<CardTitle tag='h4'>Register</CardTitle>
										</CardHeader>
										<CardBody>
											<Form className='form'>
												<InputGroup
													className={classnames({
														'input-group-focus': this.state.fullNamefocus,
													})}>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='tim-icons icon-single-02' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														placeholder='Full Name'
														type='text'
														onFocus={e =>
															this.setState({ fullNamefocus: true })
														}
														onBlur={e =>
															this.setState({ fullNamefocus: false })
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
														<a href='#pablo' onClick={e => e.preventDefault()}>
															terms and conditions
														</a>
														.
													</Label>
												</FormGroup>
											</Form>
										</CardBody>
										<CardFooter>
											<Button
												className='btn-round'
												color='info'
												href='#pablo'
												onClick={e => e.preventDefault()}
												size='lg'>
												Get Started
											</Button>
										</CardFooter>
									</Card>
								</Col>
							</Row>
						</Container>
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
					</div>
					<DemoFooter />
				</div>
			</>
		)
	}
}

export default RegisterPage
