import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://boiling-anchorage-37217.herokuapp.com/bookingInfo?email=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user]);

  return (
    <div class="overflow-x-auto mx-8">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((a, index) => (
            <tr>
              <th>{index + 1}</th>
              <th>{a.patientName}</th>
              <td>{a.treatment}</td>
              <td>{a.date}</td>
              <td>{a.slot}</td>
              <td>
                {a.price && !a.paid && (
                  <Link to={`/dashboard/payment/${a._id}`}>
                    <button className="btn btn-xs btn-success">Pay</button>
                  </Link>
                )}
                {a.price && a.paid && (
                  <div>
                    <p className="text-green-600 font-semibold">paid</p>
                    <p>
                      Your Transaction Id: <span className="text-green-600">{a.transactionId}</span>
                    </p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
