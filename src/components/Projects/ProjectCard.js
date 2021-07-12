import React from 'react'
// import { Link } from 'react-router-dom'

function Card(props) {

    return(
        <div style={styles.card}>
            
            <a href={props.link}>
                <button style={styles.git_button}>
                <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/github-icon.svg")} alt='Github' className="contact-icons" />
                </button>
            </a>
            <a href={props.link2}>
                <button style={styles.demo_button}>
                <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/email.svg")} alt='Email' className="contact-icons" />
                </button>
            </a>
            <a href={props.link}>
                <img style={styles.card_img} src={props.picsum} alt="Project"/> 
            </a>
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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
        
    },
    git_button: {
        fontSize: '2.5rem',
        position: 'absolute',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        margin: '14rem',
        marginLeft: '20rem',
        zIndex: '10',
        top: '50%'

    },
    demo_button: {
        fontSize: '2.5rem',
        position: 'absolute',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        marginLeft: '25rem',
        marginTop: '14rem',
        zIndex: '10',
        top: '50%'
    }
}

export default React.memo(Card)