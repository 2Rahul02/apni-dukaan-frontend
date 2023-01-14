import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>APNI DUKAAN.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Rahul Sharma</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com"><InstagramIcon/> Instagram</a>
        <a href="http://youtube.com"><YouTubeIcon/>{'\u00A0'}{'\u00A0'}Youtube</a>
        <a href="http://instagram.com"><FacebookIcon/> Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
