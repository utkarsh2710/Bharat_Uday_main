import React from "react";
import NotHomeButton from "./NotHomeButton";

function AboutUs(props){
    function homeButton(){
        props.setHome(true)
        props.setAboutUs(false)
    }

    if(props.isAboutUs){
        return (
            <div>
                <div class="main-container-about-us">
                    <header>
                        <div class="logo">
                            <a href="#0" class="logo" style={{color:"white"}} onClick={homeButton}>Bharat Uday</a>
                        </div>

                        <ul class="nav-links">
                            <li><a style={{fontFamily: "sans-serif", color: "white"}} href="#0" onClick={homeButton}>Home</a></li>
                            <li><a style={{fontFamily: "sans-serif", color: "white"}} href="#0">About Us</a></li>
                        
                            <li><a style={{fontFamily: "sans-serif", color: "white"}} href="#0">Sign In</a></li>
                        </ul>
                        <a href="#00" class="nav-icon">
                            <i class="fa fa-bars"></i>
                        </a>
                    </header>

                    <section>
                        <h2 class="not-home-heading" style={{alignSelf:"center"}}>About Us</h2>
                    </section>
                </div>

            
            
                <div class="not-home-main-image">
                    <img src="./images/Image 2.jpg"></img>
                </div>

            
            <div class="not-home-info-container">
                <br></br>
                <p>
                    Bharat Uday was set up in 
                    2018 with the aim of bringing about awareness about Swami Vivekanandaji’s
                    philosophy and life among children in government schools of
                    Delhi-NCR.
                </p>
                <br></br>

                <h5 style={{color:"#FF6931", marginBottom: "12px"}}>
                    Looking back :)
                </h5>
                <h2>
                    History
                </h2>
                <br></br>
                <p>
                    In 2019 our young volunteers offered 30-days of joy - a one-month long visual and performance arts-based program - to children living in seva-bastis across Delhi-NCR. 
                </p>
                    <br></br>
                    <br></br>
                    <p>
                        In 2020 with a vision to enable children living in orphanages and institutions we launched our Educational and mentorship programs – Learning Support and Mentoring.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Amid the trying Covid times our volunteers of the Learning Support and Mentoring program catered to the learning and motivational needs of children round the year from July 2020 to July 2021. 

                    </p>

                <br></br>

                <h5 style={{color:"#FF6931", marginBottom: "12px"}}>
                    Our journey so far...
                </h5>

                <h2>
                    A glance at 2020
                </h2>

                <br></br>
                <img style= {{display:"block", margin:"auto", width:"90%"}} src="./images/Image 4.png" alt=""></img>
                
                <br></br>

                <ul>
                        <li>
                            About 1,000 young university students applied to become Bharat Uday volunteers
                
                        </li>
                            
                        <li>
                            About 300 students underwent Bharat Uday recruitment workshops conducted both physically and virtually.
                        </li>

                        <li>
                            About X volunteers are trained Bharat Uday teachers now.
                        </li>

                        <li>
                            40 teachers taught and mentored 55 students in 2020-21.
                        </li>

                        <li>
                            Approx 1500 classrooms were convened between July 2020 to July 2021.
                        </li>

                        <li>
                            Innumerable emotions, ideas and thoughts have been exchanged between teachers, students, mentors, facilitators, caretakers and well-wishers
                        </li>

                        <li>
                            And the journeys continues.
                        </li>
                </ul>

                <br></br>
                <h5 style={{color:"#FF6931", marginBottom: "12px"}}>
                    What do we do ?
                </h5>

                <h2>
                    Programs 2021-2022
                </h2>

                <NotHomeButton 
            title="Foundations Learning Program" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Enim neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque non tellus orci ac auctor augue. Scelerisque in dictum non consectetur a erat. Eget sit amet tellus cras adipiscing enim. Commodo quis imperdiet massa tincidunt. Dictum fusce ut placerat orci nulla pellentesque dignissim."/>
            
            <br></br>
            <NotHomeButton 
            title="Life Skills Program" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Enim neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque non tellus orci ac auctor augue. Scelerisque in dictum non consectetur a erat. Eget sit amet tellus cras adipiscing enim. Commodo quis imperdiet massa tincidunt. Dictum fusce ut placerat orci nulla pellentesque dignissim."/>

            <br></br>
            <NotHomeButton 
            title="Mentoring Programs" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Enim neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque non tellus orci ac auctor augue. Scelerisque in dictum non consectetur a erat. Eget sit amet tellus cras adipiscing enim. Commodo quis imperdiet massa tincidunt. Dictum fusce ut placerat orci nulla pellentesque dignissim."/>
            
            <br></br>
            <NotHomeButton 
            title="Foundations Learning Program" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Enim neque volutpat ac tincidunt vitae semper quis. Gravida rutrum quisque non tellus orci ac auctor augue. Scelerisque in dictum non consectetur a erat. Eget sit amet tellus cras adipiscing enim. Commodo quis imperdiet massa tincidunt. Dictum fusce ut placerat orci nulla pellentesque dignissim."/>

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
        </div>

        );
    }
    else{
        return null;
    }
}


export default AboutUs;