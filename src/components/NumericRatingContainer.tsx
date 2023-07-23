import NumericRating from "./NumericRating";

export default function NumericRatingContainer() {
    return (
        <div className="flex justify-between w-full mb-8">
            {
                [1, 2, 3, 4, 5].map(rating => <NumericRating key={rating} ratingScore={rating} />)
            }
        </div>
    )
}