import {Component } from 'react'
import Input from './Input'

export default class OneInputForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info, name, section} = this.props;
        return(
            <div className='modal' id='skill-modal'>
                <form onSubmit={this.props.onSubmit}>
                    <div id='skill-input'>
                        <Input info={info} handleChange={this.props.handleChange} name={name} section={section} />
                        <button type='submit' className='modal-small-button'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}