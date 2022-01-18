import React from "react";
import "../App.css";
import LinkedIn from "../assets/images/linkedin-logo.png"
import GitHub from "../assets/images/github-logo.png"
import Instagram from "../assets/images/instagram-logo.png"
import Twitter from "../assets/images/twitter-logo.png"


const Footer = () => {
    return (
        <div>
            <section class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h6 class="follow-me d-flex justify-content-center">Follow Me!</h6>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="social col-sm-6 col-md-3 p-4">
                                    <a href="https://www.linkedin.com/in/nicholas-smith-softwareengineer/" target="_blank" without rel="noreferrer"><img height="60px"
                                        src={LinkedIn} alt="LinkedIn Logo"/></a>
                                </div>
                                <div class="social col-sm-6 col-md-3 p-4">
                                    <a href="https://github.com/N1cholasSmith" target="_blank" without rel="noreferrer"><img src={GitHub}
                                        alt="GitHub Logo"/></a>
                                </div>
                                <div class="social col-sm-6 col-md-3 p-4">
                                    <a href="https://www.instagram.com/n1ckorish/" target="_blank" without rel="noreferrer"><img src={Instagram}
                                        alt="Instagram Logo"/></a>
                                </div>
                                <div class="social col-sm-6 col-md-3 p-4">
                                    <a href="https://twitter.com/HGTPNFTNick" target="_blank" without rel="noreferrer"><img src={Twitter}
                                        alt="Twitter Logo"/></a>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Footer;









