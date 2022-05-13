import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableServices from "./AvailableServices";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-8">
      <h5 className="text-secondary text-xl font-semibold text-center">
        Available Appointments on {format(date, "PP")}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6">
        {services.map((service) => (
          <AvailableServices
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AvailableServices>
        ))}
      </div>
      {treatment && (
        <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
