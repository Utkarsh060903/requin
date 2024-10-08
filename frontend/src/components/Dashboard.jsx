import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get('https://requin-server.onrender.com/api/auth/me', {
            headers: { 'x-auth-token': token },
        }).then((response) => {
            setUser(response.data);
        }).catch(() => {
            navigate('/login');
        });
    }, [navigate]);

    if (!user) return <div className="text-center mt-8">Loading...</div>;

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard</h1>
            <p className="text-lg">Welcome, {user.name}</p>
        </div>
    );
}

export default Dashboard;
