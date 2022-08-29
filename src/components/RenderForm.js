import React, {Component} from 'react' 

export default class RenderForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {tag} = this.props;
        return (
            <div className='display-info'>
                {tag}
            </div>
        )
    }
}