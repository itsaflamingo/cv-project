import {Component } from 'react'
import Input from './Input'
import Textarea from './Textarea'

export default class PersonalForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info} = this.props;
        return(
            <div className='modal'>
                <form onSubmit={this.props.onSubmit} section='personal'>
                    <div className='personal-info'>
                        <Input info={info.input.name} handleChange={this.props.handleChange} name='name' section='personal' />
                        <Input info={info.input.email} handleChange={this.props.handleChange} name='email' section='personal' />
                        <Input info={info.input.phone} handleChange={this.props.handleChange} name='phone' section='personal' />
                        <Input info={info.input.address} handleChange={this.props.handleChange} name='address' section='personal' />
                    
                    <button type='submit' className='modal-small-button'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}