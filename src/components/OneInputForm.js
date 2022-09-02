import {Component } from 'react'
import Input from './Input'

export default class OneInputForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info, name, section} = this.props;
        return(
            <div className='one-input-modal'>
                <form id='one-input' onSubmit={this.props.onSubmit}>
                    <div>
                        <Input info={info} handleChange={this.props.handleChange} name={name} section={section} />
                    </div>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}