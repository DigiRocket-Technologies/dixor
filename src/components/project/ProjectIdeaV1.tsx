const ProjectIdeaV1 = () => {
    return (
        <>
            <div className="contact-panel-bg" style={{ backgroundImage: 'url(/assets/img/about/3.jpg)' }} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h4 className="sub-title">Have you project in mind?</h4>
                        <h2 className="title">For instant support <br /> Please reach us</h2>
                        <ul className="contact-list">
                            <li>
                                <div className="icon">
                                    <i className="fas fa-phone" />
                                </div>
                                <div className="info">
                                    <h4>Phone</h4>
                                    <a className="phone-link" href="tel:+4733378901">+4733378901</a> <br />
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope-open" />
                                </div>
                                <div className="info">
                                    <h4>Official Email</h4>
                                    <a href="mailto:info@agrul.com.com">info@agrul.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectIdeaV1;