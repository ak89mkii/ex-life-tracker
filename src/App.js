import React, { Component, createRef } from 'react'
import './App.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Title from './components/Title/Title.jsx'
import Stage from './components/Stage/Stage.jsx'
import HP from './components/HP/HP.jsx';
import EX from './components/EX/EX.jsx';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div> 
        <Title />
      </div>
    )
  }
}

export default App;
