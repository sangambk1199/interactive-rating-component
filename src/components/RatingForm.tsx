"use client"

import NumericRating from '@/components/NumericRating'
import Image from 'next/image'

type RatingFormProps = {
    rating: number,
    onRatingChange: (value: number) => void,
    onFormSubmit: (e: any) => void
}

export default function RatingForm({rating, onRatingChange, onFormSubmit}: RatingFormProps) {

    return (
        <form onSubmit={ onFormSubmit } className="flex flex-col items-start">
            <div className="icon-container inline-block p-3 bg-gray-700 aspect-square rounded-full mb-5">
                <Image src="/icon-star.svg" width={16} height={16} alt='Star' />
            </div>

            <h1 className="text-2xl font-medium mb-3">How did we do?</h1>
            
            <p className="mb-6 text-gray-400 text-sm leading-relaxed">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>

            <div className="flex justify-between w-full mb-8">
                {[1, 2, 3, 4, 5].map(rating => <NumericRating key={rating} ratingScore={rating} onRatingChange={onRatingChange} />)}
            </div>

            <button disabled={ !rating } className='w-full bg-orange-500 rounded-full p-3 uppercase tracking-widest font-medium hover:bg-white hover:text-orange-500 disabled:opacity-75 disabled:cursor-not-allowed'>Submit</button>
        </form>
    );
}