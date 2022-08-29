import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {info, name, section} = this.props;
        return (
            <div className='input'>
                        <label htmlFor='input'>
                            {name}
                            <input 
                                onChange={this.props.handleChange}
                                type='text' 
                                id='input'
                                name={name}
                                data-section={section}
                                value={info} />
                        </label>
                    </div>
        )
    }
}

export default Input;