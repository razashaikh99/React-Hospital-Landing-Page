

export default function ContactUs() {
    return (
        <section className="bg-light">
            <div className="container">
                <h2 className="text-center mb-2 fw-bold">Contact Us</h2>
                <p className="text-center mb-5">Feel free to reach out to us for any inquiries or assistance.</p>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form>
                            {/* Full Name */}
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label fw-bold">Full Name</label>
                                <input type="text" className="form-control border-2" id="fullName" placeholder="Enter your full name" required />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                                <input type="email" className="form-control border-2" id="email" placeholder="Enter your email address" required />
                            </div>

                            {/* Phone Number */}
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                                <input type="tel" className="form-control border-2" id="phone" placeholder="Enter your phone number" />
                            </div>

                            {/* Subject */}
                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label fw-bold">Subject</label>
                                <input type="text" className="form-control border-2" id="subject" placeholder="Enter the subject" />
                            </div>

                            {/* Message */}
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-bold">Message</label>
                                <textarea className="form-control border-2" id="message" rows="4" placeholder="Write your message here"></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary px-5 w-100 mt-2">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 