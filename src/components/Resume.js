import React from 'react';

function Resume(props) {

  const handleGetName = (event) => {
    let resumeSection = event.target.id
    console.log(resumeSection)
    handleChangeCurrentlyShowing(resumeSection)
  }

  const handleChangeCurrentlyShowing = (resumeSection) => {
    props.handleChangeCurrentlyShowing(resumeSection)
  }

  return (

    <div className= "components" id="resume-div" >

      <div className="resume-divs" id="Education" onClick={handleGetName} >
        <h2 className="h2-standard resume-headings" id="Education" onClick={handleGetName} > Education </h2>
        <img src={"https://github.com/iona-b/iona-b.github.io/blob/iona/src/media/education.png?raw=true"} alt='' className="resume-icons" id="Education" onClick={handleGetName} />
      </div>

      <div className="resume-divs" id="WorkExperience" onClick={handleGetName} >
        <h2 className="h2-standard resume-headings" id="WorkExperience" onClick={handleGetName} > Work Experience </h2>
        <img src={"https://github.com/iona-b/iona-b.github.io/blob/iona/src/media/work-experience.png?raw=true"} alt='' className="resume-icons" id="WorkExperience" onClick={handleGetName} />
      </div>

      {/* <div className="resume-divs" id="VolunteerExperience" onClick={handleGetName} >
        <h2 className="h2-standard resume-headings" id="VolunteerExperience" onClick={handleGetName} > Volunteer Experience </h2>
        <img src={"../media/volunteer-experience.png"} alt='' className="resume-icons" id="VolunteerExperience" onClick={handleGetName} />
      </div> */}

      <div className="resume-divs" id="Skills" onClick={handleGetName} >
        <h2 className="h2-standard resume-headings" id="Skills" onClick={handleGetName} > Skills </h2>
        <img src={"https://github.com/iona-b/iona-b.github.io/blob/iona/src/media/skills.png?raw=true"} alt='' className="resume-icons"  id="Skills" onClick={handleGetName} />
      </div>

    </div>
    
  );
  
}

export default Resume;
