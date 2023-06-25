 import React from 'react';

import Item from '/src/myitem';
<<<<<<< HEAD
import leia_bear from '/src/leia_bear.png';
=======
import leia_bear from '/src/images/leia_bear.png';
import luke from '/src/images/luke.png';
import cali from '/src/images/cali.png';
import ella from '/src/images/ella.png';
import lisa from '/src/images/lisa.png';
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438

class Family extends React.Component {

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


  <div className='familyButton'>
    <button onClick={this.toggleShowText} type='button'>
      {this.state.showText ? 'Family' : <h3>My Family</h3>}
    </button>

     {this.state.showText &&
      <div>
        <div>
        <a href=" " target="_blank" className="familyNames">
<<<<<<< HEAD
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Lisa</p>
=======
          <img src={lisa} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Lisa (Sister)</p>
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
<<<<<<< HEAD
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Ella</p>
=======
          <img src={ella} className="familyImages" alt="ella" />
        </a>
        <p style={{ textAlign: 'center' }}>Ella (Sister)</p>
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
<<<<<<< HEAD
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Cali</p>
=======
          <img src={cali} className="familyImages" alt="cali" />
        </a>
        <p style={{ textAlign: 'center' }}>Cali (Sister)</p>
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
<<<<<<< HEAD
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Luke</p>
        </div>

        <div>
=======
          <img src={luke} className="familyImages" alt="Luke" />
        </a>
        <p style={{ textAlign: 'center' }}>Luke (Twin Brother)</p>
        </div>

        {/* <div>
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
        <a href=" " target="_blank" className="familyNames">
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Mommy & Daddy </p>
<<<<<<< HEAD
        </div>
=======
        </div> */}
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438

      </div>
      }

<<<<<<< HEAD




=======
>>>>>>> 442a2c821495ec201efc8dd50dc64332ae964438
  </div>



      );


  }

}


export default Family;
