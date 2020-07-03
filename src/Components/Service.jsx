import React from 'react';
import Card from './Card';
import Sdata from './Sdata';


const Services = () => {
    return (
        <>
            <section id="service">
                <div className="my-5">
                    <h2 className="text-center">Our Core Services</h2>
                    <p className="text-center fonts-16 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan
                    <br />nisi Ut ut felis congue nisl hendrerit commodo.</p>
                </div>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-xl-5 gy-lg-3 gy-3 gy-md-3">
                                {
                                    Sdata.map((val)=>{
                                        return <Card key={val.id} imgsrc={val.imgsrc} title={val.title} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services;