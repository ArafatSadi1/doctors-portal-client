import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from '../../../assets/images/bg.png'

const Banner = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} class="hero min-h-screen bg-hero-pattern w-full h-screen bg-center relative">
      <div class="hero-content px-12 flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold text-accent">Your New Smile Starts Here</h1>
          <p class="py-6 text-accent">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
