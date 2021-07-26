import React from 'react'

const Sidebar = () => {
    return (
        <div id="social-links-div">
        <a href="https://github.com/mmeurer00" rel="noopener noreferrer" target="_blank" >
      <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/github-icon.svg")} alt='Github' className="contact-icons" /> 
  </a><br></br>
  <a href="https://www.linkedin.com/in/maxinemeurer/" rel="noopener noreferrer" target="_blank" >
  <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/linkedin-icon.svg")} alt='LinkedIn' className="contact-icons" />
  </a><br></br>
  <a href="https://dev.to/mmeurer00" rel="noopener noreferrer" target="_blank" >
  <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/dev.to-icon.svg")} alt='Dev' className="contact-icons" />
  </a><br></br>
  <a href={`mailto:mameurer23@gmail.com`} >
      <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/email.svg")} alt='Email' className="contact-icons" />
      </a>
      </div>
    )
}

export default Sidebar