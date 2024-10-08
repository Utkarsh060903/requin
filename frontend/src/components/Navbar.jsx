import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white">
                    <Link to="/" className="mr-4 hover:underline">Home</Link>
                    <Link to="/login" className="mr-4 hover:underline">Login</Link>
                    <Link to="/register" className="hover:underline">Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
