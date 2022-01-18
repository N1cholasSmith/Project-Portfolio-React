import React from 'react';
import Profilepic from "../../public/assets/images/Profilepic.png"
import '../styles/styles.css';
import bootstrap from 'bootstrap';
import "../App.css"



const AboutMe = () => {
    return (
<div>
    <section id="about">
        <div class="container my-5 py-5">
            <div class="row mb-5">
                <div class="col-12">
                <h1 class="fw-bold text-center">About Me</h1>
                
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                <img src= {Profilepic} alt="Profile Picture in office" width="100%">
                {/* </img> */}
                </div>
                <div class="col-sm-12 col-md-6">
                    <h1 class="fw-bold">NICHOLAS SMITH</h1>
                    <h3 class="text-warning mb-4">SOFTWARE ENGINEER</h3>
                    <p class="lead mb-4">
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
                    <a href="assets/pdf/Nicholas-Smith-Software-Engineer-Resume.pdf" target="_blank"> <button
                        class="btn btn-outline-warning px-5 py-2">Download CV</button></a>
                    <button class="btn btn-warning text-white px-5 py-2">Contact</button>
                </div>
            </div>
        </div>
    </section>
</div>
  );
}


