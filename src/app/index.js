// Import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import RootComponent from './RootComponent';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import MobileLayout from './MobileLayout';
import MediaQuery from 'react-responsive';


// Pass JSON data as properties to DataBlock component
//ReactDOM.render(<RootComponent />, document.getElementById('container'));

render(
  <Router history={browserHistory}>
    <Route path="/" component={RootComponent} />
    <Route path="/mobile" component={MobileLayout} />
  </Router>, document.getElementById('container')
);
