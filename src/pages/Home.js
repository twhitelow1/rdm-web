import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Properties from '../components/Home/Properties';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Rentals from '../components/Home/Rentals';
import "../styles/main.css";


function Home() {

    return (
      <div className="App">
        <main>
            <HeroSection />
            <Properties />
            <Rentals />
            <About />
            <Contact />


        </main>
        <footer className="site-footer">
          <div className="site-footer-bottom">
              <div className="container">
                  <div className="row ">
  
                      <div className="col-lg-12 col-12 mt-5 d-flex justify-content-center flex-column align-items-center ">
  
                          <p className="copyright-text">Copyright © 2023 Resort Development Marketing</p>
                          <p className="copyright-text">Website Developed by: <a href="https://todd.whitelow.tech" style={{ color: '#8fc8f3 !important'}}>Todd Whitelow</a></p>
                      </div>
  
                  </div>
              </div>
          </div>
        </footer>
      </div>
    );
  }

export default Home;