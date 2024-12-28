

export default function Cards() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">Our Expert Doctors</h2>
                <div className="row">

                    {/* Row 1 */}
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmuN4ALBfMsPDZWFbdfVeJiCSjhwvVShrCQ&s" className="card-img-top" alt="Dr. Sarah Khan" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Sarah Khan</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Cardiologist</h6>
                                <p className="card-text">Expert in heart-related treatments.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://img.freepik.com/premium-psd/3d-render-doctor-with-stethoscope-characters-isolated-professions-occupations-avatar-icons_570783-1394.jpg" className="card-img-top" alt="Dr. Ahmed Ali" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Ahmed Ali</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Neurologist</h6>
                                <p className="card-text">Specialist in brain disorders.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://t4.ftcdn.net/jpg/06/43/62/53/360_F_643625328_VPkhbt47OV328Nzqexsg2zjVu7tTgdXx.jpg" className="card-img-top" alt="Dr. Fatima Malik" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Fatima Malik</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Pediatrician</h6>
                                <p className="card-text">Child health care expert.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://png.pngtree.com/thumb_back/fw800/background/20230710/pngtree-the-physician-gestured-with-his-finger-to-offer-counsel-doctor-with-image_3833090.jpg" className="card-img-top" alt="Dr. Khalid Saeed" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Khalid Saeed</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Orthopedic</h6>
                                <p className="card-text">Bone and joint specialist.</p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="col-md-3 mb-4">
                        <div className="card h-125 text-center shadow-sm">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59KVTsCO3_1rGBVn1CaFNBm55wJO3e1XWAIWfd1CW5UtXaHpE2BotjTNU_l_yCawr1RE&usqp=CAU" className="card-img-top" alt="Dr. Sana Yousuf" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Sana Khan</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Dermatologist</h6>
                                <p className="card-text">Skin care and treatment specialist.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-cartoon-style-3d-illustration-of-a-male-doctor-holding-a-folder-image_3826989.jpg" className="card-img-top" alt="Dr. Usman Tariq" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Usman Tariq</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Oncologist</h6>
                                <p className="card-text">Cancer treatment expert.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqivlvwpiyx5AHG9jD7Ruh8Z3y2pAOo1VK3LPJnbZRfz8eGjKoGrEttWs4UvyAzERgPo&usqp=CAU" className="card-img-top" alt="Dr. Ayesha Noor" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Ayesha Noor</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Gynecologist</h6>
                                <p className="card-text">Women’s health expert.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center shadow-sm">
                            <img src="https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107230.jpg?semt=ais_hybrid" className="card-img-top" alt="Dr. Bilal Khan" />
                            <div className="card-body">
                                <h5 className="card-title">Dr. Bilal Khan</h5>
                                <h6 className="card-subtitle mb-2 text-muted">General Physician</h6>
                                <p className="card-text">Primary care and general medicine.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
} 