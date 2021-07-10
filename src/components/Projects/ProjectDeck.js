import React, { Fragment } from 'react'

class ProjectDeck extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            cards: []
        }
    }     

        render(){
            return(
                <Fragment>
                    <div style={styles.view_port}>
                        <div style={styles.images_container}>
                            {this.state.cards}
                        </div>
                    </div>
                </Fragment>
            )
        }
}

const styles = {
    view_port: {
        margin: 0,
        padding: 0,
        width: '500px',
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden'
        // backgroundColor: 'red'
    },
    images_container: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    nav_buttons_container: {
        margin: 0,
        padding: 0,
        width: '100vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999
    },
    nav_button: {
        width: '50%',
        height: 'auto',
        pointerEvents: 'all',
        cursor: 'pointer'
    },
    selection_buttons_container: {
        margin: 0,
        padding: 0,
        width: 'fit-content',
        height: 'fit-content',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        zIndex: 99999,
        // backgroundColor: 'rgba(0, 0, 255, 0.4)'
    },
    selection_button: {
        marginRight: '15px',
        padding: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'grey',
        pointerEvents: 'all',
        cursor: 'pointer'
    },
}

export default ProjectDeck