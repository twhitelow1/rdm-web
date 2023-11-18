import React, { useEffect } from 'react';

function Listing() {
    const [isSticky, setSticky] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const listingMenu = document.getElementById('listing-menu');
            const heroSection = document.getElementById('section_1');
        
            if (!navbar || !listingMenu || !heroSection) {
                // Exit the function if any elements are not found
                return;
            }
        
            const navBarHeight = navbar.offsetHeight;
            // Calculate the bottom position of the hero section
            const heroSectionBottom = heroSection.offsetTop + heroSection.offsetHeight;
        
            // Check if the scroll position is past the hero section
            if (window.scrollY > heroSectionBottom - navBarHeight) {
                // Add the 'sticky' class to the listingMenu when scrolling past the hero section
                listingMenu.classList.add('sticky');
            } else {
                // Remove the 'sticky' class when scrolling back up past the hero section
                listingMenu.classList.remove('sticky');
            }
        };
    
        // Delayed execution
        const delay = 100; // milliseconds
        setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
        }, delay);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="App">
          <main>
              
                <section className="hero-section" id="section_1" style={{ background: "url('images/homes/Avonhome/avonhome.webp') no-repeat center", backgroundSize: 'cover' }}>
                  <div className="section-overlay"></div>
                  <div className="container d-flex justify-content-center align-items-center">
                      <div className="row">
                          <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                              {/* Content here if any */}
                          </div>
                      </div>
                  </div>
                </section>
                <section className={`listing-menu ${isSticky ? 'sticky' : ''}`} id="listing-menu" >
                        <div className="row justify-content-between p-2 flex">
                            <div className="col-auto">
                                <span><a href="#" className="back-link" style={{ textDecoration: 'none', color: '#000' }}> ← Back</a> | 123 Main St, Anytown, USA </span>
                            </div>
                            <div className="col-auto">
                                <a href="#" className="share-link" style={{ textDecoration: 'none', color: '#000' }}>
                                    Share
                                    <span className="share-icon" style={{ marginLeft: '5px' }}>⤴</span>
                                </a>
                            </div>
                        </div>
                </section>
              <section id="section-Details" className="is-font-color-light is-background-color-dark" style={{ padding: '1.5em' }}>
                  <div className="info lp-vertical-paddings redesign">
                      <div className="lp-container text-center p-50 mx-auto" style={{ maxWidth: '1000px' }}>
                          <div className="lp-title-group">
                              <h5 className="lp-h2">$40,000,000</h5>
                              <h2 className="lp-h3">1326 Spraddle Creek Road</h2>
                              <p className="lp-text--subtitle info__features"><span> 7 Beds</span>
                                  <span> 10 Baths</span>
                                  <span> 12,113 Sq.Ft. </span></p>
                          </div>
                          <div className="info__buttons-wrap">
                              <a role="button" data-type="CONTACT_US" className="lp-btn lp-btn--outline lp-btn--dark lp-btn--mob-full-width button-style-2">
                                  Inquire Now
                              </a>
                          </div>
                          <div className="info__section">
                              <div className="info__row">
                                  <div className="info__col"><h4 className="lp-h4 info__section-title">Description</h4></div>
                                  <div className="info__col">Perched at the top of Spraddle Creek Estates on over 6 acres stands Vail's newest and most spectacular custom home, offering the most remarkable views of Vail Mountain.  Scheduled for completion this winter, this 7-bed , 10-bath, 12,000 + SF home boast an 8-car garage with gallery, pool, 6-hole putting course, gym, and oxygenated primary suite and family room.</div>
                              </div>
                          </div>
                          <div className="info__section">
                              <div className="info__row">
                                  <div className="info__col"><h4 className="lp-h4 info__section-title">Location</h4></div>
                                  <div className="info__col"><div className="lp-h6">1326 Spraddle Creek Road, Vail, CO 81657</div></div>
                              </div>
                          </div>
                          <div className="info__section">
                              <div className="info__row">
                                  <div className="info__col"><h4 className="lp-h4 info__section-title">Status</h4></div>
                                  <div className="info__col">For Sale</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section id="section-amenities" className="is-font-color-light is-background-color-dark" >
                  <div className="section lp-vertical-paddings">
                      <div className="lp-container p-50 mx-auto" style={{ maxWidth: '1000px' }} /> 
                      <div className="lp-title-group">
                          <h2 className="lp-title-group lp-h2">Property Amenities</h2>
                      </div>
                      <div className="collection ">
                          <div className="item">
                              <h5 className="lp-h5">Interior</h5>
                              <div className="amenities-list-box">
                                  <div className="amenities-list-cell">
                                      <span className="feature">Laundry room</span>
                                      <span className="amenities-value">Gas Dryer Hookup, Washer Hookup</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Appliances</span>
                                      <span className="amenities-value">Dishwasher, Disposal, Microwave, Range, Refrigerator, Washer/Dryer, Wine Cooler</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Flooring</span>
                                      <span className="amenities-value">Carpet, Stone, Wood</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Total Bedrooms:</span>
                                      <span className="amenities-value">7</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Half Bathrooms:</span>
                                      <span className="amenities-value">1</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Three-Quarter Bathrooms:</span>
                                      <span className="amenities-value">5</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Full Bathrooms:</span>
                                      <span className="amenities-value">4</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Other Interior Features</span>
                                      <span className="amenities-value">Elevator, Fireplace - Gas, Jetted Bath, Patio, Pool, Spa/Hot Tub, Vaulted Ceiling(s), Steam Shower</span>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <h5 className="lp-h5">Area &amp; Lot</h5>
                              <div className="amenities-list-box">
                                  <div className="amenities-list-cell">
                                      <span className="feature">Lot Area</span>
                                      <span className="amenities-value">6.37 Acres</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Living area</span>
                                      <span className="amenities-value">12,113 Sq.Ft.</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">MLS® ID</span>
                                      <span className="amenities-value">1008120</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Year Built</span>
                                      <span className="amenities-value">2023</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">View Description</span>
                                      <span className="amenities-value">Mountain(s),Ski Slopes,South Facing</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Type</span>
                                      <span className="amenities-value">RESIDENTIAL</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Status</span>
                                      <span className="amenities-value">For Sale</span>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <h5 className="lp-h5">Exterior</h5>
                              <div className="amenities-list-box">
                                  <div className="amenities-list-cell">
                                      <span className="feature">Stories</span>
                                      <span className="amenities-value">2</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Air conditioning</span>
                                      <span className="amenities-value">Zoned</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Heat type</span>
                                      <span className="amenities-value">Natural Gas, Radiant Floor</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Water Source</span>
                                      <span className="amenities-value">Domestic Water Right</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Garage Space</span>
                                      <span className="amenities-value">8</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Sewer</span>
                                      <span className="amenities-value">Sewer Connected</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Parking</span>
                                      <span className="amenities-value">Attached Garage, Heated Driveway</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Roof</span>
                                      <span className="amenities-value">Synthetic</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Utilities</span>
                                      <span className="amenities-value">Cable Available, Electricity Available, Natural Gas Available, Phone Available, Satellite, Sewer Available, Snow Removal, Trash, Water Available</span>
                                  </div>
                              </div>
                          </div>
                          <div className="item">
                              <h5 className="lp-h5">Finance</h5>
                              <div className="amenities-list-box">
                                  <div className="amenities-list-cell">
                                      <span className="feature">Sales Price</span>
                                      <span className="amenities-value">$40,000,000</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">HOA Fees</span>
                                      <span className="amenities-value">$7,276 quarterly</span>
                                  </div>
                                  <div className="amenities-list-cell">
                                      <span className="feature">Real Estate Tax</span>
                                      <span className="amenities-value">$91,172  yearly </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
          </section>
          <section className="contact-section section-padding section-bg" id="section_6">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 col-12 mx-auto">
                          <h2 className="text-center text-white mb-4">Interested? Let's talk</h2>
                          <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                              <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel" aria-labelledby="nav-ContactForm-tab">
                                  <form className="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                                      <div className="contact-form-body">
                                          <div className="row">
                                              <div className="col-lg-6 col-md-6 col-12">
                                                  <input type="text" name="contact-name" id="contact-name" className="form-control" placeholder="Full name" required />
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-12">
                                                  <input type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                                              </div>
                                          </div>
                                          <input type="text" name="contact-company" id="contact-company" className="form-control" placeholder="Company" required />
                                          <textarea name="contact-message" rows={3} className="form-control" id="contact-message" placeholder="Message" defaultValue={""} />
                                          <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                              <button type="submit" className="form-control">Send message</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


      </main><footer className="site-footer">
              <div className="site-footer-bottom">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12 col-12 mt-5 d-flex justify-content-center flex-column align-items-center">
                              <p className="copyright-text">Copyright © 2023 Resort Development Marketing</p>
                              <p className="copyright-text">Website Developed by: <a href="https://todd.whitelow.tech" style={{ color: '#8fc8f3' }}>Todd Whitelow</a></p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  );
}

export default Listing;
