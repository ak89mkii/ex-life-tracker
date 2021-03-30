import React, { Component, createRef } from 'react'
import { Progress, Container, Grid, Button, } from 'semantic-ui-react'
import '../../App.css';

class EX extends Component {
    state = {
        p1EBar: 0,
        p2EBar: 0,
    }
  
    // P1 functions.
    NewP1Bar = () => {
        this.setState({
            p1EBar: this.props.eP1
        })
    }
  
    pNewP1Bar = () => {
        this.setState({
            p1EBar: this.state.p1EBar + 1
        })
    }
  
    mNewP1Bar = () => {
          this.setState({
            p1EBar: this.state.p1EBar - 1
        })
    }
  
    // P2 functions.
    NewP2Bar = () => {
        this.setState({
            p2EBar: this.props.eP2
        })
    }
  
    pNewP2Bar = () => {
        this.setState({
            p2EBar: this.state.p2EBar + 1
        })
    }
  
    mNewP2Bar = () => {
        this.setState({
            p2EBar: this.state.p2EBar - 1
        })
    }
  
    render() {
        const {p1EBar} = this.state
        const {p2EBar} = this.state
        return (
            <Container>
                <Grid columns='equal'>
                    <Grid.Column> 
                        <h1 className="label">EX</h1>
                        <div className="barMirror">
                            <Progress 
                                value={p1EBar} 
                                total={this.props.eP1}
                                size='large' 
                                color='blue' 
                                active 
                            />
                        </div>
                        <Button.Group className="left">
                            <Button onClick={this.pNewP1Bar} color="blue">+</Button>
                            <Button.Or />
                            <Button onClick={this.mNewP1Bar} color="grey">-</Button>
                        </Button.Group>
                        <h1 className="label">{p1EBar}/{this.props.eP1}</h1>
                    </Grid.Column>

                    <Grid.Column>
                        <h1 className="labelRight">EX</h1>
                        <div className="bar">
                            <Progress 
                                value={p2EBar} 
                                total={this.props.eP2}
                                size='large' 
                                color='blue' 
                                active 
                            />
                        </div>
                        <Button.Group className="right">
                            <Button onClick={this.mNewP2Bar} color="grey">-</Button>
                            <Button.Or />
                            <Button onClick={this.pNewP2Bar} color="blue">+</Button>
                        </Button.Group>
                        <h1 className="labelRight">{p2EBar}/{this.props.eP2}</h1>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default EX