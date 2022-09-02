import {Component } from 'react'
import Input from './Input'

class EducationForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info} = this.props;
        return(
            <div className='modal'>
                <form onSubmit={this.props.onSubmit} section='education'>
                    <div className='experience'>
                        <Input info={info.input.program} handleChange={this.props.handleChange} name='program' section='education' />
                        <Input info={info.input.school} handleChange={this.props.handleChange} name='school' section='education' />
                        <Input info={info.input.dateStart} handleChange={this.props.handleChange} name='dateStart' section='education' />
                        <Input info={info.input.dateEnd} handleChange={this.props.handleChange} name='dateEnd' section='education' />
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default EducationForm;