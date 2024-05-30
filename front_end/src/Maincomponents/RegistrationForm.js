import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegistrationForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone_number: '',
        password: '',
    });

    const BASE_URL = 'https://appointments-booking-api.onrender.com';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`, formData);
            console.log('Registration successful:', response.data);
            console.log('Registration successful');
            window.location.replace("/")
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            console.log('Registration failed');
            
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
        <div className='text-center'>
        <h2>Sign Up</h2>
        </div>
        
            <form onSubmit={handleSubmit}>
            <div className='row mb-3'>
            <div className="col">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
                
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone-number"
                        name="phone-number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className ="text-center">
                   <button type="submit" className="btn btn-primary">Register</button>
                   <button className='btn btn-primary ms-3'>Login</button>
                </div>
                
            </form>

        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"></div>
    </div>
</div>
    );
};

export default RegistrationForm;
