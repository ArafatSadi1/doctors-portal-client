import React from "react";

const ServiceCard = ({service}) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={service.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-accent">{service.serviceName}</h2>
        <p className=" text-accent">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
