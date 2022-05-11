import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body text-left">
        <p className=" text-accent">{review.text}</p>
      </div>
      <div className="pb-4 ml-8 flex items-center">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 p-1">
            <img src={review.img} alt="" />
          </div>
        </div>
        <div className="ml-4">
          <h5 className="font-semibold text-accent">{review.name}</h5>
          <p>{review.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
