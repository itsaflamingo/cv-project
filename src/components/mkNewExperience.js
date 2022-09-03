import {Component } from 'react'

export default class MkNewExperience extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {experience} = this.props;
        return(
            <div className='experience-container'>
                {experience.experienceArr.map((obj) => {
                    return (
                        <div key={obj.id} className='new-experience'>
                            <div className='section-left'><h3>{obj.role}</h3></div>
                            <div className='section-right'>
                                <h4>{obj.company}</h4>
                                <p>{obj.dateStart}</p>
                                <p>{obj.dateEnd}</p>
                                <p>{obj.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

