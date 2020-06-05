import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {},
            message: {}
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
        this.setState({errors: ''})
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        console.log(newUser)
        axios
            .post('http://localhost:5000/api/users/register', newUser)
            .then(response=>{
                // this.setState({message: response.data})  
                this.props.dispatch({
                    type: 'REGISTERED_USER',
                    payload: response.data
                })
                console.log(response.data)
                this.props.history.push('/login')
            })
            .catch(error=> {
                // this.setState({errors: error.response.data})
                this.props.dispatch({
                    type: 'GET_ERRORS',
                    payload: error.response.data
                })
                console.log(error.response.data)
                this.props.history.push('/register')
            })
        this.setState({name: ''})
        this.setState({email: ''}) 
        this.setState({password: ''})
        this.setState({password2: ''})   
        console.log(this.state.errors)  
    }
    
    render() {
        const { errors } = this.props
        const { user } = this.props
        return (
            <section className="container">
                {user.name ? (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                <small>You have successfully registered as {user.name}</small> 
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>) : null}
                <h1 className="large text-primary">
                    Sign Up
                </h1>
                <p className="lead"><i className="fa fa-user"></i> Create Your Account</p>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <input type="text" placeholder="Name" name="name"
                        className={classnames('form-control',{'is-invalid': errors.name})}
                        value={this.state.name}
                        onChange={this.onChange}
                        
                        />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>) }    
                    </div>
                    <div className="form-group">
                    <input type="email" placeholder="Email Address" name='email'
                    className={classnames('form-control',{'is-invalid': errors.email})}
                    value={this.state.email}
                    onChange={this.onChange} />
                    <small className="form-text">
                        This site uses Gravatar, so if you want a profile image, use a
                        Gravatar email
                    </small>
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>) }
                    </div>
                    <div className="form-group">
                    <input type="password" placeholder="Password" name='password'
                    className={classnames('form-control',{'is-invalid': errors.password})}
                    value={this.state.password}
                    onChange={this.onChange} minLength="6" />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>) }
                    </div>
                    <div className="form-group">
                    <input type="password" placeholder="Confirm Password" name='password2'
                    className={classnames('form-control',{'is-invalid': errors.password2})}
                    value={this.state.password2}
                    onChange={this.onChange} minLength="6" />
                    {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>) }
                    </div>
                    <input type="submit" value="Register" className="btn btn-primary" />
                </form>
                <p className="my-1">
                    Already have an account? <Link to='/login'>SignIn</Link>
                </p>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated, 
        user: state.auth.user, 
        errors: state.auth.errors
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
