import React, {Component} from 'react'

class PersonalInfo extends Component {

    constructor() {
        super()

        this.state = {
            personalInfo: {
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
              }
        }
    }

    handleChange = () => {
        const nameField = (e) => {
            this.setState({
              personalInfo: {
                input: {
                  name: e.target.value,
                }
              }
          })
        }
        const emailField = (e) => {
            this.setState({
              personalInfo: {
                input: {
                  email: e.target.value,
                }
              }
          })
        }
        const phoneField = (e) => {
          this.setState({
            personalInfo: {
              input: {
                phone: e.target.value,
              }
            }
        })
    }
    
        const addressField = (e) => {
          this.setState({
            personalInfo: {
              input: {
                address: e.target.value,
              }
            }
        })
    }
    
          return {
            nameField,
            emailField,
            phoneField,
            addressField
          }
        
      }
    
    onSubmit = () => {
        const nameField = () => {
            this.setState({
            infoObj: {
                name: this.state.personalInfo.name
            },
            personalInfo: {
                input: {
                    name: '',
                }
            }
            })
        }
        const emailField = () => {
            this.setState({
                infoObj: {
                    email: this.state.personalInfo.email
                },
                personalInfo: {
                    input: {
                    email: '',
                    }
                }
            })
        }
        const phoneField = () => {
            this.setState({
                personalInfo: {
                infoObj: {
                    phone: this.state.personalInfo.phone
                },
                input: {
                    phone: '',
                }
                }
            })
        }
        
        const addressField = () => {
            this.setState({
                personalInfo: {
                infoObj: {
                    address: this.state.personalInfo.address
                },
                input: {
                    address: '',
                }
                }
            })
        }

    return {
        nameField,
        emailField,
        phoneField,
        addressField
      }
    }

    render() {
        const {personalInfo} = this.state;

        return (
            <div className='personalInfoForm'>
            <form onSubmit={this.onSubmit}>
                <label htmlFor='nameInput'>
                    Name
                    <input 
                        onChange={(e) => this.handleChange().nameField(e)}
                        type='text' 
                        id='nameInput'
                        value={personalInfo.input.name} />
                </label>
                <label htmlFor='emailInput'>
                    Email
                    <input 
                        onChange={(e) => this.handleChange().emailField(e)}
                        type='text' 
                        id='emailInput'
                        value={personalInfo.input.email} />
                </label>
                <label htmlFor='phoneInput'>
                    Phone
                    <input 
                        onChange={(e) => this.handleChange().phoneField(e)}
                        type='text' 
                        id='phoneInput'
                        value={personalInfo.input.phone} />
                </label>
                <label htmlFor='addressInput'>
                    Address
                    <input 
                        onChange={(e) => this.handleChange().addressField(e)}
                        id='addressInput'
                        value={personalInfo.input.address} />
                </label>
                <button type='submit'>Submit</button>
                <button className='cancel'>Cancel Input</button>
            </form>
        </div>
        )
    }

}

export default PersonalInfo;