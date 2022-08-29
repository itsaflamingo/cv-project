import './App.css';
import React, { Component } from 'react'
import Experience from './components/Experience';
import RenderForm from './components/RenderForm'
import ExperienceForm from './components/ExperienceForm'
import EducationForm from './components/EducationForm'
import Input from './components/Input'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      personal: {
        input: {
          name: '',
          email: '',
          phone: '',
          address: ''
        },
        infoObj: {
          name: '',
          email: '',
          phone: '',
          address: ''
      }
      },
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
        input: {
          skill: '',
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

    this.setState(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        input: {
          ...prevState[section].input,
          [name]: value
        }
      }
    }))
  }

  onSubmit = (e) => {
      e.preventDefault();
  }

  render() {
    const {experience, education, skills} = this.state;
    return (
      <div className="App">
        <div id='personal'>
          <div id='picture'></div>
          <div id='sectionContainer'>
            <div id='email'>
              <RenderForm tag={<p>{this.state.personal.input.email}</p>}/>
              <Input info={this.state.personal.input.email} handleChange={this.handleChange} name='email' section='personal'/>
              <div className='edit'></div>
            </div>
            <div id='phone'>
              <RenderForm tag={<p>{this.state.personal.input.phone}</p>}/>
              <Input info={this.state.personal.input.phone} handleChange={this.handleChange} name='phone' section='personal'/>
              <div className='edit'></div>
            </div>
            <div id='address'>
              <RenderForm tag={<p>{this.state.personal.input.address}</p>}/>
              <Input info={this.state.personal.input.address} handleChange={this.handleChange} name='address' section='personal'/>
              <div className='edit'></div>
            </div>
          </div>
          <div className='sectionContainer' id='skills'>
            <RenderForm tag={<p>{this.state.skills.input.skill}</p>}/>
            <Input info={this.state.skills.input.skill} handleChange={this.handleChange} name='skill' section='skills'/>
          </div>
        </div>
        <div id='actions'>
          <RenderForm tag={<h1>{this.state.personal.input.name}</h1>}/>
          <div id='name'>
            <Input info={this.state.personal.input.name} handleChange={this.handleChange} name='name' section='personal'/>
          </div>
          <div className='sectionContainer' id='overview'>
            {/* <button className='edit'></button> */}
          </div>
          <div className='sectionContainer' id='experience'>
            <RenderForm tag={<h2>{this.state.experience.input.role}</h2>}/>
            <RenderForm tag={<h3>{this.state.experience.input.company}</h3>}/>
            <RenderForm tag={<p>{this.state.experience.input.date}</p>}/>
            <RenderForm tag={<p>{this.state.experience.input.description}</p>}/>
            {/* <button className='edit'>Edit</button> */}
            <div className='pop-up'><ExperienceForm info={experience} onSubmit={this.onSubmit} handleChange={this.handleChange}/></div>
          </div>
          <div className='sectionContainer' id='education'>
            <RenderForm tag={<h2>{this.state.education.input.program}</h2>}/>
            <RenderForm tag={<h3>{this.state.education.input.school}</h3>}/>
            <RenderForm tag={<p>{this.state.education.input.date}</p>}/>
            <div className='pop-up'><EducationForm info={education} onSubmit={this.onSubmit} handleChange={this.handleChange}/></div>
            <div className='edit'></div>
          </div>
        </div>
      </div>
    )
  };
}

export default App;
