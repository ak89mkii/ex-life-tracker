import React, { Component } from 'react';
import { Button, Segment, Header, TransitionablePortal, Form, Checkbox } from 'semantic-ui-react'
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
                        style={{ left: '40%', position: 'fixed', top: '5%', zIndex: 1000 }}
                    >
                        <Header>Options</Header>
                        <Form>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Player One:</label>
                                    <input placeholder='Name of Character' />
                                </Form.Field>
                                <Form.Field>
                                    <label>HP:</label>
                                    <input placeholder='HP Max Value' />
                                </Form.Field>
                                <Form.Field>
                                    <label>EX:</label>
                                    <input placeholder='EX Max Value' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field>
                                    <label>Player Two:</label>
                                    <input placeholder='Name of Character' />
                                </Form.Field>
                                <Form.Field>
                                    <label>HP:</label>
                                    <input placeholder='HP Max Value' />
                                </Form.Field>
                                <Form.Field>
                                    <label>EX:</label>
                                    <input placeholder='EX Max Value' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Segment>
                    </TransitionablePortal>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Title