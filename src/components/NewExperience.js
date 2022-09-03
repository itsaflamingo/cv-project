import {Component } from 'react'

export default class NewExperience extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {experience} = this.props;
        return(
            <div className='experience-container'>
                {experience.experienceArr.map((obj) => {
                    return (
                        <div key={obj.id} className='new-experience' id={obj.id} onClick={this.props.onClick}>
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

