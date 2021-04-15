import React, { Component } from 'react';
import '../../App.css';
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
            </div>
        )
    }
}

export default Title