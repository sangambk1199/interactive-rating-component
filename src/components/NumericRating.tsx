type NumericRatingProps = {
    rating: number,
    onRatingChange: (rating: number) => void
}

export default function NumericRating({rating, onRatingChange}: NumericRatingProps) {
    return (
        <div>
            {/* onChange={() => onRatingChange(rating)} */}
            <input type="radio" className="hidden peer" id={ 'rating-' + rating } name="numeric-rating"  
                value={rating} onChange={() => onRatingChange(rating)} />
            <label htmlFor={ 'rating-' + rating } className="block p-3 bg-gray-700 opacity-30 aspect-square rounded-full flex-shrink-0 w-12 h-12 text-center cursor-pointer hover:bg-orange-500 hover:opacity-100 peer-checked:opacity-100">
                {rating}
            </label>
        </div>
    )
}