import React, {Component} from 'react'
import SubmitPersonal from './SubmitPersonal'

export default class PersonalInfoDiv extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {id, title, info} = this.props
        return(
            <div id={id} className='container'>
                  <p>{title}</p>
                  <SubmitPersonal tag={<p>{info}</p>}/>
                </div>
        )
    }
}