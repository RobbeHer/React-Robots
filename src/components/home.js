import React, {Component} from 'react';

class Home extends Component {
    constructor(props) {
        super()
        
        this.state = { 
            number: 0, 
            logo: "./images/logo0.jpg",
            animate: true
         };

        this.onTimerTick = this.onTimerTick.bind(this);
        this.onChangePlayingAnimationHandler = this.onChangePlayingAnimationHandler.bind(this);
    }

    onChangePlayingAnimationHandler() {
        if (this.state.animate) {
            this.setState({animate: false});
        } else {
            this.setState({animate: true});
        }
    }

    onTimerTick() {
        if (this.state.animate) {
            let number = (++this.state.number) % 8;
            let logo = "./images/logo" + number + ".jpg";
            this.setState({
                number,
                logo
            });
        }
    }
    
    componentDidMount() {
        setInterval(this.onTimerTick, 200);
    }

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Robots</h1>
                <br />
                <form className="form">
                    <p>Robots are machines that can substitute for humans and replicate human actions and are used to do jobs that are difficult, impossible, or just tedious for humans to do. Robots can be used in many situations and for lots of purposes, but today many are used in dangerous environments (including bomb detection and deactivation), manufacturing processes, or where humans cannot survive (e.g. in space, under water, in high heat, and for clean up and containment of hazardous materials and radiation).</p>
                    <p>Robots can take on any form but some are made to resemble humans in appearance. This is said to help in the acceptance of a robot in certain replicative behaviors usually performed by people. Such robots attempt to replicate walking, lifting, speech, cognition, or any other human activity.</p>
                    <p>Many of today's robots are inspired by nature, contributing to the field of bio-inspired robotics.</p>
                    <img className="home_animation" src={this.state.logo} height={175} alt="logo" onClick={this.onChangePlayingAnimationHandler}/>
                </form>
            </div>
        );
    }
}

export default Home;