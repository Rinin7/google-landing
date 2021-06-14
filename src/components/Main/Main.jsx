import React from "react";
import "./Main.scss";
import GoogleLogo from "../../assets/logos/googlelogo.png";
import MagnifyGlass from "../../assets/icons/magnifyglass.png";
import Microphone from "../../assets/icons/microphone.png";

function Main() {
  return (
    <div className="main">
      <img className="main__logo" src={GoogleLogo} alt="Google logo" />
      <div className="main__search">
        <img className="main__search-icon" src={MagnifyGlass} />
        <input className="main__search-bar" type="text" />
        <img className="main__search-icon" src={Microphone} />
      </div>
      <div className="main__button-container">
        <button className="main__button">Google Search</button>
        <button className="main__button">I'm Feeling Lucky</button>
      </div>
      <span className="main__language">
        Google offered in:{" "}
        <a className="main__link" href="#">
          Français
        </a>
      </span>
    </div>
  );
}

export default Main;
