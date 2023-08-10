import React from 'react';

class About extends React.Component {


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


    <div className='aboutButton'>
      <button onClick={this.toggleShowText} type='button'>
        {this.state.showText ? 'Im Cute !!' : <h3>About Me</h3> }
      </button>
      {this.state.showText && <p>
        Hi my name is Leia Bear. As you probably already noticed I am SUPER CUTE.
        Don't worry I am not lost. I like to go visit my friends in Talmadge. But
        I do have a curfew and have to be home by sundown. I live on
        <br></br>
        <a href='https://www.google.com/maps/place/4419+Monroe+Ave,+San+Diego,+CA+92115/@32.7589228,-117.0993349,17z/data=!3m1!4b1!4m6!3m5!1s0x80d95439b7464a59:0x90f02cadb062b7c!8m2!3d32.7589228!4d-117.0993349!16s%2Fg%2F11sttj5rdf?entry=ttu' target='_blank' rel='noopener noreferrer'>
         4419 Monroe ave. San Diego, Ca. 92115.
        </a>
        <br></br>
        Please don't feed me so I can leave space for big yummy dinner at home. In the meanwhile lets play.
        Or you can just pet me, I like that.

         </p>}
    </div>



        );


    }

  }


export default About;
