import React, { Component } from 'react';
import { Button, Segment, Header, TransitionablePortal, GridRow, } from 'semantic-ui-react'
import '../../App.css';
import fight from '../../Img/fight.png';

class Title extends Component {
    state = {
        options: false,
    }

    optionsOpen = () => this.setState((prevState) => ({ options: !prevState.options }))
    optionsClose = () => this.setState({ options: false })

    render() {
        const { options } = this.state
        return (
            <div>
                <div className="title">
                    <h1 className="title">EX-LIFE TRACKER</h1>
                    <img
                        alt=""
                        src={fight}
                        width="200"
                        height="200"
                        className="d-inline-block align-center"
                    />
                </div>
                <div className="center"> 
                    <Button 
                        size='huge' 
                        color="black" 
                        icon='settings'
                        onClick={this.optionsOpen}
                    />
                    <TransitionablePortal onClose={this.optionsClose} open={options}>
                    <Segment
                        style={{ left: '50%', position: 'fixed', top: '10%', zIndex: 1000 }}
                    >
                        <Header>Technology List:</Header>
                        <p>Row 01: HTML5, CSS3, JavaScript, Python 3</p>
                        <p>Row 02: React.js, Node.js, Express.js, Django, MongoDB, PostreSQL</p>
                        <p>Row 03: Materialize, Bootstrap, Semantic UI React, GitHub, Heroku, Coffee (the drink)</p>
                    </Segment>
                    </TransitionablePortal>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Title