import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import SideBar from "./components/sidebar";
import ContactForm from "./components/contactform";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import KylePage from "./personal-pages/kyle/kyle";
import HerniePage from "./personal-pages/hernie/hernie";
import Footer from "./components/footer";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-3 col-md-4 mt-dynamic rp-md-0">
            <SideBar />
            <div className="hidden-md w-100">
              <ContactForm />
              <div className="emberspec-info px-3 mt-5">
                <div className="footer-logo">
                  <div class="main-header text-orange about-widget">
                    <div class="footer-logo">
                      <a
                        href="https://emberspec.com"
                        className="display-inline-block"
                      >
                        <img
                          src="https://emberspec.com/uploads/setting/logo.png"
                          alt="Logo"
                          style={{ height: "60px" }}
                        />
                      </a>
                    </div>
                    <div class="widget-content mt-4">
                      <div class="pull-right upper-right clearfix">
                        <div class="upper-column info-box ml-0">
                          <div class="icon-box">
                            {/* <span class="flaticon-clock"></span> */}
                            <img src="img/time.png" alt="" />
                          </div>
                          <ul>
                            <li>
                              <strong>Office Time:</strong>
                            </li>
                            <li>Monday to Saturday 9:00am - 6:00pm</li>
                          </ul>
                        </div>

                        <div class="upper-column info-box ml-0 my-3">
                          <div class="icon-box">
                            {/* <span class="flaticon-phone-call"></span> */}
                            <img src="img/email.png" alt="" />

                          </div>
                          <ul>
                            <li>
                              <strong>Call Us:</strong>
                            </li>
                            <li>+63 927 867-6687</li>
                          </ul>
                        </div>

                        <div class="upper-column info-box ml-0">
                          <div class="icon-box">
                            {/* <span class="flaticon-email"></span> */}
                            <img src="img/call.png" alt="" />
                          </div>
                          <ul>
                            <li>
                              <strong>Email:</strong>
                            </li>
                            <li>help@emberspec.com</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 rp-md-0">
            <div className="glass-card bg-white mt-dynamic" id="res-nav">
              <Nav />
            </div>

            <div className="glass-card mt-4 content bg-white rm-md-0">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/profile-timajo" component={KylePage} />
                <Route path="/profile-jabien" component={HerniePage} />
              </Switch>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
