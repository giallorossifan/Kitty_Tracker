import React from 'react';

class Item extends React.Component {

state ={
  showText: false
};

toggleShowText = () => {
  this.setState(prevState => ({
    showText: !prevState.showText

  }));
};


  render(){
    return (

  <div className = 'aboutButton'>
      <button onClick={this.toggleShowText} type='button'>
        {this.state.showText ? 'Picture will go here' : <h3>Picture</h3>}
      </button>
      {this.state.showText && <p> Pictures will go here </p>}
  </div>

      );
  }
}


export default Item;
