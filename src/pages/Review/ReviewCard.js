import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body text-left">
        <p className=" text-accent">{review.text}</p>
      </div>
      <figure class="pb-4">
        <img src={review.img} alt="Shoes" class="rounded-full border-secondary border-2 w-16" />
        <div className="ml-4">
          <h5 className="font-semibold text-accent">{review.name}</h5>
          <p>{review.address}</p>
        </div>
      </figure>
    </div>
  );
};

export default ReviewCard;
