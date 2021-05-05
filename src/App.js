import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Cards from './components/Cards'
import Cookies from './components/Cookies'
import Blog from './components/blog'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (
      <Router> 
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Cards></Cards>
          <Cookies></Cookies>
          	</div>
      	</div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Blog />
          </Route>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
