import React from 'react';

class Item extends React.Component {

<<<<<<< HEAD
constructor(props){
  super(props)

}
=======
state ={
  showText: false
};

toggleShowText = () => {
  this.setState(prevState => ({
    showText: !prevState.showText

  }));
};

>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438

  render(){
    return (

<<<<<<< HEAD
  <div>
      <h1> Pictures go here  </h1>
  </div>

      )
=======
  <div className = 'aboutButton'>
      <button onClick={this.toggleShowText} type='button'>
        {this.state.showText ? 'Picture will go here' : <h3>Picture</h3>}
      </button>
      {this.state.showText && <p> Pictures will go here </p>}
  </div>

      );
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
  }
}


export default Item;
