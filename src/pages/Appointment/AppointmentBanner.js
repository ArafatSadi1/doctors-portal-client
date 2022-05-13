import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid #0FCFEC;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: #0FCFEC;
    color: #0FCFEC;
  }
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    color: #3A4256;
  }
`;
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:mx-24 gap-8 lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist chair"
        />
        <div className="card bg-base-100 shadow-2xl">
        <style>{css}</style>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: 'my-selected',
              today: 'my-today'
            }}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
