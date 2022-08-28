import { Component } from 'react'

class Buttons extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <button type='submit'>Submit</button>
                <button className='cancel'>Cancel Input</button>
            </div>
        )
    }
}

export default Buttons;