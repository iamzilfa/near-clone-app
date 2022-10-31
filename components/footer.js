import {
  ImTwitter,
  ImTelegram,
  ImFacebook,
  ImLinkedin2,
  ImInstagram,
} from "react-icons/im";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
// import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faDiscord,
  faTelegram,
  faLinkedinIn,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faTelegram} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faMedium} />
        </div>
        <div>
          <ul>
            <li>NEAR Balkans 2022</li>
            <li>info@nearbalkans.org</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <p>
            NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia,
            Montenegro, North Macedonia, Serbia, and Slovenia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
