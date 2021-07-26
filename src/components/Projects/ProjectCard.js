import React from 'react'
// import { Link } from 'react-router-dom'

function Card(props) {

    return(
        <div style={styles.card}>
            <a href={props.link}>
                <img style={styles.card_img} src={props.picsum} alt="Project"/> 
            </a>
            <center>
            <a href={props.link}>
                <button className='git_button'>
                <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/github-icon.svg")} alt='Github' className="contact-icons" />
                </button>
            </a>
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            &emsp;
            <a href={props.link2}>
                <button className='demo_button'>
                <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/email.svg")} alt='Email' className="contact-icons" />
                </button>
            </a>
            </center>
        </div>
    )
}

const styles = {
    card: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    card_img: {
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'relative',
        border: '10px solid  black',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
        
    },
    // git_button: {
    //     padding: '1rem',
    //     fontSize: '2.5rem',
    //     position: 'absolute',
    //     backgroundColor: 'transparent',
    //     borderColor: 'transparent',
    //     marginTop: '14rem',
    //     // marginLeft: '10rem',
    //     zIndex: '10',
    //     top: '50%'

    // },
    // demo_button: {
    //     padding: '1rem',
    //     fontSize: '2.5rem',
    //     position: 'absolute',
    //     backgroundColor: 'transparent',
    //     borderColor: 'transparent',
    //     marginLeft: '-10rem',
    //     marginTop: '14rem',
    //     zIndex: '0',
    //     top: '50%'
    // }
}

export default React.memo(Card)