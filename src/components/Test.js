import React from 'react'
import './Test.css'

class Test extends React.Component {
    render() {
        return(
            <h1 class="block-effect" style={{ animation: "revealBlock 0s 2s forwards"}}>
            <div class="block-reveal" style={{backgroundColor: "#4040bf", revealBlock: ".1s"}}><h1>hi</h1>Block</div>
            <div class="block-reveal" style={{backgroundColor: "#bf4060", animation: "revealingIn 1.5s forwards, revealingOut 1s 1.2s forwards"}}><h1>hi</h1>Revealing Effect</div>
            </h1>
    
        )
    }
}
export default Test