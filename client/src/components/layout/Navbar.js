import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import setAuthToken from '../../utils/setAuthToken';

class Navbar extends Component {

  onClick(){
    // remove token from ls
    localStorage.removeItem('jwtToken')
    //remove auth header for future requests
    setAuthToken(false)
    //set current user to {} and isAuthenticated to false
    this.props.dispatch({
      type: 'LOGOUT_USER',
      payload: {}
    })
    this.props.history.push('/')

  }
    render() {

      const { isAuthenticated } = this.props

      const authLinks = (
        
        <ul className="navbar-nav ml-auto">    
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={()=>this.onClick(this.bind)}>Logout</a>
          </li>
          
        </ul>
       
      )

      const guestLinks = (
        <div>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li> */}
        </ul>
        
          </div>
      )

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                <Link className="navbar-brand" to="/">Nadu-Nedu WG</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          {isAuthenticated ? (
          // <li className="nav-item">
          //     <Link className="nav-link" to="/dashboard">Dashboard</Link>
          // </li>
          <li className="nav-item">
          <Link className="nav-link" to="/nadunedu">Add New</Link>
        </li>) : null}
          
          <li className="nav-item">
            <Link className="nav-link" to="/report">Report</Link>
          </li>
          
          {/* <li className="nav-item">
            <Link className="nav-link" to="/nadunedu">Nadu-Nedu</Link>
          </li> */}
          
        
        </ul>
        
        {isAuthenticated ? authLinks : guestLinks}
        
      </div>
      </div>  
    </nav>
        )
    }
}

const mapStateToProps = (state) => {
  return {loginUser: state.auth.loginUser, 
    isAuthenticated: state.auth.isAuthenticated}
}

const mapDispatchToProps = (dispatch)=>{
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);



