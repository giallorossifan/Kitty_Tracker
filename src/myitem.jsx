import React from 'react';
import axios from 'axios';

class MyItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUploading: false,
      selectedImage: null,
      showMyItem: false,
    };
  }

  handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ selectedImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  handleImageUpload = () => {
    const { selectedImage } = this.state;

    // Check if an image is selected
    if (selectedImage) {
      // Create a FormData object to send the image
      const formData = new FormData();
      formData.append('image', selectedImage);

      // Send the image to the backend
      axios.post('http://localhost:8080/api/images/upload', formData)
        .then(response => {
          console.log('Image uploaded successfully:', response.data);
          // Optionally, fetch the updated image list from the backend
          this.fetchImages();
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
    }
  };

  fetchImages = () => {
    axios.get('http://localhost:8080/api/images')
      .then(response => {
        // Handle the response data here, e.g., set images in state
        console.log('Fetched images:', response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  };

  toggleUploadImage = () => {
    this.setState((prevState) => ({
      isUploading: !prevState.isUploading,
      selectedImage: null,
    }));
  };

  toggleMyItem = () => {
    this.setState((prevState) => ({
      showMyItem: !prevState.showMyItem,
      isUploading: false,
      selectedImage: null,
    }));

    // Fetch images from the backend API when toggling the display
    if (!this.state.showMyItem) {
      this.fetchImages();
    }
  };

  render() {
    const { isUploading, selectedImage, showMyItem } = this.state;

    return (
      <div className=''>
        <button onClick={this.toggleMyItem} type='button'>
          {showMyItem ? 'Hide' : <h3>Pictures</h3>}
        </button>
        {showMyItem && (
          <div>
            <input type="file" accept="image/*" onChange={this.handleUploadImage} />
            <button onClick={this.handleImageUpload}>Upload</button>
            {isUploading && selectedImage && <img src={selectedImage} alt="Uploaded" />}
          </div>
        )}
      </div>
    );
  }
}

export default MyItem;
