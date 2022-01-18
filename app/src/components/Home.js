import React from "react";
import "../App.css";
import Profilepic from "../assets/images/Profilepic.PNG"
import Setup from "../assets/images/Setup.png"
import Vizag from "../assets/images/Vizag.png"


const Home = () => {
    return (
        <div>
            <section id="home">
                <div class="container mb-5">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                    <h3 class="text-warning">SOFTWARE ENGINEER</h3>
                    <h1 class="display-1 fw-bold">I'M NICHOLAS <br> SMITH </br></h1>
                    <div class="row buttons mt-4">
                        <a class="col-3" href="assets/pdf/Nicholas-Smith-Software-Engineer-Brand-Statement.pdf"
                        target="_blank"><button class=" btn btn-outline-warning px-4 py-2">Hire Me</button> </a>
                        <a class="col-3" href="#about"> <button class="btn btn-warning text-white px-4 py-2">About</button> </a>
                    </div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Profilepic} class="d-block w-100" alt="office"
                            height="600px"/>
                        </div>
                        <div class="carousel-item">
                            <img src={Setup} class="d-block w-100" alt="office"
                            height="600px"/>
                        </div>
                        <div class="carousel-item">
                            <img src={Vizag} class="d-block w-100"
                            alt="Nicholas at Vizag boys orphanage" height="600px"/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </div>

    );

}

export default Home;





















