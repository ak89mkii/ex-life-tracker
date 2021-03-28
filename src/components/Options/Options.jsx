import React, { Component, createRef } from 'react'
import { Segment, Container, Form, Header, Button, TransitionablePortal } from 'semantic-ui-react'
import '../../App.css';
import HP from '../HP/HP.jsx'

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = { p1: '' };
        this.state = { p2: '' };
    }

    state = {
        options: false,
    }

    optionsOpen = () => this.setState((prevState) => ({ options: !prevState.options }))
    optionsClose = () => this.setState({ options: false })

    // Player 01 Data:
    optionsP1 = (event) => this.setState({ oP1: event.target.value});
    hPP1 = (event) => this.setState({ hP1: event.target.value});
    eXP1 = (event) => this.setState({ eP1: event.target.value});
    // Player 02 Data:
    optionsP2 = (event) => this.setState({ oP2: event.target.value});
    hPP2 = (event) => this.setState({ hP2: event.target.value});
    eXP2 = (event) => this.setState({ eP2: event.target.value});

    render() {
        const { options } = this.state
        return (
            <Container>
                <div className="center"> 
                    <Button 
                        size='huge' 
                        color="black" 
                        icon='settings'
                        onClick={this.optionsOpen}
                    />
                    <TransitionablePortal onClose={this.optionsClose} open={options}>
                    <Segment
                        style={{ left: '40%', position: 'fixed', top: '5%', zIndex: 1000 }}
                    >
                        <Header>Options</Header>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Player One:</label>
                                    <input 
                                        onChange={this.optionsP1} placeholder='Name of Character'
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>HP:</label>
                                    <input 
                                        onChange={this.hPP1}placeholder='HP Max Value' />
                                </Form.Field>
                                <Form.Field>
                                    <label>EX:</label>
                                    <input 
                                        onChange={this.eXP1}placeholder='EX Max Value' />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Player Two:</label>
                                    <input 
                                        onChange={this.optionsP2}
                                        placeholder='Name of Character'
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>HP:</label>
                                    <input 
                                        onChange={this.hPP2}placeholder='HP Max Value' />
                                </Form.Field>
                                <Form.Field>
                                    <label>EX:</label>
                                    <input 
                                        onChange={this.eXP2}placeholder='EX Max Value' />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Segment>
                    </TransitionablePortal>
                </div>
                <br></br>
                {/* Render HP and EX components and adding Options state with props.  */}
                <Segment>
                    <HP 
                        oP1={this.state.oP1} 
                        oP2={this.state.oP2}
                        hP1={this.state.hP1} 
                        hP2={this.state.hP2}
                    />
                    {/* <EX 
                        p1={this.state.p1} 
                        p2={this.state.p2}
                    /> */}
                </Segment>
            </Container>
        )
    }
}

export default Options