"use client"
import React, {useRef} from 'react'
import styles from '/styles/footer.module.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yvrmj2o', 'template_m8co6tu', form.current, {
      publicKey: 'iU7xPn8-BURF689ZX'
    }).then(()=> {
      alert("Message has been sent.");
      form.current.reset();
    })
  };
  
  return (
    <div className={styles.footerBody}>
      <h2>Thanks for Visiting!</h2>
      <br></br>
        <div>
          <h3>Contact Me</h3>
          <form ref={form} onSubmit={handleSubmit} className={styles.formBox}>
            <div>
              <input 
                className={styles.nameInput}
                placeholder='Your name' 
                name="name"
                required>
              </input>
              <textarea
                className={styles.messageInput}
                name="message"
                placeholder="Enter your message"
                required/>
              </div>
            <button className={styles.buttonStyle} type="submit">Submit</button>
          </form>
        </div>
        <br></br>
        <div>
          <h3>Contact Information</h3>
          <br></br>
          <span className={styles.contactBox}>
            <a className={styles.links} href="mailto:swetha.poneasan@gmail.com">Email</a> 
            <p className={styles.links}> | </p>
            <a className={styles.links} href="https://www.linkedin.com/in/swetha-poneasan/">Linkedin</a>
            <p className={styles.links}> | </p>
            <a className={styles.links} href="https://github.com/swepon">Github</a>
          </span>
        </div>
    </div>
  );
};

export default Footer;