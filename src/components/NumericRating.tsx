type NumericRatingProps = {
    ratingScore: number,
    onRatingChange: (rating: number) => void
}

export default function NumericRating({ratingScore, onRatingChange}: NumericRatingProps) {
    return (
        <div>
            {/* onChange={() => onRatingChange(ratingScore)} */}
            <input type="radio" className="hidden peer" id={ 'rating-' + ratingScore } name="numeric-rating"  
                value={ratingScore} />
            <label htmlFor={ 'rating-' + ratingScore } className="block p-3 bg-gray-700 opacity-30 aspect-square rounded-full flex-shrink-0 w-12 h-12 text-center cursor-pointer hover:bg-orange-500 hover:opacity-100 peer-checked:opacity-100">
                {ratingScore}
            </label>
        </div>
    )
}