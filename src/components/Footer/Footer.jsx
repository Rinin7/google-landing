import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__country">Canada</div>
      <div className="footer__links-container">
        <div className="footer__links-info">
          <a className="footer__links" href="#">
            Advertising
          </a>
          <a className="footer__links" href="#">
            Business
          </a>
          <a className="footer__links" href="#">
            How Search Works
          </a>
        </div>
        <div className="footer__links-legal">
          <a className="footer__links" href="#">
            Privacy
          </a>
          <a className="footer__links" href="#">
            Terms
          </a>
          <a className="footer__links" href="#">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
