import React from "react";

function About() {
    return (
        <section className="about-section section-padding" id="about">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                        <div className="services-info">
                            <h2 className=" mb-4">Meet Matt</h2>

                            <p >Born and raised amidst the majestic peaks of Colorado, Matt's roots trace back to the snowy slopes of Aspen, where he carved his first paths as a ski racer. </p>
                            <p >In his teen years he raced down the slopes of Vail and Beaver Creek when he moved to Eagle County.</p>
                            <p >After graduating at Battle Mountain High School, Matt ventured off to the front range of Colorado for college, broadening his horizons and embracing new experiences.</p>

                            <h6 className="mt-4">The Mountains Will Call...</h6>

                            <p >Yet, the call of the mountains was irresistible. Returning to Vail, Matt discovered his second passion: real estate.</p>
                            <p >His intimate knowledge of the area, combined with his enthusiasm for matching people with their dream properties, has made him an indispensable asset to the local community. </p>
                            <p >Whether you're looking to buy, sell, or manage property in Vail, trust in Matt — a local working for locals, committed to ensuring you find exactly what you're searching for.</p>

                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="about-text-wrap">
                            <img src="images/matt/matt-temporary.jpg" className="about-image img-fluid" alt=" matt with family" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;