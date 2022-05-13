import axios from "axios";
import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = async(event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const date = event.target.date.value;
    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const bookingInfo = {
      name: name,
      email: email,
      phone: phone,
      slot: slot,
      date: date
    }
    const url = 'http://localhost:5000/bookingInfo';
    const {data} = await axios.post(url, bookingInfo);
    console.log(data)
    // for now
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-semibold text-xl text-accent">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-8"
          >
            <input
              type="text"
              name="date"
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-lg"
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-lg"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-lg"
            />
            <input type="submit" className="btn btn-accent w-full text-white" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
