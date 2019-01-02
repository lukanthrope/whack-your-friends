import React, { Component } from 'react';
import face from './fac.png';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function image64toCanvasRef (canvasRef, image64, pixelCrop) {
  const canvas = canvasRef; 
  canvas.width = pixelCrop.width || 200;
  canvas.height = pixelCrop.height || 200;
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.src = image64;
  image.onload = function () {
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    )
  };
}

function extractImageFileExtensionFromBase64 (base64Data) {
  return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'))
}

class Open extends Component {

	constructor(props) {
		super(props);
		this.imagePreviewCanvasRef = React.createRef();
		this.state = {
			file: '',
			imagePreviewUrl: '',
			value:'1',
			crop: {
				aspect: 1/1
			}
		};	

		this.showButton = false;
		this.useDefaultImage = this.useDefaultImage.bind(this);
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

  }

  useDefaultImage() {
  	localStorage.setItem('face', 'none');
		this.props.click();
  }

  handleOnChange = (crop) => {
  	this.setState({ crop });
	}

	handleOnComplete = (crop, pixelCrop) => {
		console.log(crop, pixelCrop);

		const canvasRef = this.imagePreviewCanvasRef.current;
		const {imagePreviewUrl} = this.state;
		console.log(imagePreviewUrl);
		image64toCanvasRef(canvasRef, imagePreviewUrl, pixelCrop);
	}

	saveImage = (event) => {
		event.preventDefault();
		const {imagePreviewUrl} = this.state;
		const canvasRef = this.imagePreviewCanvasRef.current;
		
		if (canvasRef === null) {
			this.props.click();
			return 0;
		}

		const fileExtension = extractImageFileExtensionFromBase64(imagePreviewUrl);
		const base64Canvas = canvasRef.toDataURL('image/' + fileExtension);
		console.log(base64Canvas);
		
		localStorage.setItem('face', base64Canvas);
		this.props.click();
	}	
 
	saveImageWithoutCrop = (event) => {
		event.preventDefault();
		const {imagePreviewUrl} = this.state;
		localStorage.setItem('face', imagePreviewUrl);
		this.props.click();
	}

	buttonShower = () => {
	  if (this.showButton) {
			return (
				<div className="buttons">
					<button
						onClick={this.saveImageWithoutCrop}
						className="justSave little"
						>
					  save uncropped
					</button>
					<button
						onClick={this.saveImage}
						className="cropNsave justSave little"
						>
					  crop&save
					</button>
				</div>
			)
		} else {
			return (
			  <h1 className="previewH1">Choose and upload an image</h1>
			)
		}
	} 

  render() {
  	let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = imagePreviewUrl;
      this.showButton = true;
    }

    return (
      <div className="imageCropper" style={this.props.style}>
	      <div className="containerTop">
	      	<h2
	      		className="close"
	      		onClick={this.props.click}
	      		close={this.props.close}
	      		>
	      		X
	      	</h2>

	      	<label htmlFor="file-upload" className="fileInputLabel">
	      		upload image
	      	</label>

	      	<input
	      			className="fileInput"
	      			id="file-upload" 
	            type="file" 
	            size="1"
	            onChange={(e) => this._handleImageChange(e)}
	            accept="image/*"
	            />

					<input
							className="justSave fileInputDefault" 
	            type="button" 
	            onClick={this.useDefaultImage}
	            value="useDefaultImage"
	            />
	      </div>
      	
					{$imagePreview !== null && <div className="imgPreview">
						<div className="cropParent">
							<ReactCrop
								src={$imagePreview}
								className="imageCrop"	
								crop={this.state.crop}
								onChange={this.handleOnChange}
								onComplete={this.handleOnComplete}
								/>
						</div>
						  <h4>Preview:</h4>
							<canvas ref={this.imagePreviewCanvasRef}></canvas>
						</div>
					}

					<br />

					{
						this.buttonShower()
		      }  
      </div>
    );
  }
}

export default Open;