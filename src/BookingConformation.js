import { useLocation } from "react-router-dom";

export default function Confirmation() {
    const location = useLocation();
    const { name, email, mobile, movieId } = location.state || {};
    const bookingId = Math.floor(100000 + Math.random() * 900000); // Random 6-digit ID

    return (
        <div>
            <h2>Booking Confirmed!</h2>
            <p><strong>Booking ID:</strong> {bookingId}</p>
            <p><strong>Movie ID:</strong> {movieId}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Mobile:</strong> {mobile}</p>
        </div>
    );
}
