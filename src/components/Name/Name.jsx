import React, { Component, createRef } from 'react'
import { Progress, Container, Grid, Card, Button, Message } from 'semantic-ui-react'
import '../../App.css';
import ko from '../../Img/ko.png';
import Clock from '../Clock/Clock.jsx'
import Audio from '../../sounds/ko.wav'
import ReactHowler from 'react-howler'


class Name extends Component {
    state = {
    //   color: black,
    }

    handleKO = () => {
        this.setState({
            ko: this.state.ko
        })
    }

    render() {
        return (
            <Container>
                <h1>"Ryu"</h1>
            </Container>
        )
    }
}

export default Name