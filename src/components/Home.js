import React from 'react'

class Home extends React.Component {
    render(){
        return(
            <div className="components">
                <h2 className="h1 three-second-animation"> Hi there! My name is</h2>
                <h1 className="h2 five-second-animation">Maxine Meurer</h1>
                <h2 className="p seven-second-animation">I'm a Fullstack Software Engineer</h2>
                <h2 className="nine-second-animation">I have experience in Ruby on Rails, Python, JavaScript, React, Redux, and more.</h2>
            </div>
        )
    }
}

export default Home