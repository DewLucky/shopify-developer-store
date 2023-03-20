import React from "react";
import info from "../../images/info-button.png";
import play from "../../images/play-logo.png";
import question from "../../images/question-logo.png";
import email from "../../images/email.png";
import rocket from "../../images/rocket.png";
import account from "../../images/account.png";
import brand from '../../images/brand-logo.webp'

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="left-menu">
            <img className="brand-logo" src={brand} alt="branch-logo" />
            <p className="brand-text">Super Assistant</p>
            <button className="btn growth-btn">Growth</button>
            <div className="search-bar">
              <input
                type="text"
                placeholder='Search what you need eg. "Return & Refund"'
              />
            </div>
          </div>
          <div className="right-menu">
            <img src={info} alt="" />
            <img src={play} alt="" />
            <img src={question} alt="" />
            <img src={email} alt="" />
            <button className="btn upgrade-btn">
              <img src={rocket} alt="" /> Upgrade
            </button>
            <div className="user-container">
              <img className="user-img" src={account} alt="" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
