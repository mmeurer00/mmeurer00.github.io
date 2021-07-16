import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home';
import Projects from './components/Projects';
import AboutContainer from './Containers/AboutContainer'
import About from './components/About';
import Contact from './components/Contact'
// import Sidebar from './components/Navbar/Sidebar'
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
        <Router >
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={this.renderResumeContainer} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> 
          </Switch>
        </Router>
      {/* < Sidebar /> */}
      </div>
    )
  }
}

export default App;
