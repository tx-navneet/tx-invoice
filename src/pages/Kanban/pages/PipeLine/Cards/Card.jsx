/* eslint-disable react/prop-types */
import React from 'react';
import { RxDotsHorizontal } from 'react-icons/rx';

const Card = ({ card }) => (

   <>

  <div className="card card-border spipeline-card">
    <div className="card-body">
      <div className="media">
        {/* Logo Section */}
        <div className="media-head">
          <div className="avatar avatar-logo avatar-rounded">
            <img src={card.logo} alt="Logo" className="img-fluid rounded-full" />
          </div>
        </div>

        {/* Card Details */}
        <div className="media-body">
        <div className="div d-flex justify-between items-center">

          <div className="brand-name fw-bold capitalize ">{card.brandName}</div>
          <div className="div">
          <button className='' >

            <RxDotsHorizontal />
          </button>
          </div>
        </div>
          <div className="price-estimation ">
            {card.priceEstimation}
          </div>
          <div className="brand-cat text-muted">{card.brandCategory}</div>
          <div className="media align-items-center mt-2">
            {/* User Avatar */}
            <div className="media-head">
              <div className="avatar avatar-xs avatar-rounded d-4 d-flex">
                <img
                  src={card.userAvatar}
                  alt="User Avatar"
                  className="avatar-img img-fluid"
                />
              </div>
            </div>
            {/* Duration */}
            <div className="media-body ms-2">
              <p className="mb-0 text-sm text-secondary">{card.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default Card;

