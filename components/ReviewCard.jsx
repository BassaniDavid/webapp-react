const ReviewCard = ({ data }) => {

    const { vote, text, name } = data

    return (
        <div className="card p-4 mb-2">
            <div className="d-flex justify-content-between">
                <p>{name}</p>
                <p>voto: {vote}</p>
            </div>
            <p>{text}</p>

        </div>
    )
}

export default ReviewCard;