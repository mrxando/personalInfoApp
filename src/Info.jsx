import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 

export default function Info() {

    return (
      <div className="info-container">
        <img src="avatar.png" alt="avatar" width="350px"/>
        <h1>Miłosz Łatanik</h1>
        <h2>Frontend Developer Wannabe</h2>
        <a href="mailto:eakjothundal@gmail.com">
        <div className="info--button">
        <FontAwesomeIcon icon={faEnvelope} className="email-icon"/> <p className="info--email">Email</p>
        </div>
        </a>
      </div>
    )
  }
  
  