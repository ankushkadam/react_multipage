import React from 'react';
import contact from '../image/contact.png';
import { useState } from 'react';

const Contact = (props) => {

    const[data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
        
    });

    const inputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        });
    }
    
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Hello My Name is "${data.name}". My Email id is "${data.email}" and My Phone number is "${ data.phone }". Here is what I Want to Say "${data.message}."`);
    }

    return (
        <>
            <section id="contact">
                <div className="my-5">
                    <h2 className="text-center">Contact us</h2>
                    <p className="text-center fonts-16 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan
                    <br />nisi Ut ut felis congue nisl hendrerit commodo.</p>
                </div>

                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="contact-wrapper">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="text-capitalize my-5">Get in touch with us</h3>
                                        <form onSubmit={formSubmit} >
                                            <div className="mb-4">
                                                <input name="name" value={data.name} onChange={inputEvent} type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="mb-4">
                                                <input name="email" value={data.email} onChange={inputEvent} type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="mb-4">
                                                <input name="phone" value={data.phone} onChange={inputEvent} type="text" className="form-control" placeholder="Phone" />
                                            </div>
                                            <div className="mb-4">
                                                <textarea className="form-control" value={data.message} onChange={inputEvent} name="message" rows="5" placeholder="Message.."></textarea>
                                            </div>

                                            <div className="button-wrapper mt-3 text-center">
                                                <button to="/about" className="button" type="submit" style={{outline:"none", border:"none"}}>Send Message</button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-md-6 d-flex align-items-center mt-5">
                                        <img src={contact} className="img-fluid" alt="img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;