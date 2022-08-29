import React, {Component} from 'react'

export default class Textarea extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {info, name, section} = this.props
        console.log(this.props)
        return(
            <label htmlFor='textarea'>
                Description
                <textarea 
                    onChange={this.props.handleChange}
                    value={info}                    
                    name={name}
                    data-section={section}
                    id='textarea'
                />
            </label>
        )
    }
}