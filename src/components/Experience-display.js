import React, {Component} from 'react' 

class ExperienceDisplay extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {info} = this.props;
        return (
            <div className='display-info'>
                <h2 id='role'>{info.input.role}</h2>
                <h3 id='company'>{info.input.company}</h3>
                <p>{info.input.date}</p>
                <p>{info.input.experienceDescription}</p>
            </div>
        )
    }
}

export default ExperienceDisplay;