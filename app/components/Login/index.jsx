import React            from 'react';
import axios            from 'axios';

class Login extends React.Component {
  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);

    this.state = {
        username: '',
        password: ''
    }
  }

  changeInput(event) {
    const type = event.target.dataset.type;
    const value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(e) {
    const context = this;

    axios.post('/auth/login', {
       username: context.state.username,
       password: context.state.password,
    })
    .then((response) => {
      localStorage['user'] = JSON.stringify(response.data);
      window.location = '/photos';
    })
    .catch((err) => {
      console.error('Wrong Password');
    })
  }

  render() {
    return (
      <div className="left-padding-50px container-fluid padding-5percent">
      <h1 className="text-center">INSTAGRAM CLONE LOG IN</h1>
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
            <div className="submit">
              <button id="submit" type="submit" className="btn btn-success addMargin2percent">Log In</button>
            </div>
          </div>
        </form>
        </div>
        <div id="error">
        </div>

      </div>
    );
  }
}

module.exports = Login;  