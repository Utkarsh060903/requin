import { useState } from 'react';
import { register } from '../api';

function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'student' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData);
            alert('Registration successful');
        } catch (error) {
            console.error(error.response.data.msg);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-6">Register</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                />
                <select
                    name="role"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    onChange={handleChange}
                >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="principal">Principal</option>
                </select>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
