import React from 'react'
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// Reat PopupBox
import {PopupboxManager, PopupboxContainer} from "react-popupbox"; 
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {
  // Netflix
  const openPopupBoxNetflix = () => {
    const content = (
      <React.Fragment>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix CLone Project Image"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quis.</p>
        <b>Github:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/", "_blank")}>https://github.com/</a>
      </React.Fragment>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupBoxCityGuide = () => {
    const content = (
      <React.Fragment>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide Project Image"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quis.</p>
        <b>Github:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/", "_blank")}>https://github.com/</a>
        <br/>
        <b>Github:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/", "_blank")}>https://github.com/</a>
      </React.Fragment>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide clone project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupBoxPortfolio = () => {
    const content = (
      <React.Fragment>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project Image"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quis.</p>
        <b>Github:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/", "_blank")}>https://github.com/</a>
        <br/>
        <b>Github:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/", "_blank")}>https://github.com/</a>
      </React.Fragment>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio clone project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager Project
  const openPopupBoxTaskManager = () => {
    const content = (
      <React.Fragment>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager Project Image"/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quis.</p>
        <b>Github:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/", "_blank")}>https://github.com/</a>
        <br/>
        <b>Github:</b> <a className="hyper-link" onClick={()=>window.open("https://github.com/", "_blank")}>https://github.com/</a>
      </React.Fragment>
    )
  
    PopupboxManager.open({content})
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager clone project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupBoxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project"/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          <div className="portfolio-image-box" onClick={openPopupBoxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project"/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          <div className="portfolio-image-box" onClick={openPopupBoxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project"/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          <div className="portfolio-image-box" onClick={openPopupBoxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager Project"/>
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix}/>
      <PopupboxContainer {...popupboxConfigCityGuide}/>
      <PopupboxContainer {...popupboxConfigPortfolio}/>
      <PopupboxContainer {...popupboxConfigTaskManager}/>
    </div>
  )
}

export default Portfolio
