import React from "react";

import Hero from "../partials/hero";
import Head from "../partials/head";
import Footer from "../partials/footer";

const About = () => {
  return (
    <>
      <Head />
      <div className="about">
        <div class="person">
          <div class="container">
            <div class="container-inner">
              <img class="circle" src="" />
              <img
                class="img img1"
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1717984338/yo_merito_dt4mxw.png"
              />
            </div>
          </div>
          <div class="divider"></div>
          <div class="name">Elias</div>
          <div class="title">Jefe Panadero</div>
        </div>
        <div class="person">
          <div class="container">
            <div class="container-inner">
              <img class="circle" src="" />
              <img
                class="img img2"
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1719526588/devsito_g9j4ks.png"
              />
            </div>
          </div>
          <div class="divider"></div>
          <div class="name">Elias</div>
          <div class="title">Junior Developer</div>
        </div>
        <div class="person">
          <div class="container">
            <div class="container-inner">
              <img class="circle" />
              <img
                class="img img3"
                src="https://res.cloudinary.com/dtmziqubb/image/upload/v1719526730/uxc_blyigw.png"
              />
            </div>
          </div>
          <div class="divider"></div>
          <div class="name">Elias</div>
          <div class="title">Junior UX</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
