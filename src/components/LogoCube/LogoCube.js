import * as React from 'react';
import './LogoCube.css'
import Cube from 'react-3d-cube';
 
class LogoCube extends React.Component {
  render() {
    return (
        <div>
            <div
                style={{
                    width: 300,
                    height: 300
                }}
            >
            <Cube size={300} index="front">
                <div style={{backgroundColor: '#222'}}>
                    <img style={{width: '280px', height: '300px'}} src="https://zhenyong.github.io/react/img/logo.svg"></img>
                </div>
                <div style={{backgroundColor: '#f7df32'}}>
                    <img style={{width: '280px', height: '300px'}} src="https://wp.sitepen.com/wp-content/uploads/2016/04/js.png"></img>
                </div>
                <div style={{backgroundColor: 'purple'}}>
                    <img style={{width: '280px', height: '300px'}} src="https://miguel-savignano.gallerycdn.vsassets.io/extensions/miguel-savignano/ruby-symbols/0.1.8/1561456903376/Microsoft.VisualStudio.Services.Icons.Default"></img>
                </div>
                <div style={{backgroundColor: 'orange'}}>
                <img style={{width: '280px', height: '300px'}} src="https://storage.needpix.com/rsynced_images/logo-2582747_1280.png"></img>
                </div>
                <div style={{backgroundColor: '#96cd11'}}>
                <img style={{width: '280px', height: '300px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png"></img>
                </div>
                <div style={{backgroundColor: 'blue'}}>
                <img style={{width: '280px', height: '300px'}} src="https://www.logolynx.com/images/logolynx/18/18a311c9932a4327ded4436577bda857.png"></img>
                </div>
            </Cube>
            </div>
        </div>
    );
  }
}


export default LogoCube
