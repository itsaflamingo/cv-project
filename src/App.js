import './App.css';
import React, { Component } from 'react'
import Experience from './components/Experience';
import ExperienceDisplay from './components/Experience-display'
import Form from './components/Form'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      experience: {
          input: {
            role: '',
            company: '',
            date: '',
            description: ''
          },
          roleInput: [],
          companyInput: [],
          dateInput: [],
          //will be a list
          experienceDescription: []
      },
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
        },
        skillsArr: []
      }
    }

  }

  handleChange = (e) => {

    const target = e.target
    const value = target.value
    const name = target.name
    const section = target.dataset.section

    this.setState({
      [section]: {
        input: {
          [name]: value
        }
      }
    })
  }

  onSubmit = () => {
      const experience = () => {
          this.setState({
              experience: {
                input: {
                  role: '',
                  company: '',
                  date: '',
                  description: ''
                }
            },
            education: {
              input : {
                program: '',
                school: '',
                date: ''
              },
            },
            skills: {
              skill: {
                text: '',
              },
            }
        })
      }

      return {
          experience, 
      }
  }

  render() {
    const {experience, education, skills} = this.state;
    console.log(this.state)
    return (
      <div className="App">
        <div id='personal'>
          <div id='picture'></div>
          <div id='sectionContainer'>
            <div id='email'>
              <div className='edit'></div>
            </div>
            <div id='phone'>
              <div className='edit'></div>
            </div>
            <div id='address'>
              <div className='edit'></div>
            </div>
          </div>
          <div className='sectionContainer' id='skills'></div>
        </div>
        <div id='actions'>
          <div id='name'></div>
          <div className='sectionContainer' id='overview'>
            {/* <button className='edit'></button> */}
          </div>
          <div className='sectionContainer' id='experience'>
            <ExperienceDisplay info = {experience}/>
            {/* <button className='edit'>Edit</button> */}
            <div className='pop-up'><Form info={experience} onSubmit={this.onSubmit} handleChange={this.handleChange}/></div>
          </div>
          <div className='sectionContainer' id='education'>
            <div className='edit'></div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
