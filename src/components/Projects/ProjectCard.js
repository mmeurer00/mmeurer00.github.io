import React from 'react'
// import { Link } from 'react-router-dom'

function Card(props) {

    return(
        <div style={styles.card}>
            
            <a href={props.link}>
                <button style={styles.git_button}>
                <i className="fab fa-github"></i>
                </button>
            </a>
                <button style={styles.demo_button}>
                    <i className="fas fa-photo-video"> Demo</i>
                </button>
            <img style={styles.card_img} src={props.picsum} alt="Project"/> 
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
        transform: 'translate(-50%, -50%)',
        
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