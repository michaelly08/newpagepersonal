import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [message, setMessage] = useState("")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    

    emailjs.sendForm('service_ymynsad', 'template_tslvy6m', form.current, 'yqLTK2ecL74UcQOYy')
      .then((result) => {
        setMessage("success")
        document.getElementById("myForm").reset();
      }, (error) => {
        setMessage("error")
      });
  };





  return (
    <div className="contact-container" id="contact-me">
        <div className="contact-wrapper">

            <div className="contact-titles">
                <div className="contact-title">Let’s talk business</div>
                <div className="contact-subtitle">Now that you know a lot about me, let me know if you are interested to work with me.</div>
                
            </div>


            <form className="contact-box" ref={form} onSubmit={sendEmail} id="myForm">

                <label>Name</label>
                <input type="name" required name="name"></input>


                <label >Email Address</label>
                <input type="email" required name="email"></input>


                <label>Message</label>
                <textarea required name="message"></textarea>

                <button type="submit" value="Send">Submit</button>

                <div className="message-success" style={{display: `${message == "success" ? "flex" : "none"}`}}>Thanks, I will get back to you soon!</div>
                <div className="message-failed" style={{display: `${message == "error" ? "flex" : "none"}`}}>Error, please try again later</div>
            </form>



        </div>
    </div>
  )
}

export default Contact