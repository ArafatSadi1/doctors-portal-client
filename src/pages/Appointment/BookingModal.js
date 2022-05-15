import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, 'PP');

  const handleBooking = async(event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;
    const bookingInfo = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone
    }
    const url = 'http://localhost:5000/bookingInfo';
    const {data} = await axios.post(url, bookingInfo);
    // for now to close the modal
    if(data.success){
      toast(`Appointment is set, ${formattedDate} at ${slot}`)
    }
    else{
      toast.error(`Already have an appointment on ${data.bookingInfo?.date} at ${data.bookingInfo?.slot}`)
    }
    refetch()
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user.displayName}
              placeholder="Full Name"
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user.email}
              placeholder="Email"
              className="input input-bordered w-full max-w-lg"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
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
