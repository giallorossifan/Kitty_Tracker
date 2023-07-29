 import React from 'react';

import Item from '/src/myitem';
import leia_bear from '/src/images/leia_bear.png';
import luke from '/src/images/luke.png';
import cali from '/src/images/cali.png';
import ella from '/src/images/ella.png';
import lisa from '/src/images/lisa.png';

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


  <div className=''>
    <button onClick={this.toggleShowText} type='button'>
      {this.state.showText ? 'Family' : <h3>My Family</h3>}
    </button>

     {this.state.showText &&
      <div>
        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={lisa} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Lisa (Sister)</p>
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={ella} className="familyImages" alt="ella" />
        </a>
        <p style={{ textAlign: 'center' }}>Ella (Sister)</p>
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={cali} className="familyImages" alt="cali" />
        </a>
        <p style={{ textAlign: 'center' }}>Cali (Sister)</p>
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={luke} className="familyImages" alt="Luke" />
        </a>
        <p style={{ textAlign: 'center' }}>Luke (Twin Brother)</p>
        </div>

        {/* <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Mommy & Daddy </p>
        </div> */}

      </div>
      }

  </div>



      );


  }

}


export default Family;
