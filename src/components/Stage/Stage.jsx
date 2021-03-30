import React, { Component, createRef } from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react';

class Stage extends Component {
    state = {
        value: "https://www.youtube.com/embed/3BqCWBbkvy8"
    }

    

    handleChange = (e, { value }) => this.setState({ value })


    render()  {
        const { value } = this.state
        return (
            <Container>
                <div>
                    <br></br>
                    <br></br>
                    {/* <img 
                        src={"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/05/26/8e9df911-f4d9-48c0-81cf-a7f1a3a01b9a/ultra-street-fighter-2-nintendo-switch"} className="center"
                    /> */}
                    <div className="center">
                        <iframe className="player" src={value} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br></br>
                        <Form>
                            <Input 
                                label='Add Embed Address:' 
                                placeholder='Add Here'  
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </Form>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </Container>
        )
    }
}

export default Stage