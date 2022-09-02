import React, {Component} from 'react'

export default class SubmitPersonal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {tag} = this.props
        return (
            <div className='personal-display'>
                {tag}
            </div>
        )
    }
}