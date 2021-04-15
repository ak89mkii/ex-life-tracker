import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Title from './components/Title/Title.jsx'
import Options from './components/Options/Options.jsx'

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div> 
        <Title />
        <Options />
      </div>
    )
  }
}

export default App;
