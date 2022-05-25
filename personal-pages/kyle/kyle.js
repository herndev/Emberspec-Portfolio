import React from "react";
import "../../assets/css/timajo.css";
import ProfileImage from "../../assets/images/timajo/profile-image.jpg";
import {
  IoSchool,
  IoLocation,
  IoMail,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoDiscord,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function KylePage() {
  return (
    <div id="profile-timajo" className="py-5 bg-section">
      <section className="personal-info px-3 py-5 px-lg-4">
        <div className="personal-info-content shadow position-relative p-3 mt-3">
          <div className="position-relative image-container">
            <div className="profile-image text-center mb-3">
              <img
                src={ProfileImage}
                alt="kyle joseph timajo"
                className="timajo-image position-relative"
              />
            </div>
            <div className="name text-center mb-3">
              <h3 className="font-nunito font-weight-700 text-orange">
                Kyle Joseph O. Timajo
              </h3>
            </div>
            <div className="about-me pl-3">
              <div className="title">
                <h4 className="text-blue font-nunito font-weight-600">
                  About Me
                </h4>
              </div>
              <div className="about-description pl-3 font-nunito">
                <h5 className="text-gray">
                  I'm a student developer who loves to learn web development,
                  mobile development and machine learning.
                </h5>
              </div>
              <div className="contact-info font-nunito text-gray pl-3 mb-3">
                <div className="school d-flex align-items-center">
                  <IoSchool color="#0569D7" size={22} className="mr-2" />
                  <h6 className="pt-2">Studied BSIT at USTP</h6>
                </div>
                <div className="address d-flex align-items-center">
                  <IoLocation color="#0569D7" size={22} className="mr-2" />
                  <h6 className="pt-2">Compol, Catarman, Camiguin</h6>
                </div>
                <div className="email d-flex align-items-center">
                  <IoMail color="#0569D7" size={22} className="mr-2" />
                  <h6 className="pt-2">timajokyle24@gmail.com</h6>
                </div>
              </div>
            </div>
            <div className="socials text-center">
              <Link
                to={{ pathname: "https://www.facebook.com/KyleTimajo16/" }}
                target="_blank"
                className="px-2"
              >
                <IoLogoFacebook color="#1877F2" size={35} className="mr-2" />
              </Link>
              <Link to={"/profile-timajo"} target="_blank" className="px-2">
                <IoLogoLinkedin color="#1877F2" size={35} className="mr-2" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/kyle-joseph" }}
                target="_blank"
                className="px-2"
              >
                <IoLogoGithub color="#231E1B" size={35} className="mr-2" />
              </Link>
              <Link
                to={{
                  pathname: "https://discord.com/users/756036434519130115",
                }}
                target="_blank"
                className="px-2"
              >
                <IoLogoDiscord color="#7289DA" size={35} className="mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KylePage;
