import { Link } from "react-router-dom"
// header element with the links to certain urls
// Link is a Custom Component fro React Router Paket
// to and classname are Props
export function Header() {
    return (
        
        <header className="px-8 py-4 bg-zinc-900 text-zinc-50 flex justify-between" >
            <Link to="/" className="font-bold text-lg">
                Awesome Blog
            </Link>
            <nav>
                <Link to="/blog">
                    Blog
                </Link>
            </nav>
        </header >

        
    );
}

export default Header