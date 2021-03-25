import React, { Component, createRef } from 'react'
import { Progress, Container, Grid, Card, Button, Message } from 'semantic-ui-react'
import '../../App.css';
import ko from '../../Img/ko.png';
import Clock from '../Clock/Clock.jsx'

const HP = () => {
    return (
        <Container>
            <div className="center">
                 <img className="ko" src={ko} />
            </div>
            <Clock />
            <Grid columns='equal'>
                <Grid.Column> 
                    <h1 className="label">HP</h1>
                    <div className="barMirror">
                        <Progress percent={90} size='large' color='yellow' active />
                    </div>
                    <Button.Group className="left">
                        <Button color="yellow">+</Button>
                        <Button.Or />
                        <Button color="red">-</Button>
                    </Button.Group>
                    <h1 className="label">18/20</h1>
                    <h1 className="label">Ryu</h1>
                </Grid.Column>
               
                <Grid.Column>
                    <h1 className="labelRight">HP</h1>
                    <div className="bar">
                        <Progress percent={50} size='large' color='yellow' active />
                    </div>
                    <Button.Group className="right">
                        <Button color="red">-</Button>
                        <Button.Or />
                        <Button color="yellow">+</Button>
                    </Button.Group>
                    <h1 className="labelRight">10/20</h1>
                    <h1 className="labelRight">Guile</h1>
                </Grid.Column>
            </Grid>
        </Container>
        )
    }

export default HP