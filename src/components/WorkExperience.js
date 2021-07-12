import React from 'react';

class WorkExperience extends React.Component {

  state = {
    preschoolTeacher: false,
    illustrator: false,
    oceanRescue: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" style={{margin: '1rem'}}>Work Experience</h2>

          <div className="individual-resume-divs" id="showFlatironSchool" onClick={this.handleExpand} >
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

          </div>
          
          <div className="individual-resume-divs" id="preschoolTeacher" onClick={this.handleExpand} >
            
            <h2 className="h2-standard individual-resume-divs-headers" id="preschoolTeacher" onClick={this.handleExpand} >Lead Preschool Teacher</h2>
            <h3 className="h3" id="preschoolTeacher" onClick={this.handleExpand} >Abundant Life PreSchool and DayCare</h3>
            <h4 className="h4" id="preschoolTeacher" onClick={this.handleExpand} >Keyport, New Jersey, USA</h4>
            <h4 className="h4" id="preschoolTeacher" onClick={this.handleExpand} >2019-2020</h4>
            <button id="preschoolTeacher" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.preschoolTeacher === false ? "+ more" : "- less"} </button>
            {this.state.preschoolTeacher === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Prepared and implemented unique, personally developed, Montessori based lessons to classrooms averaging 10 students between 2 and 5 years old.</p>
                <p className="resume-bullet-points" >• Frequently contacted and worked with families to discuss student development and behavior, as well as maintained records and open communication about student physical development and health.</p>
                <p className="resume-bullet-points" >• Created music and art programs for pre-K students – these programs helped develop student creativity and became a daily favorite among children.</p>
                <p className="resume-bullet-points" >• Worked with students with special needs, developed alternative/adjusted lessons for these students as needed.</p>
              </div>
              :
              null
            }

          </div>
  
          <div className="individual-resume-divs" id="illustrator" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="illustrator" onClick={this.handleExpand} >Children's Book Illustrator & Author</h2>
            <h3 className="h3" id="illustrator" onClick={this.handleExpand} >Remote</h3>
            {/* <h4 className="h4" id="illustrator" onClick={this.handleExpand} ></h4> */}
            <h4 className="h4" id="illustrator" onClick={this.handleExpand} >2019-current</h4>
            <button id="illustrator" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.illustrator === false ? "+ more" : "- less"} </button>
            {this.state.illustrator === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Create full-color renderings.</p>
                <p className="resume-bullet-points" >• Work with a wide range of creative styles and brands, both client and agency focused.</p>
                <p className="resume-bullet-points" >• Work with Creative and Business Development teams to develop a wide variety of online and multimedia projects using tools such as Prezi, iMovie, Keynote, etc.</p>
                <p className="resume-bullet-points" >• Delivers quality files, including ensuring that proofreading, spell-checking and proper pre-flight procedures are followed.</p>
                <p className="resume-bullet-points" >• Keeps up-to-date with current software, technology and workflows and proactively brings recommendations for improvements.</p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="oceanRescue" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="oceanRescue" onClick={this.handleExpand} >Ocean Rescue</h2>
            <h3 className="h3" id="oceanRescue" onClick={this.handleExpand} >Sea Bright Public Beach</h3>
            <h4 className="h4" id="oceanRescue" onClick={this.handleExpand} >Sea Bright, New Jersey, USA</h4>
            <h4 className="h4" id="oceanRescue" onClick={this.handleExpand} >2017</h4>
            <button id="oceanRescue" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.oceanRescue === false ? "+ more" : "- less"} </button>
            {this.state.oceanRescue === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• Rescues of swimmers in distress.</p>
                <p className="resume-bullet-points" >• Managed and taught children's training in rescue and life saving.</p>
                <p className="resume-bullet-points" >• Completed USLA certifion for First Aid and CPR.</p>
                <p className="resume-bullet-points" >• Daily trainings to maintain knowledge of medical procedures and top physical condition.</p>
                <p className="resume-bullet-points" >• Coordinated and supervised operations of aquatic or major area of aquatic programs to ensure safety.</p>
              </div>
              :
              null
            }
          </div>

          {/* <div className="individual-resume-divs" id="jobFour" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="jobFour" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="jobFour" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="jobFour" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="jobFour" onClick={this.handleExpand} ></h4>
            <button id="jobFour" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.jobFour === false ? "+ more" : "- less"} </button>
            {this.state.jobFour === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• </p>
                <p className="resume-bullet-points" >• </p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="jobFive" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="jobFive" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="jobFive" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="jobFive" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="jobFive" onClick={this.handleExpand} ></h4>
            <button id="jobFive" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.jobFive === false ? "+ more" : "- less"} </button>
            {this.state.jobFive === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• </p>
                <p className="resume-bullet-points" >• </p>
                <p className="resume-bullet-points" >• </p>
                <p className="resume-bullet-points" >• </p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="jobSeven" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="jobSeven" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="jobSeven" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="jobSeven" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="jobSeven" onClick={this.handleExpand} ></h4>
            <button id="jobSeven" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.jobSeven === false ? "+ more" : "- less"} </button>
            {this.state.jobSeven === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• </p>
                <p className="resume-bullet-points" >• </p>
              </div>
              :
              null
            }
          </div> */}
  
      </div>
  
    );

  }
  
}

export default WorkExperience;
