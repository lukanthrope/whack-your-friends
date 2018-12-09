import React, { Component } from 'react';
import face from './fac.png';

class Open extends Component {

	constructor(props) {
		super(props);
		this.state = {
			file: '',
			imagePreviewUrl: ''
		};	
	}

	_handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
    console.log(this.state.imagePreviewUrl);
  }

  render() {
  	let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="imgPreview" src={imagePreviewUrl} />);
      localStorage.setItem('face', imagePreviewUrl);
    } else {
      $imagePreview = (<img className="imgPreview" src={face} />);
    }

    return (
      <div className="imageCropper" style={this.props.style}>
      	<h2 className="close" onClick={this.props.click} close={this.props.close}>X</h2>

      	<input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)}
            accept="image/*" />


        <div className="imgPreview">
          {$imagePreview}<h1>{this.state.imagePreviewUrl}</h1>
        </div>
      </div>
    );
  }
}

export default Open;
	