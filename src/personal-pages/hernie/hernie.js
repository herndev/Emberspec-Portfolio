import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoGoogle,
  IoCall,
} from "react-icons/io5";
import { Link } from "react-router-dom";

function HerniePage() {
  const tags = [
    "Clever",
    "Programmer",
    "Dog Lover",
    "Cat Lover",
    "Billiard Player",
    "Freelancer",
    "Full Stack Developer",
    "Solver",
  ];

  return (
    <div id="profile-hernie" className="bg-section bg-white">
      <section>
        <div className="hernie-banner"></div>
        <div className="text-center">
          <img
            src="img/hernie/me.png"
            alt=""
            height={200}
            className="top-100"
          />
        </div>
        <div className="top-200">
          <div className="row p-3">
            <div className="col-lg-6 brb-1-orange pb-3 px-4">
              <h4 className="font-weight-bold m-0">Hernie Jabien</h4>
              <p className="text-primary text-sub m-0">Software Developer</p>
            </div>
            <div className="col-lg-6 text-right">
              <p className="pr-3">
                <a
                  href="http://hernie-jabien.com"
                  className="hover-underline-none"
                >
                  www.hernie-jabien.com
                </a>
              </p>
              <Link
                to={{ pathname: "https://www.facebook.com/dota500/" }}
                target="_blank"
              >
                <IoLogoFacebook color="#1877F2" size={35} className="mr-2" />
              </Link>
              <Link
                to={{ pathname: "https://github.com/herndev" }}
                target="_blank"
              >
                <IoLogoGithub color="#231E1B" size={35} className="mr-2" />
              </Link>
              <Link
                to={{ pathname: "https://twitter.com/herndev" }}
                target="_blank"
              >
                <IoLogoTwitter color="#1DA1F2" size={35} className="mr-2" />
              </Link>
              <Link
                to={{ pathname: "https://instagram.com/hern.dev" }}
                target="_blank"
              >
                <IoLogoInstagram color="#E1306C" size={35} className="mr-2" />
              </Link>
              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/hernie-jabien-6694aa155/",
                }}
                target="_blank"
                className="px-2"
              >
                <IoLogoLinkedin color="#1877F2" size={35} className="mr-2" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col mx-3">
              <small className="form-inline display-centerx-md">
                <Link
                  to={{
                    pathname: "mailto:herniejabien45@gmail.com",
                  }}
                  target="_blank"
                  className="px-2 display-centery text-dark hover-underline-none"
                >
                  <IoLogoGoogle color="#FD1D1D" size={20} className="mr-2" />
                  herniejabien45@gmail.com
                </Link>
                <Link
                  to={{
                    pathname: "tel:+639123456789",
                  }}
                  target="_blank"
                  className="px-2 display-centery text-dark hover-underline-none"
                >
                  <IoCall color="#00aa71" size={20} className="mr-2" />
                  +639123456789
                </Link>
              </small>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto mb-4 px-4 py-5">
              <div className="row display-centerx">
                {tags.map((e) => (
                  <div
                    key={e}
                    className="crv-25 bg-gray py-2 px-3 text-white mx-2 mt-2 bio-tag text-dark"
                  >
                    <p className="m-0 font-weight-bold">
                      <small>{e}</small>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row top-200">
          <div className="col bg-gray pb-5 pt-4">
            <div className="row">
              <div class="col-md-10 px-0 mx-auto card text-center project-counter-personal crv-8 bx-shadow top-50">
                <table className="">
                  <tbody className="">
                    <tr class="">
                      <th className="pb-0 pt-1 font-weight-bold">Websites</th>
                      <th className="pb-0 pt-1 font-weight-bold">
                        Mobile Apps
                      </th>
                      <th className="pb-0 pt-1 font-weight-bold">
                        Happy Clients
                      </th>
                    </tr>
                    <tr className="bg-blue">
                      <td class="pb-1">154</td>
                      <td class="pb-1">102</td>
                      <td class="pb-1">200+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <h5
                  className="display-inline-block pb-2 brb-anim-normal"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  CERTIFICATES
                </h5>
                <div className="px-3 mt-3">
                  <Carousel
                    autoPlay
                    interval="5000"
                    showIndicators={false}
                    infiniteLoop
                    transitionTime="500"
                    showStatus={false}
                    // showArrows={false}
                    emulateTouch
                    // showThumbs={false}
                  >
                    <div className="item">
                      <img
                        src="img/certificates/frontend.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/javascript.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/sql.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/python.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/python2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/flutter.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/react.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/website.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/wordpress.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="item">
                      <img
                        src="img/certificates/firebase.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row top-100">
        <div className="col display-center qoute">
          <div className="text-center">
            <h1 className="display-inline-block">❝</h1>A clever person solves a
            problem.
            <p>A wise person AVOIDS it.</p>
            <p>
              <small>- Albert Einstein</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerniePage;
