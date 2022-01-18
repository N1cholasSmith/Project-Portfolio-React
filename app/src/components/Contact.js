import React from "react";
import Form from "react-bootstrap/Form";
import "../App.css";
import '../styles/styles.css';

const Contact = () => {
    return (
        <div>
             <section id="contact">
                <div class="container my-5 bg-promary">
                    <div class="row mb-5">
                        <div class="col-12">
                            <h1 class="fw-bold text-center">Contact</h1>
                        </div>
                    </div>
                    <div class="row col-12 d-flex justify-content-center">
                        <div>
                            <h3 class="text-center">Lets Communicate...</h3>
                        </div>
                        <div class="col-sm-10 col-md-8 col-lg-6 text-center">
                            <p>
                                Send me a message using the form below, please provide your Name, Email Address,
                                Subject and a consise message so i can promptly respond to you. Additionally, you can email
                                me directly at nicholassmithsoftwareengineer@gmail.com
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <Form action="https://formsubmit.co/nicholassmithsoftwareengineer@gmail.com" method="POST">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="James Allen" required>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Subject</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
                                        placeholder="Please feel free to contact me" required></textarea>
                                </div>
                                <button type="sumbit" class="btn btn-outline-warning">Send Message</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    );
}









































