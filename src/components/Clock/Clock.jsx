import React, { Component } from 'react';
import { Progress, Container, Grid, Button, } from 'semantic-ui-react'
import '../../App.css';

class Clock extends Component {
    constructor() {
        super()
this.state={time:new Date()}
    }

    currentTime()
    {
        this.setState({
            time: new Date()
        })
    }
    componentWillMount()
    {
setInterval(()=>this.currentTime(),1000)
}
  
    render() {
        return (
            <div className="clock"> 
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}


export default Clock