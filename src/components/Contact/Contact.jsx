import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import "../Home/social.css";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { name, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     name: name,
  //     email: email,
  //     message: message,
  //   };

  //   emailjs.create(contact).then(() => {
  //     setLoading(false);
  //     setIsFormSubmitted(true);
  //   });
  // };
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm("service_i8pg60v", "template_uwufj5j", form.current, {
        publicKey: "Hwfr5bUrFZpDonrME",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setIsFormSubmitted(true);
          form.current.reset();
          // Reset the form after successful submission

          setShowThankYou(true);
          setTimeout(() => {
            setShowThankYou(false);
            setIsFormSubmitted(false);
          }, 5000);
          // Hide the thank you message after 5 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="section contact container" id="contact">
      <h1>Get in Touch</h1>
      <h2>Chat with me</h2>
      {!isFormSubmitted ? (
        <div className="contact__container flex-center ">
          <div className="icons__container">
            <div className="email__container ">
              <a
                href=""
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-envelope-edit"></i>
              </a>
              <h3>ebezhiashvili@gmail.com</h3>
            </div>
            <div className="email__container">
              <a
                href=""
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-whatsapp"></i>
              </a>
              <h3>+995 551 071 649</h3>
            </div>
          </div>
          <div className="project__content">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input__box">
                <input type="text" name="name" required />
                <span>Your Name</span>
              </div>
              <div className="input__box">
                <input type="email" name="email" required />
                <span>Your Email</span>
              </div>
              <div className="input__box">
                <textarea type="text" name="message" required></textarea>
                <span>Your Message</span>
              </div>
              <button className="button" id="button-3" type="submit">
                <div id="circle"></div>
                <p>{loading ? "Sending..." : "Send Message"}</p>
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="head__text">Thank you for getting in touch!</h2>
        </div>
      )}
    </section>
  );
};

export default Contact;
