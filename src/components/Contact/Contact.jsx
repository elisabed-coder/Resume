import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i8pg60v", "template_uwufj5j", form.current, {
        publicKey: "Hwfr5bUrFZpDonrME",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <p>Chat with me</p>
      {/* {!isFormSubmitted ? ( */}
      <div className="contact__container container">
        <div className="contact__content">
          <div className="email__container">Email</div>
          <div className="whatsapp__container">WhatsApp</div>
          <div className="viber__container">Viber</div>
        </div>
        <div className="project__content">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                // onChange={handleChangeInput}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                // onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p__text"
                placeholder="Your Message"
                name="message"
                // onChange={handleChangeInput}
              ></textarea>
            </div>
            <input type="submit" value="Send" />
            {/* {loading ? "Sending..." : "Send Message"} */}
          </form>
        </div>
      </div>
      {/* ) : ( */}
      <div>
        <h3 className="head__text">Thank you for getting in touch!</h3>
      </div>
      {/* )} */}
    </section>
  );
};

export default Contact;
