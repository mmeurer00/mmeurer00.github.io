import React from 'react';

class WorkExperience extends React.Component {

  state = {
    showMarketHallCaterers: false,
    showSanFranciscoBoxOffice: false,
    showBerlitz: false,
    showAMSAB: false,
    showMuseumOfEdinburgh: false,
    showStudentRepresentativeCouncil: false
  }

  handleExpand = (event) => {
    this.setState ({
      [event.target.id] : !this.state[event.target.id]
    })
  }

  render() {

    return (

      <div className="one-second-animation" >
  
          <h2 className="h2" >Work Experience</h2>
          
          <div className="individual-resume-divs" id="showMarketHallCaterers" onClick={this.handleExpand} >
            
            <h2 className="h2-standard individual-resume-divs-headers" id="showMarketHallCaterers" onClick={this.handleExpand} >Lead Preschool Teacher</h2>
            <h3 className="h3" id="showMarketHallCaterers" onClick={this.handleExpand} >Abundant Life PreSchool and DayCare</h3>
            <h4 className="h4" id="showMarketHallCaterers" onClick={this.handleExpand} >Keyport, New Jersey, USA</h4>
            <h4 className="h4" id="showMarketHallCaterers" onClick={this.handleExpand} >2019-2020</h4>
            <button id="showMarketHallCaterers" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showMarketHallCaterers === false ? "+ more" : "- less"} </button>
            {this.state.showMarketHallCaterers === true ? 
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
  
          <div className="individual-resume-divs" id="showSanFranciscoBoxOffice" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showSanFranciscoBoxOffice" onClick={this.handleExpand} >Children's Book Illustrator & Author</h2>
            <h3 className="h3" id="showSanFranciscoBoxOffice" onClick={this.handleExpand} >Remote</h3>
            {/* <h4 className="h4" id="showSanFranciscoBoxOffice" onClick={this.handleExpand} ></h4> */}
            <h4 className="h4" id="showSanFranciscoBoxOffice" onClick={this.handleExpand} >2019-current</h4>
            <button id="showSanFranciscoBoxOffice" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showSanFranciscoBoxOffice === false ? "+ more" : "- less"} </button>
            {this.state.showSanFranciscoBoxOffice === true ? 
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

          <div className="individual-resume-divs" id="showBerlitz" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showBerlitz" onClick={this.handleExpand} >Ocean Rescue</h2>
            <h3 className="h3" id="showBerlitz" onClick={this.handleExpand} >Sea Bright Public Beach</h3>
            <h4 className="h4" id="showBerlitz" onClick={this.handleExpand} >Sea Bright, New Jersey, USA</h4>
            <h4 className="h4" id="showBerlitz" onClick={this.handleExpand} >2017</h4>
            <button id="showBerlitz" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showBerlitz === false ? "+ more" : "- less"} </button>
            {this.state.showBerlitz === true ? 
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

          {/* <div className="individual-resume-divs" id="showAMSAB" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showAMSAB" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="showAMSAB" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="showAMSAB" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="showAMSAB" onClick={this.handleExpand} ></h4>
            <button id="showAMSAB" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showAMSAB === false ? "+ more" : "- less"} </button>
            {this.state.showAMSAB === true ? 
              <div className="resume-bullet-points-div" >
                <p className="resume-bullet-points" >• </p>
                <p className="resume-bullet-points" >• </p>
              </div>
              :
              null
            }
          </div>

          <div className="individual-resume-divs" id="showMuseumOfEdinburgh" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showMuseumOfEdinburgh" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="showMuseumOfEdinburgh" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="showMuseumOfEdinburgh" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="showMuseumOfEdinburgh" onClick={this.handleExpand} ></h4>
            <button id="showMuseumOfEdinburgh" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showMuseumOfEdinburgh === false ? "+ more" : "- less"} </button>
            {this.state.showMuseumOfEdinburgh === true ? 
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

          <div className="individual-resume-divs" id="showStudentRepresentativeCouncil" onClick={this.handleExpand} >
            <h2 className="h2-standard individual-resume-divs-headers" id="showStudentRepresentativeCouncil" onClick={this.handleExpand} ></h2>
            <h3 className="h3" id="showStudentRepresentativeCouncil" onClick={this.handleExpand} ></h3>
            <h4 className="h4" id="showStudentRepresentativeCouncil" onClick={this.handleExpand} ></h4>
            <h4 className="h4" id="showStudentRepresentativeCouncil" onClick={this.handleExpand} ></h4>
            <button id="showStudentRepresentativeCouncil" className="buttons expand-buttons" onClick={this.handleExpand} >{this.state.showStudentRepresentativeCouncil === false ? "+ more" : "- less"} </button>
            {this.state.showStudentRepresentativeCouncil === true ? 
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
