import React, { Component } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
      if(this.props.isAuthenticated){
        this.props.history.push('/dashboard')
      }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const loginUser = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(loginUser)
      axios
        .post('http://localhost:5000/api/users/login', loginUser)
        .then(response=>{
          // save to localstorage
          const { token } = response.data
          // set token to ls
          localStorage.setItem('jwtToken', token)
          // set token to auth header
          setAuthToken(token)
          // Decode token to get user data
          const decoded = jwt_decode(token)
          //Set current user
          this.props.dispatch({
            type: 'SET_CURRENT_USER',
            payload: decoded
          })
          this.props.history.push('/nadunedu')

        })
        .catch(error=>{
          this.props.dispatch({
            type: 'GET_ERRORS',
            payload: error.response.data
          })
        })

    }

    render() {

      const { errors } = this.props
        return (
            <section className="container">
      
      {/* <div className="alert alert-danger">
        Invalid Credentials
      </div> */}

      <h1 className="large text-primary">
        Sign In
      </h1>
      <p className="lead"><i className="fa fa-user"></i> Sign into your account</p>
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email"
          className={classnames('form-control',{'is-invalid': errors.email})}
          value={this.state.email}
          onChange={this.onChange} />
          {errors.email && (<div className="invalid-feedback">{errors.email}</div>) } 
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password"
          className={classnames('form-control',{'is-invalid': errors.password})} minLength="6" value={this.state.password} onChange={this.onChange} />
          {errors.password && (<div className="invalid-feedback">{errors.password}</div>) } 
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated, 
    loginUser: state.auth.loginUser, 
    errors: state.auth.errors}
}

const mapDispatchToProps = (dispatch)=>{
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);