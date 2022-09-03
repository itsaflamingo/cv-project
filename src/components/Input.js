import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {info, name, section, type, placeholder, label} = this.props;
        return (
            <div className='input'>
                <label htmlFor='input'>{label}</label>
                <input 
                    onChange={this.props.handleChange}
                    type={type} 
                    id='input'
                    name={name}
                    data-section={section}
                    value={info}
                    placeholder={placeholder} /> 
            </div>
        )
    }
}

export default Input;