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
                        return <li key={skill.id}>{skill.skill}</li>
                    })}
                </ul>
            </div>
        )
    }
}