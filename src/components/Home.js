import React from 'react'
import LogoCube from './LogoCube/LogoCube.js'
import './LogoCube/LogoCube.css'

class Home extends React.Component {
    render() {
        return(
            <div className="components" id="components">
                <h2 className="h2 three-second-animation"> Hi there! My name is</h2>
                <h1 className="h1 five-second-animation" style={{marginTop: "1rem"}}><span style={{color: '#ee71d1'}}>Maxine Meurer</span></h1>
                <h2 className="p seven-second-animation" style={{marginTop: "2rem"}}>I'm a <span style={{color: '#ee71d1'}}>Fullstack Software Engineer</span></h2>
                <h2 className="nine-second-animation" style={{marginTop: "0.5rem"}}>I have experience in <span style={{color: '#ee71d1'}}>Ruby, Java, JavaScript, and more.</span></h2>
                <div className="logoCube">
                    <LogoCube/>
                </div>
            </div>
        )
    }
}

export default Home