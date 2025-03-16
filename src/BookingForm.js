import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookingForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/confirmation", { state: { ...formData, movieId: id } });
    };

    return (
        <div>
            <h2>Book Your Seat</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" required onChange={handleChange} />
                
                <label>Email:</label>
                <input type="email" name="email" required onChange={handleChange} />
                
                <label>Mobile:</label>
                <input type="tel" name="mobile" required onChange={handleChange} />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
