import React from 'react';
import { Route, Switch } from 'react-router-dom';


// FREE

import AlertPage from './pages/AlertPage';
import HomePage from './pages/HomePage';
import AlarmList from './pages/AlarmList';




class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/AlarmList' component={AlarmList}/>

        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
