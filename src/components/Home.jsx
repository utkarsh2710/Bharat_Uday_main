import React from "react";


function Home(props)
{   
    function aboutUsButton(){
        props.setHome(!props.isHome)
        props.setAboutUs(!props.isAboutUs)
    }

  
    if(props.isHome){
        return (
            <>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="stylesheet" href="style.css"></link>
                <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
                <div>
                    <div class="main-container">
                    <header>
                        <div class="logo">
                            <img src="./images/Bharat-Uday-Logo 1.png" alt=""></img>
                            <a href="#0" class="logo">Bharat Uday</a>
                        </div>

                        <ul class="nav-links">
                            <li><a href="#0" class="active" style={{fontFamily: "sans-serif", color: "white"}}>Home</a></li>
                            <li><a href="#0" onClick={aboutUsButton} style={{fontFamily: "sans-serif", color: "white"}}>About Us</a></li>
                            <li><a href="#0" style={{fontFamily: "sans-serif", color: "white"}}>Sign In</a></li>
                        </ul>
                        <a href="#0" class="nav-icon">
                            <i class="fa fa-bars"></i>
                        </a>
                    </header>
                    <section>
                        <h2 id="main-section-text"><span>Child care and youth development organization, empowering young people.</span></h2>
                        <br></br>
                        <br></br>
                        <div class="main-div-link">
                            <a href="#0" class="main-section-link">Watch the video</a>
                            <br></br>
                            <br></br>
                            <a href="#0" class="main-section-link">Sign up your school</a>
                        </div>

                    </section>

                    

                    {/* <div>
                        <div class="wave" id="wave1" style={{"--i":"1"}}></div>
                        <div class="wave" id="wave2" style={{"--i":"2"}}></div>
                        <div class="wave" id="wave3" style={{"--i":"3"}}></div>
                        <div class="wave" id="wave4" style={{"--i":"4"}}></div>
                    </div> */}
                </div>
                <div class="info-container">
                    <div class="sub-container">
                        <img style={{marginTop:"40px"}} src="./images/Image 1.jpg" alt=""></img>
                        <div class="sub-container-text">
                            <h3>Our Mission</h3>
                            <p>We envision empowering vulnerable young people by – Imparting vocational skills courses. Making
                                reliable mentors accessible to them, who help with their educational, emotional, and aftercare
                                needs. As part of our vision of a holistic development of children, each of our student
                                undergoes foundations learning programme and life skills development programme spread over one
                                academic year.
                            </p>
                            <a href="#00">Watch the video</a>
                            
                        </div>
                    </div>
                    <div class="sub-container inverse-order">
                    
                        <img src="./images/Image 2.jpg" alt=""></img>
                        <div class="sub-container-text">
                            <h3>Stay Connected</h3>
                            <p>Are you ready to join us on our mission to promote wellbeing education globally? Send us your email
                                address and we’ll keep you updated on our work, trainings, and other exciting announcements. We also
                                have grant programs available for under-resourced schools. Contact us for more information.</p>
                            <a href="#0">Get Involved</a>
                        </div>
                    </div>
                    <div class="sub-container">
                        <img src="./images/Image 3.jpg" alt=""></img>
                        <div class="sub-container-text">
                            <h3>Support Our Work</h3>
                            <p>The easiest and fastest way to help us continue serving the world is by directly investing in the
                                future of education. As a registered 501(c)3 nonprofit foundation, your donation is tax-deductible
                                to the fullest extent allowed by law. You contributions will go directly toward working with
                                children and teachers in the schools who need it the most.
                            </p>
                            <a href="#0">Donate</a>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    {/* <div>
                        <div class="footer-wave" id="wave5" style={{"--i":"5"}}></div>
                        <div class="footer-wave" id="wave6" style={{"--i":"6"}}></div>
                        <div class="footer-wave" id="wave7" style={{"--i":"7"}}></div>
                        <div class="footer-wave" id="wave8" style={{"--i":"8"}}></div>
                    </div> */}

                    <div class="footer-container">
                        <div class="footer-row">
                            <div class="footer-col">
                                <h4>about us</h4>
                                <ul>
                                    <li><a href="#0">The Organisation</a></li>
                                    <li><a href="#0">Our Purpose</a></li>
                                    <li><a href="#0">The Team</a></li>
                                    <li><a href="#0">Partners & Sponsers</a></li>
                                </ul>
                            </div>
                            <div class="footer-col">
                                <h4>our offerings</h4>
                                <ul>
                                    <li><a href="#0">Main offerings</a></li>
                                    <li><a href="#0">Testimonials</a></li>
                                    <li><a href="#0">Curriculum</a></li>
                                    <li><a href="#0">Assessment</a></li>
                                </ul>
                            </div>
                            <div class="footer-col">
                                <h4>get involved</h4>
                                <ul>
                                    <li><a href="#0">Sign Up</a></li>
                                    <li><a href="#0">Donate</a></li>
                                    <li><a href="#0">Volunteer</a></li>
                                    <li><a href="#0">Collaborate</a></li>
                                </ul>
                            </div>
                            <div class="footer-col">
                                <h4>contact us</h4>
                                <div class="social-links">
                                    <a href="#0"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#0"><i class="fab fa-twitter"></i></a>
                                    <a href="#0"><i class="fab fa-instagram"></i></a>
                                    <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <script src="../index.js"></script>
            </div>
            </>
    );
        }
    else {
        return null;
    }
}


export default Home;