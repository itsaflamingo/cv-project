import React, {Component} from 'react'
import EducationForm from './EducationForm';

export default class PersonalHeading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }
    }

    render() {
        const {title, buttnClass, info, onSubmit, handleChange} = this.props;
        const {showForm} = this.state;
        return(
            
            <div className='heading'>
                    <p>{title}</p>
                    <button className={buttnClass} onClick={() => this.setState({showForm : !showForm})}>
                        ADD
                    </button>            
                    {showForm && (<EducationForm info={info} onSubmit={onSubmit} handleChange={handleChange} />)}
                  </div>
        )
    }
}