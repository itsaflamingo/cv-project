import {Component } from 'react'
import Input from './Input'

export default class OneInputForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info, name, section, label, id} = this.props;
        return(
            <div className='modal' id={id}>
                <form onSubmit={this.props.onSubmit}>
                    <div id='one-input'>
                        <Input info={info} handleChange={this.props.handleChange} name={name} section={section} label={label} />
                        <button type='submit' className='modal-small-button'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}