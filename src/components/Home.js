import React from "react";
import "../App.css";
import BrandStatement from "../assets/pdf/Nicholas-Smith-Software-Engineer-Brand-Statement.pdf"
import Profilepic from "../assets/images/Profilepic.PNG"
import Setup from "../assets/images/Setup.png"
import Vizag from "../assets/images/Vizag.png"


const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center">
                    <h3 className="text-warning">SOFTWARE ENGINEER</h3>
                    <h1 className="display-1 fw-bold">I'M NICHOLAS <br/> SMITH </h1>
                    <div className="row buttons mt-4">
                        <a className="col-3" href={BrandStatement}
                        target="_blank" rel="noreferrer"><button className=" btn btn-outline-warning px-4 py-2">Hire Me</button> </a>
                        <a className="col-3" href="#about"> <button className="btn btn-warning text-white px-4 py-2">About</button> </a>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Profilepic} className="d-block w-100" alt="office"
                            height="600px"/>
                        </div>
                        <div className="carousel-item">
                            <img src={Setup} className="d-block w-100" alt="office"
                            height="600px"/>
                        </div>
                        <div className="carousel-item">
                            <img src={Vizag} className="d-block w-100"
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





















