import './App.css';
import React, { Component } from 'react'
import RenderForm from './components/RenderForm'
import ExperienceForm from './components/ExperienceForm'
import EducationForm from './components/EducationForm'
import uniqid from 'uniqid'
import ListDisplay from './components/ListDisplay'
import OneInputForm from './components/OneInputForm';
import MkNewExperience from './components/mkNewExperience';
import NewEducation from './components/NewEducation';

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
            dateStart: '',
            dateEnd: '',
            description: '',
            id: uniqid()
          },
          experienceArr: [],
      },
      education: {
        input : {
          program: '',
          school: '',
          dateStart: '',
          dateEnd: '',
          id: uniqid()
        },
        educationArr: [],
      },
      skills: {
        input: {
          skill: '',
          id: uniqid()
        },
        skillsArr: []
      },
      showName: false,
      showEmail: false,
      showPhone: false,
      showAddress: false,
      showSkill: false,
      showEducation: false,
      showExperience: false,    
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

    this.setState(prevState => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        infoObj: {
          name: this.state.personal.input.name,
          email: this.state.personal.input.email,
          phone: this.state.personal.input.phone,
          address: this.state.personal.input.address
        },
        input: {
          name: '',
          email: '',
          phone: '',
          address: ''
        }
      }
    }))
  }

  onSubmitExperience = (e) => {
      e.preventDefault();

      this.setState(prevState => ({
        ...prevState,
        experience: {
          ...prevState.experience,
          experienceArr: this.state.experience.experienceArr.concat({
            role: this.state.experience.input.role,
            company: this.state.experience.input.company,
            dateStart: this.state.experience.input.dateStart,
            dateEnd: this.state.experience.input.dateEnd,
            description: this.state.experience.input.description,
            id: this.state.experience.input.id
          }),
          input: {
            ...prevState.experience.input,
            role: '',
            company: '',
            dateStart: '',
            dateEnd: '',
            description: '',
            id: uniqid()
          }
        }
      }))
  }

  onSubmitEducation = (e) => {
    e.preventDefault()

    this.setState(prevState => ({
      ...prevState,
      education: {
        ...prevState.education,
        experienceArr: this.state.education.educationArr.concat({
          program: this.state.education.input.program,
          school: this.state.education.input.school,
          dateStart: this.state.education.input.dateStart,
          dateEnd: this.state.education.input.dateEnd,
          id: this.state.education.input.id
        }),
        input: {
          ...prevState.education.input,
          program: '',
          school: '',
          dateStart: '',
          dateEnd: '',
          id: uniqid()
        }
      }
    }))
  }

  onSkillSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      skills: {
        ...prevState.skills,
        skillsArr: this.state.skills.skillsArr.concat(this.state.skills.input),
        input: {
          skill: '',
          id: uniqid()
        }
      }
    }))
  }

  render() {
    const {experience, education, skills, personal, showEmail, showPhone, showName, showAddress, showEducation, showExperience, showSkill} = this.state;

    return (
      <div className="App">
        <div className='page-container'>
          <div id='personal'>

            <div id='picture'></div>

            <div className='sectionContainer'>
              <div id='email' className='container'>
                <p>Email:</p>
                <RenderForm tag={<p>{personal.input.email}</p>}/>
                <button className='edit' onClick={() => this.setState({showEmail : !showEmail})}>
                  Edit
                  </button>
                  {showEmail && (<OneInputForm info={education.input.email} onSubmit={this.onSubmit} handleChange={this.handleChange} name='email' section='personal'/>)}
              </div>

              <div id='phone' className='container'>
                <p>Phone:</p>
                <RenderForm tag={<p>{personal.input.phone}</p>}/>
                <button className='edit' onClick={() => this.setState({showPhone : !showPhone})}>
                  Edit
                  </button>
                  {showPhone && (<OneInputForm info={personal.input.phone} handleChange={this.handleChange} name='phone' section='personal'/>)}
              </div>

              <div id='address' className='container'>
                <p>Address:</p>
                <RenderForm tag={<p>{personal.input.address}</p>}/>
                <button className='edit' onClick={() => this.setState({showAddress : !showAddress})}>Edit</button>
                {showPhone && (<OneInputForm info={personal.input.address} handleChange={this.handleChange} name='address' section='personal'/>)}
              </div>

            <div className='container' id='skills'>
              <p>Skills:</p>
              <ListDisplay skills={skills.skillsArr} />
              <button className='edit' onClick={() => this.setState({showSkill : !showSkill})}>Edit</button>
              {showSkill && (<OneInputForm info={skills.input.skill} handleChange={this.handleChange} onSubmit={this.onSkillSubmit} name='skill' section='skills'/>)}
            </div>

            </div>
          </div>

          <div id='actions'>
            
            <div id='name'>
              <RenderForm tag={<h1>{personal.input.name}</h1>}/>
              <button className='section-edit' onClick={() => this.setState({showName: !showName})}>Edit</button>
              {showName && (<OneInputForm info={personal.input.name} handleChange={this.handleChange} name='name' section='personal' onSubmit={this.onSubmit}/>)}
            </div>
            <div className='sectionContainer' id='experience'>
              <div className='heading'>
                <p>Experience</p>
                <button className='section-edit' onClick={() => this.setState({showExperience: !showExperience})}>Add</button>
                {showExperience && (<ExperienceForm info={experience} onSubmit={this.onSubmitExperience} handleChange={this.handleChange}/>)}
              </div>
              <div className='experience-display'>
                <MkNewExperience experience={experience}/>
              </div>
            </div>
            <div className='sectionContainer' id='education'>
              <div className='heading'>
                  <p>Education</p>
                  <button className='section-edit' onClick={() => this.setState({showEducation: !showEducation})}>Add</button>
                  {showEducation && (<EducationForm info={education} onSubmit={this.onSubmitEducation} handleChange={this.handleChange}/>)}
                </div>
            <div className='education-display'>
              <NewEducation education={education}/>
            </div>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default App;
