import React from "react";
import quote from "../../assets/icons/quote.svg";
import ReviewCard from "./ReviewCard";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const Review = () => {
  const reviews = [
    {
      _id: 1,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people1,
    },
    {
      _id: 2,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people2,
    },
    {
      _id: 3,
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      address: "California",
      img: people3,
    },
  ];
  return (
    <div className="lg:mt-0 p-14 mb-20">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-secondary font-bold">Testimonial</h5>
          <h1 className="text-4xl text-accent">What Our Patients Says</h1>
        </div>
        <img className="lg:w-48 w-24" src={quote} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 mx-6 my-10">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
