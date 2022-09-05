import React, {Component} from 'react'
import OneInputForm from './OneInputForm';

export default class PersonalHeading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }
    }

    render() {
        const {id, title, buttnClass, info, onSubmit, handleChange, name, section, label} = this.props;
        const {showForm} = this.state;
        return(
            
            <div id='skills-heading'>
                    <p>{title}</p>
                    <button className={buttnClass} onClick={() => this.setState({showForm : !showForm})}>
                        ADD
                    </button>

                    {showForm && (<OneInputForm info={info} onSubmit={onSubmit} handleChange={handleChange} name={name} section={section} label={label} id={id} />)}
                  </div>
        )
    }
}