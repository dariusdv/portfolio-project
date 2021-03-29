import React, {useState} from 'react';
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form"

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_qPj05bNKvvUlB9FGIQhIE";

  const onSubmit = (data, rst) => {
    sendEmail(
      serviceID, 
      templateID, 
      {
        name:data.name, 
        phone:data.phone, 
        email:data.email, 
        subject:data.subject, 
        description:data.description
      },
      userID
      )
      rst.target.reset()
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent sucessfully! I will contact you as soon as possible.");
      }).catch(err=>console.error(`Something went wrong ${err}`));
  }

  return (
    <div className="contactme">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Get in contact:</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input type="text" className="form-control" placeholder="Name" name="name" ref={register({required: "Please enter your name", maxLength: {
                value: 30, message: "Please enter a name with fewer than 30 characters."
              }})}/>
              <div className="line"></div>
            </div>
            <span className="error-message">{errors.name && errors.name.message}</span>
            <div className="text-center">
              <input type="text" className="form-control" placeholder="Phone Number" name="phone" ref={register({required: "Please add your phone number"})}/>
              <div className="line"></div>
            </div>
            <span className="error-message">{errors.phone && errors.phone.message}</span>
            <div className="text-center">
              <input type="email" className="form-control" placeholder="Email" name="email" ref={register({required: "Please add your email", pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid Email"
              }})}/>
              <div className="line"></div>
            </div>
            <span className="error-message">{errors.email && errors.email.message}</span>
            <div className="text-center">
              <input type="text" className="form-control" placeholder="Subject" name="subject" ref={register({required: "Please enter the subject"})}/>
              <div className="line"></div>
            </div>
            <span className="error-message">{errors.subject && errors.subject.message}</span>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <textarea type="text" className="form-control" placeholder="Project description" name="description" ref={register({required: "Please shortly describe your project needs"})}></textarea>
              <div className="line"></div>
            </div>
            <span className="error-message">{errors.description && errors.description.message}</span>
            <button className="btn-main-offer contact-btn" type="submit">send message</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
