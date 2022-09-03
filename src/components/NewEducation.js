import {Component } from 'react'

export default class NewEducation extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {education} = this.props;
        return(
            <div className='education-container'>
                {education.educationArr.map((obj) => {
                    return (
                        <div key={obj.id}>
                            <div className='new-education'>
                                <div className='section-left'>
                                    <h3>{obj.program}</h3>
                                </div>                      
                                <div className='section-right'>
                                    <h3>{obj.school}</h3>
                                    <p>{obj.dateStart}</p>
                                    <p>{obj.dateEnd}</p>
                                </div>
                            </div>    
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}

