


export default function Slider() {
    return (
        <div id="hospitalCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/free-photo/portrait-3d-doctors-hospital-attire_23-2151107480.jpg" className="d-block w-100 slider-img" alt="First Slide" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644147.jpg" className="d-block w-100 slider-img" alt="Second Slide" />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644107.jpg" className="d-block w-100 slider-img" alt="Third Slide" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#hospitalCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#hospitalCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}