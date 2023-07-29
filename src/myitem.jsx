import React from 'react';

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
            {isUploading && selectedImage && <img src={selectedImage} alt="Uploaded" />}
          </div>
        )}
      </div>
    );
  }
}

export default MyItem;
