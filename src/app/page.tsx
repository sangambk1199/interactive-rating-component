"use client"

import RatingForm from "@/components/RatingForm";
import ThankYouConfirmation from "@/components/ThankYouConfirmation";
import { useState } from "react";

export default function Home() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [rating, setRating] = useState(0);

  const onRatingChange = (value: number) => {  
    setRating(value);
  }

  const onFormSubmit = () => {
    if( ! rating ) return;

    setIsFormSubmitted(true);
  }

  return (
    <div className="container">
      <div className="bg-gray-800 rounded-3xl w-24rem mx-auto p-8">
        { ( isFormSubmitted && rating ) ? <ThankYouConfirmation rating={rating} /> : <RatingForm rating={rating} onRatingChange={onRatingChange} onFormSubmit={onFormSubmit}/> }
      </div>
    </div>
  )
}
