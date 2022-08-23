import './App.css';
import React, { Component } from 'react'
import Experience from './components/Experience';

class App extends Component {

  constructor() {
    super()

    this.state = {
      education: {
        input : {
          program: '',
          school: '',
          date: ''
        },
        educationArr: []
      },
      skills: {
        skill: {
          text: '',
        }
      },
      skillsArr: []
    }
  }

  render() {
    return (
      <div className="App">
        <Experience />
      </div>
    )
  };
}

export default App;
