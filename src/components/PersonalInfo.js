import React, {Component} from 'react'

class personalInfo extends Component {

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
                infoArr: []
              }
        }
    }

    handleInfoChange = () => {
        const nameField = (e) => {
            this.setState({
              personalInfo: {
                input: {
                  name: this.state.personalInfo.input.name,
                }
              }
          })
        }
        const emailField = (e) => {
            this.setState({
              personalInfo: {
                input: {
                  email: this.state.personalInfo.input.email,
                }
              }
          })
        }
        const phoneField = (e) => {
          this.setState({
            personalInfo: {
              input: {
                phone: this.state.personalInfo.input.phone,
              }
            }
        })
    }
    
        const addressField = (e) => {
          this.setState({
            personalInfo: {
              input: {
                address: this.state.personalInfo.input.address,
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
    
    onSubmitInfoTask = () => {
        const nameField = (e) => {
            this.setState({
            personalInfo: {
                input: {
                    name: this.state.personalInfo.input.name,
                }
            }
            })
        }
        const emailField = (e) => {
            this.setState({
                personalInfo: {
                    input: {
                    email: this.state.personalInfo.input.email,
                    }
                }
            })
        }
        const phoneField = (e) => {
            this.setState({
                personalInfo: {
                input: {
                    phone: this.state.personalInfo.input.phone,
                }
                }
            })
        }
        
        const addressField = (e) => {
            this.setState({
                personalInfo: {
                input: {
                    address: this.state.personalInfo.input.address,
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

}