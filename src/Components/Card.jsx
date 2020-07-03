import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                    <img src={props.imgsrc} className="mb-2" alt="img" />
                    <div className="card-body text-center">
                        <h5 className="card-title mb-3">{props.title}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;