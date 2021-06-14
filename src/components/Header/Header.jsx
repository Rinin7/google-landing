import React from "react";
import AppIcon from "../../assets/icons/appsicon.png";

function Header() {
  return (
    <div className="header">
      <div className="header__business">
        <a className="header__title">About</a>
        <a className="header__title">Store</a>
      </div>
      <div className="header__business">
        <a className="header__title">Gmail</a>
        <a className="header__title">Images</a>
        <img className="header__icon" src={AppIcon} alt="nine dots structured three by three to signify apps icon" />
        <img
          class="gb_Ca gbii"
          src="https://lh3.googleusercontent.com/ogw/ADea4I5uYxazV7kvvXCvGUM73w4U2hiTg9gC5cCF32YA=s32-c-mo"
          srcset="https://lh3.googleusercontent.com/ogw/ADea4I5uYxazV7kvvXCvGUM73w4U2hiTg9gC5cCF32YA=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADea4I5uYxazV7kvvXCvGUM73w4U2hiTg9gC5cCF32YA=s64-c-mo 2x "
          alt="google profile picture of Ryan Doubinin"
        />
      </div>
    </div>
  );
}

export default Header;
