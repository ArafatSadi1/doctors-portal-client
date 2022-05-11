import React from "react";
import doctorsmall from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <div class="hero min-h-screen">
      <div
        style={{ backgroundImage: `url(${appointment})` }}
        class="hero-content flex-col lg:flex-row lg:px-12 pb-0"
      >
        <img src={doctorsmall} style={{marginTop: "-100px"}} class="max-w-sm lg:max-w-lg hidden lg:block" alt="" />
        <div className="p-4">
          <h5 className="text-secondary font-bold">Appointment</h5>
          <h1 class="text-4xl text-white">Make an appointment Today</h1>
          <p class="py-6  text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
