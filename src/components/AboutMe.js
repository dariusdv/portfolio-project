import React from 'react'
import author from "../bitcoin-3396302 (1).jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5"><img className="profile-img" src={author} alt="author"/></div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laborum provident laboriosam sit quod iste, atque doloribus illum culpa! Iure velit reprehenderit nemo. Aliquid animi nulla perspiciatis deserunt quasi eligendi!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus sit, repudiandae qui eligendi impedit maxime dolor laborum. Praesentium, vel inventore!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias est nihil velit officia voluptate animi? Commodi sequi dicta consectetur minima sed tenetur, voluptate laborum sint quisquam, fugiat labore ex dignissimos officiis atque ipsa facere soluta pariatur. Aliquam tenetur quibusdam, nisi similique iure, rerum reprehenderit consequatur, perferendis nostrum omnis molestias!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
