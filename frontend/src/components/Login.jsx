import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await login(formData);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-2xl mb-6">Login</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full mb-4 p-2 border border-gray-300 rounded"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
                {error && <p className="mt-4 text-red-500">{error}</p>}
            </form>
        </div>
    );
}

export default Login;
