import React from 'react';

class VolunteerExperience extends React.Component {

  state = {
    showCodeTenderloin: false,
    showCohenBrayHouse: false,
    showNationalTrustForScotland: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (



      <div className="one-second-animation" >
  
          <h2 className="h2" >Volunteer Experience</h2>
          
          <div className="individual-resume-divs" id="showCohenBrayHouse" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showCohenBrayHouse" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="showCohenBrayHouse" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="showCohenBrayHouse" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="showCohenBrayHouse" onClick={this.handleExpand} ></h4>
            <button id="showCohenBrayHouse" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showCohenBrayHouse === false ? "+ more" : "- less"} </button>
            {this.state.showCohenBrayHouse === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• </p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" id="showNationalTrustForScotland" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showNationalTrustForScotland" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="showNationalTrustForScotland" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="showNationalTrustForScotland" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="showNationalTrustForScotland" onClick={this.handleExpand} ></h4>
            <button id="showNationalTrustForScotland" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showNationalTrustForScotland === false ? "+ more" : "- less"} </button>
            {this.state.showNationalTrustForScotland === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• </p>
                <p className="resume-bullet-points" >• </p>
              </div>
              :
              null
            }
          </div>
  
      </div>
  
    );

  }
  
}

export default VolunteerExperience;