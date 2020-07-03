import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 d-flex flex-column justify-content-center order-2 order-md-1">
                                <h2 className="my-3 font-weight-600">{props.heading1} <span className="color"> {props.heading2}</span></h2>
                                <p className="fonts">{props.para}</p>
                                <div className="button-wrapper mt-3">
                                    <NavLink to={props.visit} className="button">{props.btnname}</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2">
                                <img src={props.imgsrc} className="img-fluid animate" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Common;
