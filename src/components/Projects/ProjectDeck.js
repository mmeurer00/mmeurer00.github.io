import React, { Fragment } from 'react'
import Card from './ProjectCard'
class ProjectDeck extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            cards: [
                <Card picsum={`https://i.imgur.com/gHNQKS1.png`} id="one" key="one" link="https://github.com/mmeurer00/parent_path" link2="https://www.hippovideo.io/video/play/-xaF7RpN8V-aiJXh8bihQVnhlRXd2cvX9L0nK1iw8YI?org_tok=BO39AqIGKQbuFWi7YkQDKQ"/>,
                <Card picsum={`https://i.imgur.com/yKPl6vy.png`} id="two" key="two" link="https://github.com/mmeurer00/Viberate_positivity_sinatra_app" link2="https://www.hippovideo.io/video/play/BUxHzNLM9H3S1m5vAPuVV4Ao6nkzFWlXq5h6wZ9cojM?org_tok=BO39AqIGKQbuFWi7YkQDKQ&utm_source=hv-campaigns&hreferer=private&hvre=false&_=1626063336211&"/>,
                <Card picsum={`https://i.imgur.com/ZYdCqsf.png`} id="three" key="three" link="https://github.com/mmeurer00/growfundgreen-frontend" link2="https://www.hippovideo.io/video/play/ANkWiuu9XrkDePQ-7g0KlN6CtxGKvbMGWypSFsVhctg?org_tok=BO39AqIGKQbuFWi7YkQDKQ"/>,
                <Card picsum={`https://i.imgur.com/cZAcg6d.png`} id="four" key="four" link="https://github.com/mmeurer00/automaid" link2="https://www.hippovideo.io/video/play/Uxz9u0C7VC9O3MTSuxdG5TpjLIa_Hnr8R9zAyN0P48A?org_tok=BO39AqIGKQbuFWi7YkQDKQ"/>
            ]
        }
    }   
    
    componentDidMount() {
        this.number_of_cards_by_index = this.images.children.length - 1;
        this.middle_card_by_index = Math.floor(this.number_of_cards_by_index / 2);
        this.current_card = this.middle_card_by_index;

        /* ********** RESPONSIVE CODE ******** */
        let img_width_as_percentage = 50;
        // img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;
        let nav_buttons_placement_as_percentage = 60;
        // nav_buttons_placement_as_percentage = window.innerWidth < 768 ? 100 : nav_buttons_placement_as_percentage;


        this.new_width =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                (img_width_as_percentage / 100) * window.screen.width :
                (img_width_as_percentage / 100) * window.innerWidth;

        this.view_port.style.width = `${this.new_width}px`;
        this.nav_buttons_container.style.width = `${nav_buttons_placement_as_percentage}vw`;
        // this.button_prev.style.width = `${(this.new_width / 2) * 0.30}px`; // ADD IN SIDE NAV BUTTONS
        // this.button_next.style.width = `${(this.new_width / 2) * 0.30}px`;

        this.selection_buttons_container.style.bottom = `${this.view_port.getBoundingClientRect().top}px`;
        for (let i = 0; i < this.images.children.length; i++) {
            this.selection_buttons_container.children[i].transitionDuration = '0.0s';
            this.selection_buttons_container.children[i].style.width = `${this.new_width * 0.02}px`;
            this.selection_buttons_container.children[i].style.height = `${this.new_width * 0.02}px`;
        }

        this.order_cards();
        this.update_selection();

        window.addEventListener('resize', () => {
            img_width_as_percentage = 50;
            // img_width_as_percentage = window.innerWidth < 768 ? 100 : img_width_as_percentage;
            nav_buttons_placement_as_percentage = 60;
            // nav_buttons_placement_as_percentage = window.innerWidth < 768 ? 100 : nav_buttons_placement_as_percentage;

            this.new_width =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ?
                    (img_width_as_percentage / 100) * window.screen.width :
                    (img_width_as_percentage / 100) * window.innerWidth;

            this.view_port.style.width = `${this.new_width}px`;
            this.nav_buttons_container.style.width = `${nav_buttons_placement_as_percentage}vw`;
            // this.button_prev.style.width = `${(this.new_width / 2) * 0.30}px`;
            // this.button_next.style.width = `${(this.new_width / 2) * 0.30}px`;

            this.selection_buttons_container.style.bottom = `${this.view_port.getBoundingClientRect().top}px`;
            for (let i = 0; i < this.images.children.length; i++) {
                this.selection_buttons_container.children[i].transitionDuration = '0.0s';
                this.selection_buttons_container.children[i].style.width = `${this.new_width * 0.03}px`;
                this.selection_buttons_container.children[i].style.height = `${this.new_width * 0.03}px`;
            }

            this.order_cards();

            this.right_boundary = parseFloat(this.images.children[this.number_of_cards_by_index].style.left) + this.new_width;
            this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

            for (let i = 0; i < this.images.children.length; i++) {
                this.last_positions[i] = parseFloat(this.images.children[i].style.left);
            }
        });
        /* *********************************** */

        this.last_positions = [];
        this.right_boundary = parseFloat(this.images.children[this.number_of_cards_by_index].style.left) + this.new_width;
        this.left_boundary = parseFloat(this.images.children[0].style.left) - this.new_width;

        for (let i = 0; i < this.images.children.length; i++) {
            this.last_positions.push(parseFloat(this.images.children[i].style.left));
        }

        /* ******** BUTTON NAVIGATION ******** */
        this.scroll_in_progress = false;
        /* *********************************** */

        /* *********** AUTOPLAY CODE ********* */
        this.autoplay_timeout_id = null;
        this.autoplay_interval_id = null;
        /* *********************************** */


        /* ************ INIT CODE ************ */
        this.selection_buttons_container.children[0].click();
        /* *********************************** */
    }

    update_selection = () => {
        for (let i = 0; i < this.images.children.length; i++) {
            if (i === this.current_card) {
                this.selection_buttons_container.children[i].style.backgroundColor = '#ee71d1';
                // this.selection_buttons_container.children[i].style.boxShadow = '0 0 10px 5px white';
            } else {
                this.selection_buttons_container.children[i].style.backgroundColor = 'grey';
                // this.selection_buttons_container.children[i].style.boxShadow = '0 0 10px 5px black';
            }
        }
    }

    order_cards = () => {
      
        let counter_for_right = 1,
            counter_for_left = this.middle_card_by_index;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';

            if (i < this.middle_card_by_index) {
                this.images.children[i].style.left = `-${(counter_for_left * this.new_width) - (this.new_width / 2)}px`;
                counter_for_left--;
            } else if (i > this.middle_card_by_index) {
                this.images.children[i].style.left = `${(counter_for_right * this.new_width) + (this.new_width / 2)}px`;
                counter_for_right++;
            } else {
                this.images.children[i].style.left = `${this.new_width / 2}px`;
            }
        }
    }

    handle_boundaries = () => {
        if (Math.round(this.last_positions[0]) <= Math.round(this.left_boundary)) {
            const end_of_deck = this.last_positions[this.number_of_cards_by_index] + this.new_width;

            this.images.children[0].style.left = `${end_of_deck}px`;
            this.last_positions[0] = end_of_deck;

            this.images.appendChild(this.images.children[0], this.images.children[this.number_of_cards_by_index]);
            this.last_positions.splice(this.number_of_cards_by_index, 0, this.last_positions.shift());
        }
        if (Math.round(this.last_positions[this.number_of_cards_by_index]) >= Math.round(this.right_boundary)) {
            const beginning_of_deck = this.last_positions[0] - this.new_width;

            this.images.children[this.number_of_cards_by_index].style.left = `${beginning_of_deck}px`;
            this.last_positions[this.number_of_cards_by_index] = beginning_of_deck;

            this.images.insertBefore(this.images.children[this.number_of_cards_by_index], this.images.children[0]);
            this.last_positions.splice(0, 0, this.last_positions.pop());
        }
    }

    /* ******** BUTTON NAVIGATION ******** */
    handle_next = () => {
        if (this.scroll_in_progress) return;

        this.scroll_in_progress = true;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';

            const updated_position = this.last_positions[i] - this.new_width;

            this.images.children[i].style.left = `${updated_position}px`;
            this.last_positions[i] = updated_position;
        }

        this.current_card = (this.current_card === this.number_of_cards_by_index) ? 0 : ++this.current_card;

        this.handle_boundaries();
        this.update_selection();

        setTimeout(() => {
            this.scroll_in_progress = false;
            this.start_autoplay();
        }, 200);
    }

    handle_prev = () => {
        if (this.scroll_in_progress) return;

        this.scroll_in_progress = true;

        for (let i = 0; i < this.images.children.length; i++) {
            this.images.children[i].style.transitionDuration = '0.0s';

            const updated_position = this.last_positions[i] + this.new_width;

            this.images.children[i].style.left = `${updated_position}px`;
            this.last_positions[i] = updated_position;
        }

        this.current_card = (this.current_card === 0) ? this.number_of_cards_by_index : --this.current_card;

        this.handle_boundaries();
        this.update_selection();

        setTimeout(() => {
            this.scroll_in_progress = false;
            this.start_autoplay();
        }, 200);
    }
    /* *********************************** */

    /* ******** SELECTION NAVIGATION ***** */
    handle_selection = event => {
        if (event.target === this.selection_buttons_container) return;

        let new_card = null;

        for (let i = 0; i < this.images.children.length; i++) {
            if (event.target === this.selection_buttons_container.children[i]) new_card = i;
        }

        for (let i = 0; i < this.images.children.length; i++) {
            const updated_position = this.last_positions[i] + ((this.current_card - new_card) * this.new_width);

            this.images.children[i].style.transitionDuration = '0.0s';
            this.images.children[i].style.left = `${updated_position}px`;
            this.last_positions[i] = updated_position;
        }

        for (let i = 0; i < Math.abs(this.current_card - new_card); i++) {
            this.handle_boundaries();
        }

        this.current_card = new_card;

        this.update_selection();
        this.start_autoplay();
    }
    /* *********************************** */

    /* *********** AUTOPLAY CODE ********* */
    start_autoplay = () => {
        clearTimeout(this.autoplay_timeout_id);
        clearInterval(this.autoplay_interval_id);

        this.autoplay_timeout_id = setTimeout(() => {
            this.autoplay_interval_id = setInterval(() => {
                for (let i = 0; i < this.images.children.length; i++) {
                    this.images.children[i].style.transitionDuration = '0.0s';

                    const updated_position = this.last_positions[i] - this.new_width;

                    this.images.children[i].style.left = `${updated_position}px`;
                    this.last_positions[i] = updated_position;
                }

                this.current_card = (this.current_card === this.number_of_cards_by_index) ? 0 : ++this.current_card;

                this.handle_boundaries();
                this.update_selection();
            }, 1800); // TIMEOUT FOR CARD ROTATION
        }, 1200);
    }
    /* *********************************** */

    render() {
        return (
            <Fragment>
                <div ref={ref_id => this.nav_buttons_container = ref_id} style={styles.nav_buttons_container}>
                    {/* <img onClick={this.handle_prev} ref={ref_id => this.button_prev = ref_id} style={styles.nav_button} src="https://github.com/an-object-is-a/reactjs-autoplay-slideshow/blob/main/public/left-chevron.png?raw=true" alt="prev" id="prev" /> // ADD IN SIDE NAV BUTTONS
                    <img onClick={this.handle_next} ref={ref_id => this.button_next = ref_id} style={styles.nav_button} src="https://raw.githubusercontent.com/an-object-is-a/reactjs-autoplay-slideshow/main/public/right-chevron.png" alt="next" id="next" /> */}
                </div>
                <div ref={ref_id => this.view_port = ref_id} style={styles.view_port}>
                    <div ref={ref_id => this.images = ref_id} style={styles.images_container}>
                        {this.state.cards}
                    </div>
                </div>
                <div onClick={this.handle_selection} ref={ref_id => this.selection_buttons_container = ref_id} style={styles.selection_buttons_container}>
                    {
                        this.state.cards.map((_, i) => {
                            return (<div style={styles.selection_button} key={i}></div>)
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

const styles = {
    view_port: {
        marginTop: '3rem',
        padding: 0,
        width: '800px',
        height: '600px',
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
        width: '40vw',
        height: '40vw',
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
        width: '20%',
        height: 'auto',
        pointerEvents: 'all',
        cursor: 'pointer',
        margin: '-10rem'
    },
    selection_buttons_container: {
        marginBottom: '-7rem',
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
        marginTop: '3rem',
        margin: '2rem',
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