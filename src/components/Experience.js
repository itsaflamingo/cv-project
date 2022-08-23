import React, { Component } from 'react'

class Experience extends Component {
    constructor() {
        super()

        this.state = {
            experience: {
                input: {
                  role: '',
                  company: '',
                  date: '',
                  description: ''
                },
                experienceArr: [],
                //will be a list
                experienceDescription: []
              },
        }
    }

    handleExpChange = () => {

        const roleField = (e) => {
            this.setState({
              experience: {
                input: {
                  role: this.state.experience.input.role,
                },
              }
          })
        }
        const companyField = (e) => {
            this.setState({
                experience: {
                input: {
                  company: this.state.experience.input.company,
                }
              }
          })
        }
        const dateField = (e) => {
          this.setState({
            experience: {
              input: {
                date: this.state.experience.input.date,
              }
            }
        })
    }
    
        const descriptionField = (e) => {
          this.setState({
            experience: {
              input: {
                description: this.state.experience.input.description,
              },
              experienceDescription: this.state.experience.input.experienceDescription.concat(this.state.experience.input.description)
            }
        })
    }
    
          return {
            roleField,
            dateField,
            descriptionField,
            companyField
          }
        
      }
    
    onSubmitExpTask = () => {
        const roleField = (e) => {
            this.setState({
                experience: {
                input: {
                role: '',
                }
            }
        })
        }
        const companyField = (e) => {
            this.setState({
                experience: {
                input: {
                company: '',
                }
            }
        })
        }
        const dateField = (e) => {
        this.setState({
            experience: {
            input: {
                date: '',
            }
            }
        })
    }

        const descriptionField = (e) => {
        this.setState({
            experience: {
            input: {
                description: '',
            }
            }
        })
    }

        return {
            roleField,
            dateField,
            descriptionField,
            companyField
        }
    }

    render() {

        const {experience, experienceDescription} = this.state;
        return(
            <div className='experienceForm'>
                <form>
                    <label htmlFor='roleInput'>
                        Role
                        <input 
                            type='text' 
                            id='roleInput'
                            value={experience.input.role} />
                    </label>
                    <label htmlFor='companyInput'>
                        Company
                        <input 
                            type='text' 
                            id='companyInput'
                            value={experience.input.company} />
                    </label>
                    <label htmlFor='dateInput'>
                        Dates
                        <input 
                            type='text' 
                            id='dateInput'
                            value={experience.input.date} />
                    </label>
                    <label htmlFor='descripInput'>
                        Description
                        <textarea 
                            id='descripInput'
                            value={experience.input.description} />
                    </label>
                    <button type='submit'>Submit</button>
                    <button className='cancel'>Cancel Input</button>
                </form>
            </div>
        )
    }
}

export default Experience;