import React, { Component, createRef } from 'react'
import { Segment, Container, Form, Header, Button, TransitionablePortal } from 'semantic-ui-react'
import '../../App.css';

class Options extends Component {
    state = {
        options: false,
    }

    optionsOpen = () => this.setState((prevState) => ({ options: !prevState.options }))
    optionsClose = () => this.setState({ options: false })

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
            </Container>
        )
    }
}

export default Options