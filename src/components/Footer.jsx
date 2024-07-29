import { NavLink } from "react-router-dom";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer
                className="fixed bottom-0 left-0 w-full flex items-center justify-start font-bold bg-laravel text-white h-24 mt-24 opacity-90 md:justify-center"
            >
                <p className="ml-2">Copyright &copy; {currentYear}, All Rights reserved</p>

                <NavLink to="/create" className="absolute top-1/3 right-10 bg-black text-white py-2 px-5">
                    Post Job
                </NavLink>
            </footer>
        </>
    )
}
