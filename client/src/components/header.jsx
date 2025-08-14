import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <h2 className="text-white ms-4">Product Manager</h2>
            <nav className="d-flex justify-content-end p-2">
                <Link to='/' className="text-white me-4">Product List</Link>
                <Link to='/admin' className="text-white me-4">Admin</Link>
            </nav>

        </header>
    )
}
export default Header