import React, {Component} from 'react'

export default class ListDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {skills} = this.props
        return (
            <ul>
                {skills.map((skill) => {
                    return <li key={skill.id}>{skill.skill}</li>
                })}
            </ul>
        )
    }
}