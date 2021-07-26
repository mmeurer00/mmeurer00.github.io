import React from 'react'

function Card(props) {

    return(
        <div style={styles.card}>
            <a href={props.link}>
                <img style={styles.card_img} src={props.picsum} alt="Project"/> 
            </a>
            <a href={props.link}>
                <button className='git_button'>
                <img src={("https://raw.githubusercontent.com/iona-b/iona-b.github.io/cb12063880c43ccb7aec720b4df6e712c0c3498f/src/media/github-icon.svg")} alt='Github' className="contact-icons1" />
                </button>
            </a>
            
            <a href={props.link2}>
                <button className='demo_button'>
                <img src={("https://image.flaticon.com/icons/png/512/49/49237.png")} alt='Demo' className="contact-icons1"/>
                </button>
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
        border: '10px solid  black',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
        
    }
}

export default React.memo(Card)