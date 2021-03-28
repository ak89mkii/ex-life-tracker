import React, { Component, createRef } from 'react'
import { Progress, Container, Grid, Card, Button, Message, Segment } from 'semantic-ui-react'
import '../../App.css';
import ko from '../../Img/ko.png';
import Clock from '../Clock/Clock.jsx'
import Audio from '../../sounds/ko.wav'
import ReactHowler from 'react-howler'


class HP extends Component {
    state = {
      ko: true,
    }

    handleKO = () => {
        this.setState({
            ko: this.state.ko
        })
    }

    render() {
        return (
            <Container>
                {/* {this.state.ko && (<ReactHowler
                src={Audio}
                playing={true}
                />)} */}
                <div className="center">
                    <img onClick={this.handleKO} className="ko" src={ko} />
                </div>
                <Clock />
                <Grid columns='equal'>
                    <Grid.Column>
                        {/* Props from Options component. */}
                        <h1 className="label">P1: {this.props.oP1}</h1>
                        <h1 className="label">HP</h1>
                        <div className="barMirror">
                            <Progress percent={90} size='large' color='yellow' active />
                        </div>
                        <Button.Group className="left">
                            <Button color="yellow">+</Button>
                            <Button.Or />
                            <Button color="red">-</Button>
                        </Button.Group>
                        <h1 className="label">18/{this.props.hP1}</h1>
                    </Grid.Column>
                
                    <Grid.Column>
                        <h1 className="labelRight">{this.props.oP2} :P2</h1>
                        <h1 className="labelRight">HP</h1>
                        <div className="bar">
                            <Progress percent={50} size='large' color='yellow' active />
                        </div>
                        <Button.Group className="right">
                            <Button color="red">-</Button>
                            <Button.Or />
                            <Button color="yellow">+</Button>
                        </Button.Group>
                        <h1 className="labelRight">10/{this.props.hP2}</h1>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default HP