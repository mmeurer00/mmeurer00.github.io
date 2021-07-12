import React from 'react'

class About extends React.Component {
    render(){
        return(
            <div className="one-second-animation" >
                <div className="components">
                    <p className='p' style={{marginLeft: '1rem', fontSize: '2rem'}}> 
                        Hi! I'm Maxine, 
                    </p>
                    <p className='p' style={{marginLeft: '1rem'}}> 
                        a sofware engineering graduate from Flatiron School. 
                    </p>
                        <div className="three-second-animation">
                            <p className='p' style={{margin: '1rem'}}>
                                Coding has always sparked an interest in me, especially as an environmental sciences/engineering major and general STEM nerd.
                                I decided to embrace this spark, embarking on my journey as a programmer during my last semester of college, when I took a Java and Python class for fun. 
                                Come around end of semester, I was planning out which languages I wanted to learn next. If there's one thing I regret, it is not coding sooner.
                            </p>
                            <p className='p' style={{margin: '1rem'}}>
                                But, that doesn't mean I wasn't busy! While completing a degree fulltime, I became a mother and lead 
                                preschool teacher. Tackling all three of these tasks simutanously taught me more than you could imagine, 
                                and ultimately made me into the problem solver I am today. 
                            </p>
                            <p className='p' style={{margin: '1rem'}}>
                                I hope to take my expereinces and knowlege, and utilize it with programming in ways to make our world a better place.
                            </p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default About