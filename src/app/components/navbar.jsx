
import Link from "next/link";


export default function NavBar({ children }) {
    return (
        <div className="bg-slate-600">
            <nav>
                <Link className="nav-link" href="/">
                    Home
                </Link>
                <div>
                    <Link className="nav-link" href="/register">Register</Link>
                    <Link className="nav-link" href="/dashboard">Dashboard</Link>
                </div>
            </nav>
            {children}
        </div>
    )
}