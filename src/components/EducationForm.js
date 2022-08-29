import {Component } from 'react'
import Input from './Input'
import Buttons from './Buttons'

class EducationForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info} = this.props;
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className='experience'>
                        <Input info={info.input.program} handleChange={this.props.handleChange} name='program' section='education' />
                        <Input info={info.input.school} handleChange={this.props.handleChange} name='school' section='education' />
                        <Input info={info.input.date} handleChange={this.props.handleChange} name='date' section='education' />
                    </div>
                    <Buttons />
                </form>
            </div>
        )
    }
}

export default EducationForm;