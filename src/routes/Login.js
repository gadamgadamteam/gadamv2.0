import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { TextField, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import '../css/Login.css'
import axios from 'axios'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
  forceRefresh: true
});
const location = history.location;
history.listen((location, action) => {
  console.log(action, location.pathname, location.state);
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: ""
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleLogout(event) {
    this.setState({ user: "" });
    this.setState({ username: "" });
    this.setState({ password: "" });
    localStorage.clear();
  };

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  };

  componentDidMount() {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      this.setState({ user: foundUser });
    } else {
      this.handleLogout();
    }
  };

  login(event) {
    event.preventDefault();
    const request = {
      email: document.getElementById('exampleInputEmail1').value,
      password: document.getElementById('exampleInputPassword1').value
    };

    axios.post('http://localhost:8000/auth/login', request)
      .then(resp => {
        console.log(resp)
        if (resp.data === 'success') {
          history.push("/");
          return resp.data;
        } else {
          alert(resp.data);
        }
      })
      .catch(err => {
        console.log(err);
      });

    interface IUser {
      username: "";
      password: ""; // please don't do this in real code
    }

    function saveCurrentUser(user: IUser): void {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }

    function getCurrentUser(): IUser {
      var userStr = localStorage.getItem('currentUser');
      try {
        return JSON.parse(userStr);
      } catch (ex) {
        return null; // or do some other error handling
      }
    }

    var user = { username: this.state.username, password: this.state.password };
    saveCurrentUser(user);

    // elsewhere...
    var savedUser = getCurrentUser();
    if (savedUser) {
      console.log('Current user: ' + savedUser.username);
    } else {
      console.log('Current user not found');
    }
  }

  render() {
    return (
      <div className="main">
        <b><p className="logintitle">Login</p></b>
        <form name="fo" className="login_form" method="get" onSubmit={this.login}>
          <div className="loginfo_id">
            <label for='exampleInputEmail1'><b><p id="un">Username</p></b></label>
            <input type="text" size={20} id='exampleInputEmail1'
              placeholder="enter a username"
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
          <div className="loginfo_pw">
            <label for='exampleInputPassword1'><b><p id="pw" >Password</p></b></label>
            <input id='exampleInputPassword1' type="password" size={20}
              placeholder="enter a password"
              onChange={this.handlePasswordChange.bind(this)} />
          </div>
          <div className="login_btn">
            <input type="submit" value="LOG IN" />
          </div>
          <div className="loginfo_bottom">
            <div className='storedId'>
              <input classname="remember_id" type="checkbox" />
              <p>아이디 저장</p>
            </div>
            <li><NavLink to='/findidpw'>아이디/비밀번호 찾기</NavLink></li>
          </div>
          <br />
          <div className='gojoin-gadam'>
            <p id="notyet">아직 가담가담 회원이 아니신가요?</p>
            <li><NavLink id='go_to_join' to='/register'>회원가입 바로가기</NavLink></li>
          </div>
        </form>
        <hr />
        <h1 className="loginsubtitle">SNS LOG IN</h1>
        <div className="snslogin_btn">
          <a id="custom-login-btn" href="javascript:loginWithKakao()">
            <img width={222} src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" />
          </a>
          <p id="token-result" />
        </div>
      </div>
    )
  }
}

export default Login;