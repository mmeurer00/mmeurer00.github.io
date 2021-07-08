import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact'
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
        <Router >
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Router>
      </div>
    )
  }
}

export default App;
