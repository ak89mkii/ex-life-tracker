import React, { Component, createRef } from 'react'
import { Jumbotron, Card, Button } from 'react-bootstrap';
import '../../App.css';
import EX from '../EX/EX';
import HP from '../HP/HP.jsx';
import Clock from '../Clock/Clock.jsx';

const Stage = () => {
    return (
        <Card>
            <Jumbotron>
                <HP />
                <br></br>
                <br></br>
                {/* <img 
                    src={"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/05/26/8e9df911-f4d9-48c0-81cf-a7f1a3a01b9a/ultra-street-fighter-2-nintendo-switch"} className="center"
                /> */}
                <br></br>
                <br></br>
                <EX />
            </Jumbotron>
        </Card>
    )
}

export default Stage