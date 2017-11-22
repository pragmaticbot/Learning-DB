import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => { return <div>Header</div> };
const Landing = () => { return <div>Landing</div> };
const Dashboard = () => { return <div>Dashboard</div> };
const Survey = () => { return <div>Survey</div> };
const SurveyNew = () => { return <div>New Survey</div> };

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <div>
               <Header />
               <Route exact path={'/'} component={Landing} />
               <Route exact path={'/dashboard'} component={Dashboard} />
               <Route exact path={'/survey'} component={Survey} />
               <Route path={'/survey/new'} component={SurveyNew} />
            </div>
         </BrowserRouter>
      </div>
   )
};

export default App;
