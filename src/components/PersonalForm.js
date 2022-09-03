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
                        <Input info={info.input.name} handleChange={this.props.handleChange} name='name' section='personal' type='text' label='Name' />
                        <Input info={info.input.email} handleChange={this.props.handleChange} name='email' section='personal' type='email' placeholder='you@example.com' label='Email' />
                        <Input info={info.input.phone} handleChange={this.props.handleChange} name='phone' section='personal' type='tel' placeholder='000-000-000' label='Phone' />
                        <Input info={info.input.address} handleChange={this.props.handleChange} name='address' section='personal' label='Address' />
                    
                    <button type='submit' className='modal-small-button'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}