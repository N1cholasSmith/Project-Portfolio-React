import React from "react";
// import Form from "react-bootstrap/Form";
import "../App.css";
import '../styles/styles.css';
import Frontend from '../assets/images/frontend.jpeg'
import Backend from '../assets/images/backend.jpeg'
import DataManagement from '../assets/images/database-management.jpeg'
import Seo from '../assets/images/SEO.jpeg'
import ServicesCard from "./ServicesCard";

const services = [
    {
        img: Frontend,
        title: "FrontEnd Development",
        description: `I have extensive experience with HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, Local Storage, Session Storage, IndexedDB, Responsive Design`
    },
    {
        img: Backend,
        title: "BackEnd Development",
        description: `I have extensive experience with API, JSON, AJAX, Node.js, Express.js, User Authentication,
        Progressive Web Application (PWAs), MangoDB, Algorithms`
    },
    {
        img: DataManagement,
        title: "Database Management",
        description: `Computer-Aided Maintenance Data Manager (CAMM2).
        Responsible for ingesting, storing, organizing & maintaining data created
        & collected by an organisation`
    },
    {
        img: Seo,
        title: "Search Engine Optimization",
        description: `Search Engine Optimization specialist through
        titles, meta description, keywords, gain links, accessibility and understanding your customers needs`
    }

]

const Services = () => {
    return (
        <section id="services">
        <div className="container my-2 py-1"/>
          <div className="row mb-5">
            <div className="col-12">
              <h1 className="fw-bold text-center">Services</h1>
              <hr/>
            </div>
            <div className="row">
                {services.map( (service, index) => (
                    <ServicesCard key={index} title={service.title} img={service.img} description={service.description}/>
                    )  
                )};
            </div>
          </div>
      </section>
    );
};

export default Services;














