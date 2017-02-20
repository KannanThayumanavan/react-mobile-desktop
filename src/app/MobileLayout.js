import React, { Component } from 'react';
// Import routing components
import { browserHistory } from 'react-router';
import {Router, Route} from 'react-router';

class MobileLayout extends Component {
    componentWillMount (){
      this.updateDimensions
    }

    componentDidMount () {
        window.addEventListener("resize", this.updateDimensions);
    }

    render(){
      return (<h1>Mobile based components goes here..</h1>);
    }

    updateDimensions () {
      let isTouchDevice =  window.isMobile();
      let isTouchResolution = window.isMobileResolution();
      //console.log(isTouchResolution);
        if (isTouchResolution === "Mobile") {
          browserHistory.push('/mobile');
        } else {
          browserHistory.push('/');
        }
    }
}

export default MobileLayout;
