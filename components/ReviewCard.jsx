import StarRating from "./StarRating";

const ReviewCard = ({ data }) => {

    const { vote, text, name } = data

    return (
        <div className="card p-4 mb-4">
            <div className="d-flex justify-content-between">
                <p>{name}</p>
                <p>vote:<StarRating data={vote} /></p>
            </div>
            <p>{text}</p>

        </div>
    )
}

export default ReviewCard;