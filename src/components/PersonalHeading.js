import React, {Component} from 'react'
import PersonalForm from './PersonalForm';

export default class PersonalHeading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }
    }

    render() {
        const {id, title, buttnClass, info, onSubmit, handleChange, name, section} = this.props;
        const {showForm} = this.state;
        return(
            <div id={id}>
                    <p>{title}</p>
                    <button className={buttnClass} onClick={() => this.setState({showForm : !showForm})}>
                    ADD
                    </button>
                    {showForm && (<PersonalForm info={info} onSubmit={onSubmit} handleChange={handleChange} name={name} section={section} />)}
                  </div>
        )
    }
}