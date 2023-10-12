import React from 'react';
import '../pages/SignIn.css';

const Socials = () => {
  return (
    <div className="socials__wrapper">
      <ul className="socials__links">
        <li>
          <a href="https://github.com/dilsekhpatnaik7" target="blank" className="social__link">
            <i className="ri-github-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/dilsekhed"
            target="blank"
            className="social__link"
          >
            <i className="ri-twitter-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dilsekhpatnaik7/"
            target="blank"
            className="social__link"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/"
            target="blank"
            className="social__link"
          >
            <i className="ri-discord-fill"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;