import React, {Component} from 'react'
import OneInputForm from './OneInputForm'

export default class PictureContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }
    }

    render() {

        const {picture, changePicture, picOnChange} = this.props
        const {showForm} = this.state
        
        return(
            <div id='picture-container'>
                <div id='picture-frame'>
                    <div id='picture' style={{backgroundImage: `url(${picture.url})`}} onClick={() => this.setState({showForm : !showForm})}></div>
                    </div>
                <div>
                {showForm && (<OneInputForm info={picture.urlInput} onSubmit={changePicture} handleChange={picOnChange} label='Add Photo URL' id='pic-input' />)}
                </div>
          </div>
        )
    }
}