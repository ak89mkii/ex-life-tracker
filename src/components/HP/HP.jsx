import React, { Component, createRef } from 'react'
import { Progress, Container, Grid, Button } from 'semantic-ui-react'
import '../../App.css';
import ko from '../../Img/ko.png';
import Clock from '../Clock/Clock.jsx'
import Audio from '../../sounds/ko.wav'
import Heal from '../../sounds/heal.wav'
import Damage from '../../sounds/damage.mp3'
import SetButton from '../../sounds/set.wav'
import ReactHowler from 'react-howler'


class HP extends Component {
    state = {
      ko: false,
      heal: false,
      damage: false,
      set: false,
      p1Bar: this.props.hP1,
      p2Bar: this.props.hP2,
    }

    handleKO = () => {
        this.setState({
            ko: true,
            heal: false,
            damage: false
        })
    }

    // P1 functions.
    NewP1Bar = () => {
        this.setState({
            p1Bar: this.props.hP1,
            ko: false,
            heal: false,
            set: true,
            damage: false
        })
    }

    pNewP1Bar = () => {
        this.setState({
            p1Bar: this.state.p1Bar + 1,
            ko: false,
            heal: true,
            set: false,
            damage: false
        })
    }

    mNewP1Bar = () => {
        this.setState({
            p1Bar: this.state.p1Bar - 1,
            ko: false,
            heal: false,
            set: false,
            damage: true
        })
    }

    // P2 functions.
    NewP2Bar = () => {
        this.setState({
            p2Bar: this.props.hP2,
            ko: false,
            heal: false,
            set: true,
            damage: false
        })
    }

    pNewP2Bar = () => {
        this.setState({
            p2Bar: this.state.p2Bar + 1,
            ko: false,
            heal: true,
            set: false,
            damage: false
        })
    }

    mNewP2Bar = () => {
        this.setState({
            p2Bar: this.state.p2Bar - 1,
            ko: false,
            heal: false,
            set: false,
            damage: true
        })
    }

    soundOff = () => {
        this.setState({
            ko: false,
            heal: false,
            damage: false,
            set: false,
        })
    }

    render() {
        const {p1Bar} = this.state
        const {p2Bar} = this.state
        return (
            <Container>
                {this.state.ko && (<ReactHowler
                src={Audio}
                playing={true}
                onEnd={this.soundOff}
                />)}
                {this.state.heal && (<ReactHowler
                src={Heal}
                playing={true}
                onEnd={this.soundOff}
                />)}
                {this.state.damage && (<ReactHowler
                src={Damage}
                playing={true}
                onEnd={this.soundOff}
                />)}
                {this.state.set && (<ReactHowler
                src={SetButton}
                playing={true}
                onEnd={this.soundOff}
                />)}
                <br></br>
                <div className="center">
                    <img onClick={this.handleKO} className="ko" src={ko} />
                </div>
                <Clock />
                <br></br>
                <Grid columns='equal'>
                    <Grid.Column>
                        {/* Props from Options component. */}
                        <h1 className="label">P1: {this.props.oP1}</h1>
                        <h1 className="label">HP</h1>
                        <div className="barMirror">
                            <Progress 
                                value={p1Bar} 
                                total={this.props.hP1}
                                size='large' 
                                color='yellow' 
                                active 
                            />
                        </div>
                        <Button.Group className="left">
                            <Button onClick={this.NewP1Bar} basic color="black">Set</Button>
                            <Button.Or />
                            <Button onClick={this.pNewP1Bar} color="yellow">+</Button>
                            <Button.Or />
                            <Button onClick={this.mNewP1Bar} color="red">-</Button>
                        </Button.Group>
                        <h1 className="label">{p1Bar}/{this.props.hP1}</h1>
                    </Grid.Column>
                
                    <Grid.Column>
                        <h1 className="labelRight">{this.props.oP2} :P2</h1>
                        <h1 className="labelRight">HP</h1>
                        <div className="bar">
                            <Progress 
                                value={p2Bar} 
                                total={this.props.hP2} 
                                size='large' 
                                color='yellow' 
                                active 
                            />
                        </div>
                        <Button.Group className="right">
                            <Button onClick={this.mNewP2Bar} color="red">-</Button>
                            <Button.Or />
                            <Button onClick={this.pNewP2Bar} color="yellow">+</Button>
                            <Button.Or />
                            <Button onClick={this.NewP2Bar} basic color="black">Set</Button>
                        </Button.Group>
                        <h1 className="labelRight">{p2Bar}/{this.props.hP2}</h1>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default HP