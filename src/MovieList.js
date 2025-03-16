import { Link } from "react-router-dom";


const movies = [
    { id: 1, title: "Movie 1", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Movie 2", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Movie 3", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Movie 4", image: "https://via.placeholder.com/150" },
    { id: 5, title: "Movie 5", image: "https://via.placeholder.com/150" },
    { id: 6, title: "Movie 6", image: "https://via.placeholder.com/150" },
    { id: 7, title: "Movie 7", image: "https://via.placeholder.com/150" },
    { id: 8, title: "Movie 8", image: "https://via.placeholder.com/150" },
    { id: 9, title: "Movie 9", image: "https://via.placeholder.com/150" },
    { id: 10, title: "Movie 10", image: "https://via.placeholder.com/150" },
];

export default function MovieList() {
    return (
        <div>
            <h2>Movie List</h2>
            <div className="grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img src={movie.image} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <Link to={`/movie/${movie.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
