import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={this.renderResumeContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      {/* < Sidebar /> */}
      </div>
    )
  }
}

export default App;
