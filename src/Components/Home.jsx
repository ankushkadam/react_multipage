import React from 'react';
import banner from '../image/banner.png';
import Common from './Common';

const Home = () => {
    var heading1 = "Let's Create Something";
    var heading2="Awesome Together";
    var para = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id labore rerum aperiam deserunt.
    Tenetur tempore voluptas, possimus voluptatibus excepturi beatae.`

    return (
        <>
            <section className="banner d-flex align-items-center">
                <Common  heading1={heading1} heading2={heading2} para={para}  imgsrc={banner} visit="/service" btnname="Learn More"/>
            </section>
        </>
    )
}
export default Home;