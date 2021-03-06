import React, { Fragment } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar2'
import Home from './components/Home';
import Projects from './components/Projects';
import AboutContainer from './Containers/AboutContainer'
import About from './components/About';
import Test from './components/Test';
import Contact from './components/Contact'

import ResumeContainer from './Containers/ResumeContainer'
import './App.css';

class App extends React.Component {

  state = {
    forceUpdate: false
  }

  handleForceUpdateTrue = () => {
    this.setState ({
      forceUpdate: true
    })
  }

  handleForceUpdateFalse = () => {
    this.setState ({
      forceUpdate: false
    })
  }

  renderResumeContainer = () => <ResumeContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderAboutContainer = () => <AboutContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />

  render(){
    return (
      <div>
        <Router basename="/">
              <Fragment>     
                <Navbar />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/resume" component={this.renderResumeContainer} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/test" component={Test} />
                  </Switch>
                  {/* <Sidebar/> */}
              </Fragment>
        </Router>
      </div>
    )
  }
}

export default App;
