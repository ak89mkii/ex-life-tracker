import React, { Component, createRef } from 'react'
import { Segment, Container, Form, Header, Button, TransitionablePortal } from 'semantic-ui-react'
import '../../App.css';
import HP from '../HP/HP.jsx'
import EX from '../EX/EX.jsx'
import Stage from '../Stage/Stage.jsx'

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = { p1: '' };
        this.state = { p2: '' };
        this.state = {options: false}

    }

    // state = {
    //     options: !false,
    // }

    optionsOpen = () => this.setState({ options: true })
    optionsClose = () => this.setState({ options: false })

    // Player 01 Data:
    optionsP1 = (event) => this.setState({ oP1: event.target.value})
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
                    <TransitionablePortal closeOnTriggerClick
                        onOpen={this.optionsOpen}
                        onClose={this.optionsClose}
                        openOnTriggerClick
                        trigger={
                            <Button
                            content={options ? 'Close Options' : 'Open Options'}
                            secondary={options}
                            secondary={!options}
                            />
                        }
                    >     
                    <Segment
                        style={{ left: '40%', position: 'fixed', top: '5%', zIndex: 1000 }}
                    >
                        <Header>- Options -</Header>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Player One:</label>
                                    <input 
                                        onChange={this.optionsP1} 
                                        placeholder='Name of Character'
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>HP:</label>
                                    <input 
                                        onChange={this.hPP1}
                                        placeholder='HP Max Value' 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>EX:</label>
                                    <input 
                                        onChange={this.eXP1}
                                        placeholder='EX Max Value' 
                                    />
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
                                        onChange={this.hPP2}
                                        placeholder='HP Max Value' 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>EX:</label>
                                    <input 
                                        onChange={this.eXP2}
                                        placeholder='EX Max Value' 
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                        <Header>- Instructions -</Header>
                        <h4>HP:</h4>
                        <p>Press "Set" after adding values in options.</p>
                        <h4>EX:</h4>
                        <p>Press "EX" to reset meter.</p>
                        <h4>+ / - Buttons:</h4>
                        <p>Increments / decrements meter and counter by 1.</p>
                        <h4>Embed Field:</h4>
                        <p>On YouTube, click on 'SHARE", then Embed. After the "src", copy the URL within the quotation marks and paste it in the "Embed" field.</p>
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
                    <Stage />
                    <EX 
                        eP1={this.state.eP1} 
                        eP2={this.state.eP2}
                    />
                </Segment>
                <p>Ponder Mint Code, Ponder Enterprises © 2021 / Icon Credits: Andrew Doane, Jonathan Coutiño, MX</p>
            </Container>
        )
    }
}

export default Options