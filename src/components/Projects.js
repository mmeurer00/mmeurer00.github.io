import React from 'react'
// import ProjectDeck from './Projects/ProjectDeck'
import ProjectTwo from './ProjectsTwo/ProjectsTwo'
import './Projects/projectStyle.css'
import LogoCube from './LogoCube/LogoCube.js'
import './LogoCube/LogoCube.css'


class Projects extends React.Component {
    render(){
        return(
            <div className="one-second-animation" >
                <ProjectTwo/>
                <LogoCube/>
            </div>
        )
    }
}

export default Projects