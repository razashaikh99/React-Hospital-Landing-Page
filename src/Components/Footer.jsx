

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 mt-5">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">

                    {/* Hospital Information */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Our Hospital</h5>
                        <p>
                            Providing top-notch healthcare services with a team of experienced professionals and state-of-the-art facilities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Quick Links</h5>
                        <p><a href="#!" className="text-white text-decoration-none">Home</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">About Us</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Services</a></p>
                        <p><a href="#!" className="text-white text-decoration-none">Contact</a></p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contact</h5>
                        <p><i className="fas fa-home me-3"></i> North Nazimabad, Karachi</p>
                        <p><i className="fas fa-envelope me-3"></i> info@ourhospital.com</p>
                        <p><i className="fas fa-phone me-3"></i> +123 456 7890</p>
                        <p><i className="fas fa-print me-3"></i> +123 456 7891</p>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Follow Us</h5>
                        <div>
                            <a href="#!" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
                            <a href="#!" className="text-white me-4"><i className="fab fa-twitter"></i></a>
                            <a href="#!" className="text-white me-4"><i className="fab fa-instagram"></i></a>
                            <a href="#!" className="text-white me-4"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <hr className="my-4" />
                <div className="row d-flex justify-content-center">
                    <div className="text-center">
                        <p>&copy; {new Date().getFullYear()} Our Hospital. All Rights Reserved - Make by "Muhammad Raza Shaikh"</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}