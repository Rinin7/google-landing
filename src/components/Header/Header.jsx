import React from "react";
import "./Header.scss";
import AppIcon from "../../assets/icons/appsicon.png";

function Header() {
  return (
    <div className="header">
      <div className="header__business">
        <a className="header__title" href="#">
          About
        </a>
        <a className="header__title" href="#">
          Store
        </a>
      </div>
      <div className="header__personal">
        <a className="header__title" href="#">
          Gmail
        </a>
        <a className="header__title" href="#">
          Images
        </a>
        <div className="header__clickable-image">
          <a className="header__link" href="#">
            <img className="header__icon" src={AppIcon} alt="nine dots structured three by three to signify apps icon" />
          </a>
        </div>
        <div className="header__clickable-image">
          <a className="header__link" href="#">
            <img
              class="header__portrait"
              src="https://lh3.googleusercontent.com/ogw/ADea4I5uYxazV7kvvXCvGUM73w4U2hiTg9gC5cCF32YA=s32-c-mo"
              srcset="https://lh3.googleusercontent.com/ogw/ADea4I5uYxazV7kvvXCvGUM73w4U2hiTg9gC5cCF32YA=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADea4I5uYxazV7kvvXCvGUM73w4U2hiTg9gC5cCF32YA=s64-c-mo 2x "
              alt="google profile picture of Ryan Doubinin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
