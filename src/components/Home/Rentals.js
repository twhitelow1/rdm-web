import React from "react";

function Rentals() {
    return (
        <section className="rentals-section section-padding" id="rentals">
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-12 text-center">
                    <h2 className="mb-4 text-white">RENTALS</h2>
                </div>

                <div className="col-lg-12 col-12">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-5 artists-thumb">
                            <div className="artists-image-wrap">
                                <img src="images/homes/edwardshome/Edwardshome.webp"
                                    className="artists-image img-fluid" />
                            </div>

                            <div className="artists-hover">

                                <p>
                                    <strong>4 Bedrooms, 4 Bathrooms</strong>
                                </p>
                                <a href="/listing" style={{color: '#8fc8f3', fontSize:'1.5em'}} >More Information</a>
                            </div>
                        </div>
                        <div className="col-lg-5 artists-thumb">
                        <div className="artists-image-wrap">
                            <img src="images/Properties/Sold/UpperBorders208/UpperBorders208MLS-28.jpg"
                                className="artists-image img-fluid" />
                        </div>

                        <div className="artists-hover">
                            <p>
                                <strong>4 Bedrooms, 4 Bathrooms</strong>
                            </p>

                                <a href="/listing" style={{color: '#8fc8f3', fontSize:'1.5em'}} >More Information</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Rentals;