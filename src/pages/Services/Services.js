import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import ServiceHero from "./ServiceHero/ServiceHero";

const Services = () => {
  const services = [
    {
      _id: 1,
      serviceName: "Fluoride Treatment",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, exercitationem.",
      img: fluoride
    },
    {
      _id: 2,
      serviceName: "Cavity Filling",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, exercitationem.",
      img: cavity
    },
    {
      _id: 3,
      serviceName: "Teeth Whitening",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, exercitationem.",
      img: whitening
    }
  ]
  return (
    <div className="mt-28">
      <h5 className="text-secondary text-center font-bold">OUR SERVICES</h5>
      <h2 className="text-4xl text-accent text-center">Services We Provide</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 mx-6 my-10">
        {
          services.map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
      <ServiceHero></ServiceHero>
    </div>
  );
};

export default Services;
