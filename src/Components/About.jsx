import React from 'react';
import Common from './Common';
import about from '../image/about.png'

const About = () => {

    var heading1 = `Creative Solution to Grow Your`;
    var heading2= `Business Profit`;
    var para = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id labore rerum aperiam deserunt.
    Tenetur tempore voluptas, possimus voluptatibus excepturi beatae.`
    return (
        <>
            <section className="banner d-flex align-items-center">
                <Common heading1={heading1} heading2={heading2} para={para} imgsrc={about} visit="/contact" btnname="Contact Us"/>
            </section>
        </>
    )
}
export default About;