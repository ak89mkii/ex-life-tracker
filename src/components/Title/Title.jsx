import React from 'react';
import { Button, Container, Grid, Card, GridRow, } from 'semantic-ui-react'
import '../../App.css';
import fight from '../../Img/fight.png';

const Title = () => {
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
                <Button size='huge' color="black" icon='settings' />
            </div>
            <br></br>
        </div>
    )
}

export default Title