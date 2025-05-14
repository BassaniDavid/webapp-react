import axios from "axios";
import { useState } from "react"

const ReviewForm = ({ movie_id, refreshReviews }) => {

    const [formData, setFormData] = useState({
        name: '',
        text: '',
        vote: 5
    })

    const handleFormData = (e) => {
        const { name, value } = e.target;
        let currentValue = value;
        if (name === 'vote') {
            currentValue = parseInt(value);
        }

        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }))
    }


    const sendData = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3000/movies/${movie_id}/reviews`, formData)
            .then(response => {
                console.log(response)
                refreshReviews()
            }
            )
            .catch(err => console.log(err))
    }



    return (
        <form className="card p-4" onSubmit={sendData}>
            <div>
                <label htmlFor="review-name" className="form-label">name</label>
                <input type="text" id="review-name" name="name" placeholder="inserisci il tuo nome" className="form-control mb-4" value={formData.name} onChange={handleFormData} />
            </div>
            <div>
                <label htmlFor="review-vote" className="form-label">vote</label>
                <textarea type="number" min={1} max={5} id="review-vote" name="vote" rows="1" placeholder="5" className="form-control mb-4" value={formData.vote} onChange={handleFormData} />
            </div>
            <div>
                <label htmlFor="review-text" className="form-label">review</label>
                <textarea type="text" id="review-text" name="text" placeholder="inserisci la tua recensione" rows="4" className="form-control mb-4" value={formData.text} onChange={handleFormData} />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success px-5">send</button>
            </div>

        </form>
    )

}

export default ReviewForm