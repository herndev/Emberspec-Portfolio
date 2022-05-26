import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function About() {

  return (
    <div id="about">
      <section className="p-3">
        <h4 className="font-weight-bold text-primary-default">
          About Us
        </h4>
        <br />
        <a href="/profile-jabien">Hernie Jabien</a>
        <br />
        <a href="/profile-timajo">Kyyle Timajo</a>
      </section>
    </div>
  );
}

export default About;
