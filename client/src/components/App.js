import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Survey = () => { return <div>Survey Component</div> };
const SurveyNew = () => { return <div>New Survey</div> };

class App extends Component {

   componentDidMount() {
      this.props.fetchUser();
   }

   render() {
      return (
         <BrowserRouter>
            <div className="container">
               <Header />
               <Route exact path={'/'} component={Landing} />
               <Route exact path={'/surveys'} component={Survey} />
               <Route path={'/survey/new'} component={SurveyNew} />
            </div>
         </BrowserRouter>
      )
   };
}

export default connect(null, actions)(App);
