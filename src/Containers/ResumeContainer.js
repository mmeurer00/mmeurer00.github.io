import React from 'react';
import Resume from '../components/Resume'
import ShowResumeContainer from './ShowResumeContainer'

class ResumeContainer extends React.Component {

  state = {
    currentlyShowing: "None"
  }

  handleChangeCurrentlyShowing = (projectName) => {
    this.setState ({
      currentlyShowing: projectName
    })
  }

  componentDidMount() {
    this.props.handleForceUpdateFalse()
  }

  componentDidUpdate() {
    if (this.props.forceUpdate === true) {
      this.setState ({
        currentlyShowing: "None"
      })
      this.props.handleForceUpdateFalse()
    }
  }

  render() {

    return (
      <div className="one-second-animation">
        {this.state.currentlyShowing === "None" ?
          <div className="containers" >
            <h2 className="h2" >Résumé</h2>
            <h2><a href="https://docs.google.com/document/d/1eyija4RaohR4z22eePlDByyzIalfxUmxYUdaVNUxPIc/edit?usp=sharing" id="PDF-link" rel="noopener noreferrer" target="_blank" >Download PDF Version</a></h2>
            <Resume handleChangeCurrentlyShowing={this.handleChangeCurrentlyShowing} />
          </div>
          :
          <div className="containers" >
            <ShowResumeContainer currentlyShowing={this.state.currentlyShowing} handleChangeCurrentlyShowing={this.handleChangeCurrentlyShowing} />
          </div>
        }
      </div>
      
    );

  }
  
}

export default ResumeContainer;