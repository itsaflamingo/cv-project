import './App.css';
import React, { Component } from 'react';
import uniqid from 'uniqid';
import ListDisplay from './components/ListDisplay';
import NewExperience from './components/NewExperience';
import NewEducation from './components/NewEducation';
import SubmitPersonal from './components/SubmitPersonal';
import PictureContainer from './components/PictureContainer';
import PersonalHeading from './components/PersonalHeading';
import PersonalInfoDiv from './components/PersonalInfoDiv';
import SkillsHeading from './components/SkillsHeading';
import ExperienceHeading from './components/ExperienceHeading';
import EducationHeading from './components/EducationHeading';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      personal: {
        input: {
          name: '',
          email: '',
          phone: '',
          address: '',
          id: uniqid()
        },
        personalArr: []
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
      picture: {
        urlInput: '',
        url: ''
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

    this.setState(prevState => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        personalArr: {
          name: this.state.personal.input.name.toUpperCase(),
          email: this.state.personal.input.email,
          phone: this.state.personal.input.phone,
          address: this.state.personal.input.address,
          id: this.state.personal.input.id 
        },
        input: {
          name: '',
          email: '',
          phone: '',
          address: '',
          id: uniqid()
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
        educationArr: this.state.education.educationArr.concat({
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

  picOnChange = (e) => {
    this.setState({
      picture: {
        urlInput: e.target.value
      }
    })
  }

  changePicture = (e) => {
    e.preventDefault()
    this.setState({
      picture: {
        url: this.state.picture.urlInput,
        urlInput: ''
      }
    })
  }

  delete = (e) => {
    const id = e.target.id;
    const target = document.getElementById(id);
    target.remove()
  }

  render() {
    const {experience, education, skills, personal, picture} = this.state;

    return (
      <div className="App">
        <div className='page-container'>
          <div id='personal'>
            <PictureContainer picture={picture} changePicture={this.changePicture} picOnChange = {this.picOnChange} />
            <div className='sectionContainer'>
              <div id='personal-div'>
                <PersonalHeading id='personal-heading' title='CONTACT INFO' buttnClass='personal-edit' info={personal} onSubmit={this.onSubmit} handleChange={this.handleChange} name='email' section='personal' />
                <PersonalInfoDiv id='email' title='EMAIL' info={personal.personalArr.email} />
                <PersonalInfoDiv id='phone' title='PHONE' info={personal.personalArr.phone} />
                <PersonalInfoDiv id='address' title='ADDRESS' info={personal.personalArr.address} />
              <div className='container' id='skills'>
                <SkillsHeading id='skill-input' title='SKILLS' buttnClass='personal-edit' info={skills.input.skill} onSubmit={this.onSkillSubmit} handleChange={this.handleChange} name='skill' section='skills' label='Add Skill '/>
                <ListDisplay skills={skills.skillsArr} onClick={this.delete} />
              </div>
            </div>
            </div>
          </div>
          <div id='actions'>
            <div id='name'>
              <SubmitPersonal tag={<h2>{personal.personalArr.name}</h2>} />
            </div>
            <div className='sectionContainer' id='experience'>
              <ExperienceHeading id='personal-heading' title='EXPERIENCE' buttnClass='section-edit' info={experience} onSubmit={this.onSubmitExperience} handleChange={this.handleChange} />
              <div className='experience-display'>
                <NewExperience experience={experience} onClick={this.delete} />
              </div>
            </div>
            <div className='sectionContainer' id='education'>
              <EducationHeading id='personal-heading' title='EDUCATION' buttnClass='section-edit' info={education} onSubmit={this.onSubmitEducation} handleChange={this.handleChange} />
            <div className='education-display'>
              <NewEducation education={education} onClick={this.delete} />
            </div>
            </div>
          </div>
          </div>
      </div>
    )
  }
}

export default App;
