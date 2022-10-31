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
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="lg:w-[71%] px-6 py-24 text-lg mx-auto">
        <p className="text-center">
          Visit{" "}
          <Link href="/nearbalkans" className="font-bold cursor-pointer">nearbalkans.org</Link> and
          make sure to follow us on our social and community channels!
        </p>
        <div className="flex justify-between pt-10 w-full lg:mx-auto text-2xl lg:flex lg:w-[540px] lg:items-center">
          <Link href="/nearbalkans" className="hidden lg:block">
            <img src="/assets/vector/NEAR logo.svg" alt="" />
          </Link>
          <div className="hidden lg:block">
            <div class="border-gray-200 h-11 border-solid border-r-2 lg:mx-[11px] mx-1.5"></div>
          </div>
         <Link href="#"><FontAwesomeIcon icon={faTwitter}/></Link> 
         <Link href="#"><FontAwesomeIcon icon={faDiscord} /></Link> 
         <Link href="#"><FontAwesomeIcon icon={faTelegram} /></Link> 
         <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link> 
         <Link href="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link> 
         <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link> 
         <Link href="#"><FontAwesomeIcon icon={faMedium} /></Link> 
        </div>
        <div>
          <ul className="flex flex-col items-center pt-10 lg:flex-row lg:justify-center lg:gap-[49px] lg:items-center">
            <Link href="#">NEAR Balkans 2022</Link>
            <Link href="#">info@nearbalkans.org</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </ul>
        </div>
        <div>
          <p className="text-center pt-10">
            NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia,
            Montenegro, North Macedonia, Serbia, and Slovenia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
