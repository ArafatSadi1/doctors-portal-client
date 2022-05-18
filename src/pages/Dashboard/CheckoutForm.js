import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ appointment, setProcessing }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, patient, patientName, date, slot, treatment } =
    appointment;
  useEffect(() => {
    fetch(
      "https://boiling-anchorage-37217.herokuapp.com/create-payment-intent",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || " ");

    setSuccess("");
    // setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intentError) {
      // setProcessing(false)
      setCardError(intentError.message);
    } else {
      setCardError("");
      setSuccess("Congrats! You payment is complete");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);

      // store payment data on database
      const booking = {
        appointmentId: _id,
        transactionId: paymentIntent.id,
        patient: patient,
        patientName: patientName,
        date: date,
        slot: slot,
        treatment: treatment,
      };
      fetch(
        `https://boiling-anchorage-37217.herokuapp.com/bookingInfo/${_id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(booking),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    // setProcessing(false)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-success btn-sm mt-4"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          {success}
          <p>
            Your Transaction Id Is:
            <span className="text-orange-500">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
