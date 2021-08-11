import * as React from 'react';
import './LogoCube.css'
import Cube from 'react-3d-cube';
 
class LogoCube extends React.Component {
  render() {
    return (
        <center>
        <div>
            {/* <h2>set children</h2> */}
            <div
                style={{
                    width: 300,
                    height: 300
                }}
            >
            <Cube size={300} index="front">
                <div>front
                    <img src="https://zhenyong.github.io/react/img/logo.svg"></img>
                </div>
                <div>right
                    <img src="https://wp.sitepen.com/wp-content/uploads/2016/04/js.png"></img>
                </div>
                <div>back
                    <img src="https://miguel-savignano.gallerycdn.vsassets.io/extensions/miguel-savignano/ruby-symbols/0.1.8/1561456903376/Microsoft.VisualStudio.Services.Icons.Default"></img>
                </div>
                <div>left
                <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/java-4-logo.png"></img>
                </div>
                <div style={{backgroundColor: "white"}}>top
                <img src=""></img>
                </div>
                <div>bottom
                <img src=""></img>
                </div>
            </Cube>
            </div>
        </div>
    </center>
    );
  }
}


export default LogoCube
