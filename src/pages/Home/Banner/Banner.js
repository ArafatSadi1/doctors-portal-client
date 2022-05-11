import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="hero min-h-screen bg-hero-pattern h-screen bg-center relative mb-8"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold text-accent">
            Your New Smile Starts Here
          </h1>
          <p className="py-6 text-accent">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
