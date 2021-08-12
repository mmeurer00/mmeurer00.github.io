import React from 'react';

class Education extends React.Component {

  state = {
    showFlatironSchool: false,
    brookdaleCC: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" style={{margin: '1rem'}}>Education</h2>
          
          {/* <div className="individual-resume-divs" id="showFlatironSchool" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showFlatironSchool" onClick={this.handleExpand} >Software Engineering</h2>
            <h3 className="h3" onClick={this.handleExpand} id="showFlatironSchool" >Flatiron School</h3>
            <h4 className="h4" onClick={this.handleExpand} id="showFlatironSchool" >Remote, Online</h4>
            <h4 className="h4" onClick={this.handleExpand} id="showFlatironSchool" >2021</h4>
            <button id="showFlatironSchool" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.showFlatironSchool === false ? "+ more" : "- less"} </button>
            {this.state.showFlatironSchool === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >Languages and Technologies: </p>
                <p className="resume-bullet-points indented" >• Ruby and Ruby on Rails</p>
                <p className="resume-bullet-points indented" >• SQL</p>
                <p className="resume-bullet-points indented" >• JavaScript, React, Redux, and Redux Toolkit</p>
                <p className="resume-bullet-points indented" >• HTML and CSS</p>
                <br></br>
                <p className="resume-bullet-points" >Projects:</p>
                <a href="https://github.com/mmeurer00/parent_path" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Parent Path: A Ruby on Rails, React, and Redux application </p>
                </a>
                <a href="https://github.com/mmeurer00/growfundgreen-frontend" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> GrowFundGreen: A Ruby on Rails and JavaScript application </p>
                </a>
                <a href="https://github.com/mmeurer00/automaid" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Automaid: A Ruby on Rails application </p>
                </a>
                <a href="https://github.com/mmeurer00/Viberate_positivity_sinatra_app" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Positive Vibes: A Ruby (Sinatra), MVC application </p>
                </a>
                <a href="https://github.com/mmeurer00/plant_Finder" className="indented" rel="noopener noreferrer" target="_blank" >
                  <p className="resume-bullet-points indented" ><span role="img" aria-labelledby="link">🔗</span> Plant Finder: A Ruby Command Line Interface (CLI) application </p>
                </a>
                <br></br>
                <p className="resume-bullet-points" >Additional Skills: </p>
                <p className="resume-bullet-points indented" >• Teamwork and Communication</p>
                <p className="resume-bullet-points indented" >• Independent Work</p>
                <p className="resume-bullet-points indented" >• Research</p>
              </div>
              :
              null
            }

          </div> */}
  
          <div className="individual-resume-divs" id="brookdaleCC" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="brookdaleCC" onClick={this.handleExpand} >Environmental Sciences and Engineering</h2>
            <h3 className="h3" id="brookdaleCC" onClick={this.handleExpand} >Brookdale Community College</h3>
            <h4 className="h4" id="brookdaleCC" onClick={this.handleExpand} >Lincroft, New Jersey, USA</h4>
            <h4 className="h4" id="brookdaleCC" onClick={this.handleExpand} >2018-2020</h4>
            <button id="brookdaleCC" className="buttons expand-buttons" onClick={this.handleExpand}>{this.state.brookdaleCC === false ? "+ more" : "- less"} </button>
            {this.state.brookdaleCC === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Ability to write environmental documents and reports collected from field data and lab tests.</p>
                <p className="resume-bullet-points" >• Experience in planning projects and managing resources that have positive impacts on the environment.</p>
                <p className="resume-bullet-points" >• Microsoft Access and Excel, including displaying data with charts, using formulas, sorting and filtering data, and using SQL.</p>
                <p className="resume-bullet-points" >• Gained knowledge of land conservation efforts, federal and state conservation laws, NEPS, SEQRA, OSHA regulations, permit, and public policy.</p>
                <br></br>
              </div>
              :
              null
            }
          </div>
  
      </div>
  
    );

  }
  
}

export default Education;
