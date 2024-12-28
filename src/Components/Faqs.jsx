

export default function Faqs() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">

                    {/* FAQ 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                What are the hospital's operating hours?
                            </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Our hospital operates 24/7, including weekends and public holidays.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                Do I need an appointment for a consultation?
                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                While walk-ins are welcome, we recommend booking an appointment for better service.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                Are emergency services available?
                            </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Yes, our emergency services are available 24/7 with a dedicated emergency team.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                What payment methods do you accept?
                            </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                We accept cash, credit/debit cards, and online payments.
                            </div>
                        </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                Is there parking available at the hospital?
                            </button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Yes, we provide free parking facilities for our patients and visitors.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}