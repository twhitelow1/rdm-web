import React from "react";

function Properties() {
    return (
        <section className="properties-section section-padding" id="properties">
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-12 text-center">
                    <h2 className="mb-4">PROPERTIES</h2>
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
                                    <strong>$800,000</strong>
                                </p>

                                <p>
                                    <strong>F104 Canyon Run, Avon, CO 81620</strong>
                                </p>

                                <p>
                                    <strong>4 Bedrooms, 4 Bathrooms</strong>
                                </p>
                                <a href="/listing" style={{color: '#8fc8f3'}} >View Now</a> | <a href="/resortdevelopmentmarketing/listing.html" style={{color: '#8fc8f3'}} > 3D Tour</a>
                            </div>
                        </div>
                        <div className="col-lg-5 artists-thumb">
                        <div className="artists-image-wrap">
                            <img src="images/properties/sold/UpperBorders208/UpperBorders208MLS-28.jpg"
                                className="artists-image img-fluid" />
                        </div>

                        <div className="artists-hover">
                            <p>
                                <strong>Recently Sold</strong>
                            </p>

                            <p>
                                <strong>208 Upper Borders, Beaver Creek, CO 81620</strong>
                            </p>

                            <p>
                                <strong>4 Bedrooms, 4 Bathrooms</strong>
                            </p>
                            <a href="/listing" style={{color:'#8fc8f3'}} >More Info</a> | <a href="https://my.matterport.com/show/?m=C7dKN9tkpPH&brand=0" target="_blank" style={{color:'#8fc8f3'}} > 3D Tour</a>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Properties;