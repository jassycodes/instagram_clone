import React            from 'react';
import axios            from 'axios';

class Signup extends React.Component {
	constructor (props) {
		super (props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeInput = this.changeInput.bind(this);

		this.state = {
				username: '',
				email: '',
				password: '',
				firstName: '',
				lastName: '',
				img: 'https://smallimg.pngkey.com/png/small/20-200003_sitting-puppy-svg-scrapbook-cut-file-cute-clipart.png',
		};
	}

	changeInput(event) {
		const type = event.target.dataset.type;
		const value = event.target.value;

		this.setState({
			[type]: value
		});
	}

	// handleSubmit(e) {
	// 	const context = this;

	// 	axios.post('/auth/signup', {
			 // username: context.state.username,
			 // password: context.state.password,
			 // email: context.state.email,
			 // firstName: context.state.firstName,
			 // lastName: context.state.lastName
	// 	})
	// 	.then((response) => {
	// 		console.log(response);
	// 		window.location = '/login';
	// 	})
	// }


	  handleSubmit(e) {
    const context = this;

    axios.post('/auth/signup', {
			 username: context.state.username,
			 password: context.state.password,
			 email: context.state.email,
			 firstName: context.state.firstName,
			 lastName: context.state.lastName
    })
    .then((response) => {
      localStorage['user'] = JSON.stringify(response.data);
      window.location = '/dashboard';
    })
    .catch((err) => {
      console.error("There's an error");
    })
  }

	render() {
		return (
			<div className="left-padding-50px container-fluid padding-5percent">
			<h1 className="text-center">HEY YOU, IT'LL BE AWESOME IF YOU SIGN UP :)</h1>
				<img className="changeSize20percent center-block" src={this.state.img}/>
				<div className="formDiv align-items-center justify-content-center">
				<form onSubmit={this.handleSubmit}>
					<div className="form-inputs">
						<input 
							onChange={this.changeInput}
							className="login-input formContentSmaller addMargin2percent"
							type='text'
							placeholder='username'
							data-type='username'
							/>
						<span id="username"></span>
						<br />
						<input 
							onChange={this.changeInput}
							className="login-input formContentSmaller addMargin2percent"
							type='password' 
							placeholder='password'
							data-type='password'
							/>
						<span id="password"></span>
						<br />
						<input 
							onChange={this.changeInput}
							className="login-input formContentSmaller addMargin2percent"
							type='text' 
							placeholder='email'
							data-type='email'
							/>
						<span id="email"></span>
						<br />
						<input 
							onChange={this.changeInput}
							className="login-input formContentSmaller addMargin2percent"
							type='text' 
							placeholder='firstName'
							data-type='firstName'
							/>
						<span id="firstName"></span>
						<br />
						<input 
							onChange={this.changeInput}
							className="login-input formContentSmaller addMargin2percent"
							type='text' 
							placeholder='lastName'
							data-type='lastName'
							/>
						<span id="lastName"></span>
						<br />
						<div className="submit">
							<button id="submit" type="submit" className="btn btn-success addMargin2percent">Sign Up</button>
						</div>
					</div>
				</form>
				</div>
				<div id="error">
				</div>
			</div>
		);
	} 
	// render function end
}

module.exports = Signup;  