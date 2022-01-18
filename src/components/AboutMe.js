import React from 'react';
import Profilepic from "../assets/images/Profilepic.PNG"
import Resume from "../assets/pdf/Nicholas-Smith-Software-Engineer-Resume.pdf"
import '../styles/styles.css';
import "../App.css"


const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-2 py-1">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h1 className="fw-bold text-center">About Me</h1>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img src={Profilepic} alt="office" width="100%" />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h1 className="fw-bold">NICHOLAS SMITH</h1>
                            <h3 className="text-warning mb-4">SOFTWARE ENGINEER</h3>
                            <p className="lead mb-4">
                                I have valuable experience leading teams in stressful environments with critical deadlines. The
                                most vital attribute
                                I possess is being able to think logically to solve complex problems. I have a strong passion
                                for innovative technologies,
                                particularly Constellation Network as they are developing the HGTP to replace HTTP.
                                Constellation Network is focused on validating data from the source
                                enabling it to be utilized in artificial intelligence and machine learning applications
                                immediately. Innovative technologies
                                excite me every day, and I'm ready to join this exciting space with a passionate, creative
                                mindset. I have been recognized for my
                                display of exceptional leadership qualities with ruthless professionalism. I will be an
                                invaluable member of any organization, company, or team.
                            </p>
                            <a href={Resume} target="_blank" without rel="noreferrer"> <button
                                className="btn btn-outline-warning px-5 py-2">Download CV</button></a>
                            <button className="btn btn-warning text-white px-5 py-2">Contact</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default About;
