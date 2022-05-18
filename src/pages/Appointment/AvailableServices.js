import React from "react";

const AvailableServices = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try Another Day</span>
          )}
        </p>
        <p>
          <span>{slots.length}</span>
          <span> {slots.length > 1 ? "Spaces" : "Space"}</span> Available
        </p>
        <p><small>Price: ${price}</small></p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn modal-button btn-md btn-primary text-white bg-gradient-to-r from-secondary to-primary uppercase"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableServices;
