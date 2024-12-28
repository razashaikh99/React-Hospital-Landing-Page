

export default function Table() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">Our Hospital Services</h2>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover text-center align-middle">
                        <thead className="table-primary">
                            <tr>
                                <th>#</th>
                                <th>Our Services</th>
                                <th>Description</th>
                                <th>Duration</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>General Checkup</td>
                                <td>Comprehensive health checkup by a physician.</td>
                                <td>30 mins</td>
                                <td>$50</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cardiology Consultation</td>
                                <td>Heart health consultation with a specialist.</td>
                                <td>45 mins</td>
                                <td>$120</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Dental Care</td>
                                <td>Teeth cleaning, scaling, and checkup.</td>
                                <td>1 hour</td>
                                <td>$80</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Physiotherapy</td>
                                <td>Muscle and joint recovery therapy.</td>
                                <td>1 hour</td>
                                <td>$70</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Dermatology Treatment</td>
                                <td>Skin care consultation and treatment.</td>
                                <td>40 mins</td>
                                <td>$90</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Pediatric Consultation</td>
                                <td>Health services for children.</td>
                                <td>30 mins</td>
                                <td>$60</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Orthopedic Services</td>
                                <td>Bone and joint health consultations.</td>
                                <td>50 mins</td>
                                <td>$110</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Neurology Services</td>
                                <td>Brain and nervous system care.</td>
                                <td>1 hour</td>
                                <td>$150</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Emergency Care</td>
                                <td>24/7 emergency response services.</td>
                                <td>Immediate</td>
                                <td>Varies</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Lab Tests</td>
                                <td>Blood tests, X-rays, and diagnostics.</td>
                                <td>Varies</td>
                                <td>$40+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}