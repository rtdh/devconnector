import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';

import Register from './components/auth/Register';
import Login from './components/auth/Login';


import './App.css';
import store from './store';
import TodosList from './components/Todos/TodosList';
import EditTodo from './components/Todos/EditTodo';
import CreateTodo from './components/Todos/CreateTodo';

import Teachers from './components/teachers/Teachers';
import AddTeacher from './components/teachers/PersonalDetails/EmployeeDetails';
import ShowTeacher from './components/teachers/ShowTeacher';
import EditTeacher from './components/teachers/EditTeacher';
import Aggrid from './components/Ag-grid';
import EmployeeDetailsReport from './components/teachers/Reports/EmployeeDetailsReport';
import PhotoUploadDetails from './components/teachers/PersonalDetails/PhotoUploadDetails';
import AddressDetails from './components/teachers/PersonalDetails/AddressDetails';
import AddTeacherSample from './components/teachers/PersonalDetails/sample-employee-details';
import Nadunedu from './components/teachers/Nadunedu';
import nadunedusample from './components/teachers/nadunedusample';

//Check for token
if(localStorage.jwtToken){
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken)
  //Set user and isAuthenticated
  store.dispatch({type: 'SET_CURRENT_USER', payload: decoded})
}


class App extends React.Component {

  render(){
      return (
        <Router>

            <div className="App">
              <Navbar />
              <Route exact path='/aggrid' component = {Aggrid} />
              <Route exact path='/' component={Landing} />
              
              <Route exact path='/home' component={Home} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/createtodo' component={CreateTodo} />
              <Route exact path='/todoslist' component={TodosList} />
              <Route exact path='/edit/:id' component={EditTodo} />
              <Route exact path='/teacherslist' component={Teachers} />
              <Route exact path='/teacher/addTeacher' component={AddTeacherSample} />
              <Route exact path='/teacher/show/:id' component={ShowTeacher} />
              <Route exact path='/teacher/edit/:id' component={EditTeacher} />
              <Route exact path="/report" component={EmployeeDetailsReport} />
              <Route exact path="/uploadphotos" component={PhotoUploadDetails} />
              <Route exact path="/addressdetails" component={AddressDetails} />
              <Route exact path="/nadunedu" component={nadunedusample} />
              {/* <Route exact path="/nadunedu" component={Nadunedu} /> */}

               <div className="container">
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </div>
              <Footer />
            </div>
        </Router>
      
        
      );
  }
}

const mapStateToProps = (state) => {
  return {loginUser: state.auth.loginUser, errors: state.auth.errors}
}

const mapDispatchToProps = (dispatch)=>{
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
