import { BsPersonPlusFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center mb-4">
                <NavLink to="/"
                ><img className="w-24" src="logo.png" alt="logo"
                    /></NavLink>
                <ul className="flex space-x-6 mr-6 text-lg">
                    <li>
                        <NavLink to="/register" className="flex items-center space-x-1 hover:text-laravel">
                            <BsPersonPlusFill />
                            <span>Register</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="flex items-center space-x-1 hover:text-laravel">
                            <RiLoginBoxFill />
                            <span>Login</span>
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </>
    )
}
