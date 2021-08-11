import React from 'react'
import ProjectDeck from './Projects/ProjectDeck'
//import ProjectTwo from './ProjectsTwo/ProjectsTwo'
//import './Projects/projectStyle.css'
// import ProjectTwo from './ProjectSlider/ProjectSlider'



class Projects extends React.Component {
    render(){
        return(
            <div className="one-second-animation" >
                <ProjectDeck/>
            </div>
        )
    }
}

export default Projects