import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import BookingForm from "./BookingForm";
import Confirmation from "./BookingConformation";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/book/:id" element={<BookingForm />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
        </Router>
    );
}

export default App;
