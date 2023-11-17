import React  from "react";

function HeroSection() {
    return (
        <section className="hero-section" id="section_1">
            <div className="section-overlay"></div>

            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">

                    <div className="col-12 mt-auto mb-5 text-center">
                        <small></small>

                        <h1 className="text-white mb-5">Find Your New Home</h1>

                        {/* <a class="btn custom-btn smoothscroll" href="#section_2">View Homes</a> */}
                    </div>

                <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">

                    </div>
                </div>
            </div>

            <div className="video-wrap">
                <video autoPlay loop muted className="custom-video" poster="">
                    <source src="video/EastVail.mp4" type="video/mp4"/> 
                    <source src='video/EastVail.ogg' type='video/ogg;'/>
                    <source src='video/EastVail.webm' type='video/webm;'/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

export default HeroSection;