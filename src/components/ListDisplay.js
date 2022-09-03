import React, {Component} from 'react'

export default class ListDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {skills} = this.props
        return (
            <div id='skills-list'>
                <ul>
                    {skills.map((skill) => {
                        return <li key={skill.id} id={skill.id}>
                            <div className='skill'>
                                {skill.skill}
                                <button className='remove-skill' onClick={this.props.onClick} id={skill.id}>X</button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}