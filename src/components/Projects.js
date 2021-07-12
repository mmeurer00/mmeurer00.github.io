import React from 'react'
import ProjectDeck from './Projects/ProjectDeck'
import './Projects/projectStyle.css'


class Projects extends React.Component {
    render(){
        return(
            <div className="one-second-animation" >
                <ProjectDeck />
            </div>
        )
    }
}

export default Projects