import React from 'react'
import ProjectDeck from './Projects/ProjectDeck'
import './Projects/projectStyle.css'


class Projects extends React.Component {
    render(){
        return(
            <div>
                <ProjectDeck />
                <p>text</p>
            </div>
        )
    }
}

export default Projects