

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">Our Hospital</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Our Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Doctors</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Facilities</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}