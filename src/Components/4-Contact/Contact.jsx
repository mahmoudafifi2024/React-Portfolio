import Lottie from "lottie-react";
import { useForm, ValidationError } from '@formspree/react';
import doneAnimation from '../../../public/Animation/done.json'
import contactAnimation from '../../../public/Animation/email.json'
import './contact.css'
export default function Contact() {
  const [state, handleSubmit] = useForm("movavavl");

  const styles = {
    h1: {
      color: 'rgb(106, 192, 255)',
      fontSize: '18px',
      marginTop: '1.7rem',
    },
  };
  
  return (
    <section className='flex contact-us'>

    <div className="left-section">
            
    <h1 className='title'><span className='icon-envelope'></span>Contact us</h1>

    <p className='sub-title'>If you like my style. Contact me and let is get started</p>

  <div className="flex">
  <form onSubmit={handleSubmit} className='' action="">

    <div className="flex">
      <label htmlFor="email">Email Address</label>
      <input required placeholder='Email Address' type="email" id='email' name='email'/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>
    

    <div style={{marginTop:'30px'}} className='flex'>
      <label htmlFor="message">Your Message</label>
      <textarea required id="message" placeholder='Your Message' name='message'></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>

    <button className='submit' disabled={state.submitting}>
    {state.submitting ? "Submitting..":"Submite"}
      </button>

    
    {state.succeeded && (<h1 className="flex" style={styles.h1}>
      <Lottie style={{height:"100px"}} animationData={doneAnimation} loop={false} />
      Your Message has been Send Successfuly</h1>)}

  </form>
  </div>
    </div>

      <div  className="animation">
      <Lottie  className="contactAnimation" style={{height:"30rem"}} animationData={contactAnimation} loop={true} />
      </div>
    </section>
  )
}
