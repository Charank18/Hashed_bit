import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();

    return (
        <div>
            <h2>Movie Details</h2>
            <p>Details for Movie ID: {id}</p>
            <Link to={`/book/${id}`}>
                <button>Book Seat</button>
            </Link>
        </div>
    );
}
