import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import './swiper.css';

// Import required modules
import { EffectCards, Pagination } from 'swiper/modules';

export default function SwiperCardEffect() {
  return (
    <div className="page-container">
      <div className="swiper-container">
        <Swiper
          effect="cards" // 3D Card effect
          grabCursor={true} // Allow mouse dragging
          slidesPerView={1} // Show one card at a time
          spaceBetween={30} // Space between slides
          pagination={{
            clickable: true, // Enable pagination
          }}
          modules={[EffectCards, Pagination]} // Import the necessary modules
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <h2>#1</h2>
                <h3>Card 1</h3>
                <p>Description for card 1</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <h2>#2</h2>
                <h3>Card 2</h3>
                <p>Description for card 2</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <h2>#3</h2>
                <h3>Card 3</h3>
                <p>Description for card 3</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-content">
                <h2>#4</h2>
                <h3>Card 4</h3>
                <p>Description for card 4</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
