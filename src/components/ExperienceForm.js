import {Component } from 'react'
import Input from './Input'
import Textarea from './Textarea'

class ExperienceForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info} = this.props;
        return(
            <div className='modal'>
                <form onSubmit={this.props.onSubmit} section='experience'>
                    <div className='experience'>
                        <Input info={info.input.role} handleChange={this.props.handleChange} name='role' section='experience' />
                        <Input info={info.input.company} handleChange={this.props.handleChange} name='company' section='experience' />
                        <Input info={info.input.dateStart} handleChange={this.props.handleChange} name='dateStart' section='experience' />
                        <Input info={info.input.dateEnd} handleChange={this.props.handleChange} name='dateEnd' section='experience' />
                        <Textarea info={info.input.description} handleChange={this.props.handleChange} name='description' section='experience' />
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default ExperienceForm;