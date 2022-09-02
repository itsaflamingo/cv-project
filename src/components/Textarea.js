import React, {Component} from 'react'

export default class Textarea extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {info, name, section} = this.props
        return(
            <div className='input'>
                <label htmlFor='textarea'>
                    Description </label>
                    <textarea 
                        onChange={this.props.handleChange}
                        value={info}                    
                        name={name}
                        data-section={section}
                        id='textarea'
                    />
            </div>
        )
    }
}