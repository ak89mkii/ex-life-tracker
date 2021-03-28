import React, { Component } from 'react';
import { Button, Segment, Header, TransitionablePortal, Form, Checkbox } from 'semantic-ui-react'
import '../../App.css';
import Options from '../Options/Options.jsx';
import fight from '../../Img/fight.png';

class Title extends Component {
    state = {
    }

    optionsOpen = () => this.setState((prevState) => ({ options: !prevState.options }))
    optionsClose = () => this.setState({ options: false })

    render() {
    
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
                <Options />
            </div>
        )
    }
}

export default Title