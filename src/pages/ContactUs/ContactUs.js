import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${appointment})` }}
      className="text-center p-8 my-8"
    >
      <h5 className="text-secondary font-bold">Contact Us</h5>
      <h1 className="text-4xl text-white">Stay connected with us</h1>
      <form className="lg:w-1/3 mx-auto sm:w-3/4 my-8">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Email address"
          type="text"
          name="search"
        />
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md my-4 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Subject"
          type="text"
          name="search"
        />
        <textarea
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mb-6 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Your Message"
          type="text"
          name="search"
        />
        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactUs;
