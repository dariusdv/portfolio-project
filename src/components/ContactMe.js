import React from 'react';

const ContactMe = () => {
  return (
    <div className="contactme">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Get in contact:</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input type="text" className="form-control" placeholder="Phone Number" phone="phone"/>
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input type="email" className="form-control" placeholder="Email" email="email"/>
              <div className="line"></div>
            </div>
            <div className="text-center">
              <input type="text" className="form-control" placeholder="Subject" subject="subject"/>
              <div className="line"></div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <textarea type="text" className="form-control" placeholder="Project description" description="description"></textarea>
              <div className="line"></div>
            </div>
            <button className="btn-main-offer contact-btn" type="submit">send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
