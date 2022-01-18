import React from "react";
// import Form from "react-bootstrap/Form";
import "../App.css";
import '../styles/styles.css';

const Contact = () => {
    return (
        <div>
             <section id="contact">
                <div className="container my-5 bg-promary">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="fw-bold text-center">Contact</h1>
                        </div>
                    </div>
                    <div className="row col-12 d-flex justify-content-center">
                        <div>
                            <h3 className="text-center">Lets Communicate...</h3>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-6 text-center">
                            <p>
                                Send me a message using the form below, please provide your Name, Email Address,
                                Subject and a consise message so i can promptly respond to you. Additionally, you can email
                                me directly at nicholassmithsoftwareengineer@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <form action="https://formsubmit.co/nicholassmithsoftwareengineer@gmail.com" method="POST">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="James Allen" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        required/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Subject</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        required/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                        placeholder="Please feel free to contact me" required></textarea>
                                </div>
                                <button type="sumbit" className="btn btn-outline-warning">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
}

export default Contact;







































