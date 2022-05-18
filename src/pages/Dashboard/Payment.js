import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0g7kHBvOlerm2EEroltSS1rRM2MHgJAVMRp27pdfsSh1pa8WNrNq8ntLvB4F4nusQdyvSzmHoYcq6grGkhTMfX0045fMYQvO"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [processing, setProcessing] = useState(false);

  const url = `https://boiling-anchorage-37217.herokuapp.com/bookingInfo/${appointmentId}`;
  const { data: appointment, isLoading } = useQuery(
    ["appointment", appointmentId],
    () =>
      fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );
  if (isLoading || processing) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-1/2 mx-auto">
      <div class="card max-w-lg my-8 bg-base-100 shadow-xl">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello {appointment.patientName}
          </p>
          <h3 class="card-title">Please Pay For {appointment.treatment}</h3>
          <p>
            Your Appointment: {appointment.date} at {appointment.slot}
          </p>
          <p>Price: ${appointment.price}</p>
        </div>
      </div>
      <div class="card max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              setProcessing={setProcessing}
              appointment={appointment}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

// pk_test_51L0g7kHBvOlerm2EEroltSS1rRM2MHgJAVMRp27pdfsSh1pa8WNrNq8ntLvB4F4nusQdyvSzmHoYcq6grGkhTMfX0045fMYQvO
