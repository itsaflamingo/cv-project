import {Component } from 'react'
import Input from './Input'
import Buttons from './Buttons'
 
class Form extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {info} = this.props;
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className='experience'>
                        <Input info={info.input.role} handleChange={this.props.handleChange} name='role' section='experience' />
                        <Input info={info.input.company} handleChange={this.props.handleChange} name='company' section='experience' />
                    </div>
                    <Buttons />
                </form>
            </div>
        )
    }
}

export default Form;