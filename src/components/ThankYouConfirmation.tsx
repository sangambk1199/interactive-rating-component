import Image from "next/image";

type ThankYouConfirmationProps = {
    rating: number
}

export default function ThankYouConfirmation({ rating }: ThankYouConfirmationProps) {
    return (
        <div className="flex flex-col items-center gap-8">
            <Image src="/illustration-thank-you.svg" width={120} height={120} alt="Credit card flying" />
            <span className="rating-count rounded-full bg-neutral-700 text-orange-400 px-4 py-1">
                You selected {rating} out of 5
            </span>
            <div>
                <h1 className="text-2xl font-medium mb-3 text-center">Thank you!</h1>
                <p className="mb-6 text-gray-400 text-sm leading-relaxed text-center">We appreciate you taking the time to give a rating. If you ever need more support, do not hesitate to get in touch!</p>
            </div>
        </div>
    )
}