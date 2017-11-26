import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import * as actions from '../actions';

const Landing = () => { return <div>Landing</div> };
const Dashboard = () => { return <div>Dashboard</div> };
const Survey = () => { return <div>Survey</div> };
const SurveyNew = () => { return <div>New Survey</div> };

class App extends Component {

   componentDidMount() {
      this.props.fetchUser();
   }

   render() {
      console.log(this.props)
      return (
         <BrowserRouter>
            <div className="container">
               <Header />
               <Route exact path={'/'} component={Landing} />
               <Route exact path={'/dashboard'} component={Dashboard} />
               <Route exact path={'/surveys'} component={Survey} />
               <Route path={'/survey/new'} component={SurveyNew} />
            </div>
         </BrowserRouter>
      )
   };
}

export default connect(null, actions)(App);
