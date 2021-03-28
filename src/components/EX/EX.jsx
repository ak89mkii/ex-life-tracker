import React, { Component, createRef } from 'react'
import { Progress, Container, Grid, Button, } from 'semantic-ui-react'
import '../../App.css';

class EX extends Component {
    state = {
    }

    render () {
    return (
        <Container>
            <Grid columns='equal'>
                <Grid.Column> 
                    <h1 className="label">EX</h1>
                    <div className="barMirror">
                        <Progress percent={90} size='large' color='blue' active />
                    </div>
                    <Button.Group className="left">
                        <Button color="blue">+</Button>
                        <Button.Or />
                        <Button color="grey">-</Button>
                    </Button.Group>
                    <h1 className="label">9/{this.props.eP1}</h1>
                </Grid.Column>

                <Grid.Column>
                    <h1 className="labelRight">EX</h1>
                    <div className="bar">
                        <Progress percent={10} size='large' color='blue' active />
                    </div>
                    <Button.Group className="right">
                        <Button color="grey">-</Button>
                        <Button.Or />
                        <Button color="blue">+</Button>
                    </Button.Group>
                    <h1 className="labelRight">1/{this.props.eP2}</h1>
                </Grid.Column>
            </Grid>
        </Container>
        )
    }
}

export default EX