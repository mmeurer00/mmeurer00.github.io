import React from 'react'

class About extends React.Component {
    render(){
        return(
            <div className="one-second-animation" >
                <div className="components">
                    <p className='p' style={{fontSize: '2rem', marginTop: '5rem'}}> 
                        Hi! I'm Maxine, 
                    </p>
                        <img src={("https://i.imgur.com/AboRbcL.png")} alt='' id="profile-picture" className="about"/>
                    <p className='p' style={{marginTop: '1rem'}}> 
                        a <span style={{color: '#ee71d1'}}>software engineer</span>, who recently graduated from Flatiron School. 
                    </p>
                        <div className="three-second-animation">
                            <p className='p' style={{marginTop: '1rem'}}>
                                Coding has always sparked an interest in me, especially as an <span style={{color: '#ee71d1'}}>environmental sciences/engineering</span> major and general <span style={{color: '#ee71d1'}}>STEM nerd</span>.
                                I decided to embrace this spark, embarking on my journey as a programmer during my last semester of college, when I took a <span style={{color: '#ee71d1'}}>Java</span> and <span style={{color: '#ee71d1'}}>Python</span> class for fun. 
                                Come around end of semester, I was planning out which languages I wanted to learn next. If there's one thing I regret, it is not coding sooner.
                            </p>
                            <p className='p' style={{marginTop: '1rem'}}>
                                But, that doesn't mean I wasn't busy! While completing a degree full time, I became a <span style={{color: '#ee71d1'}}>mother</span> and lead 
                                preschool <span style={{color: '#ee71d1'}}>teacher</span>. Tackling all three of these tasks simultaneously taught me more than you could imagine, 
                                and ultimately made me into the <span style={{color: '#ee71d1'}}>problem solver</span> I am today. 
                            </p>
                            <p className='p' style={{marginTop: '1rem'}}>
                                I hope to take my experiences and knowledge, utilizing it with programming in ways to <span style={{color: '#ee71d1'}}>make our world a better place</span>.
                            </p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default About