import React from 'react';

function Contact() {

  return (
    <center>
        <div className="components one-second-animation">
            <h2 className="h2" >Let's get in touch.</h2>
            <p className="p" style={{margin: '1rem'}}>I'm currently looking for opportunities in the <span style={{color: '#ee71d1'}}>New York City</span> Area, so please reach out if you are looking for an <span style={{color: '#ee71d1'}}>innovative</span> and <span style={{color: '#ee71d1'}}>driven</span> developer! </p><br></br>
            <div id="contact-div">
            <a href="https://github.com/mmeurer00" rel="noopener noreferrer" target="_blank" >
            <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/github-icon.svg")} alt='Github' className="contact-icons" />
            </a>
            <a href="https://www.linkedin.com/in/maxinemeurer/" rel="noopener noreferrer" target="_blank" >
            <img id="contact" src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/linkedin-icon.svg")} alt='LinkedIn' className="contact-icons" />
            </a>
            <a href="https://dev.to/mmeurer00" rel="noopener noreferrer" target="_blank" >
            <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/dev.to-icon.svg")} alt='Dev' className="contact-icons" />
            </a>
            <a href={`mailto:maxinemeurer@yahoo.com`} >
            <img src={("https://github.com/iona-b/iona-b.github.io/blob/iona/src/media/send.png?raw=true")} alt='Email' className="contact-icons" />
            </a>
        </div>
        </div>
    </center>
    
  );
  
}

export default Contact;