import React, {useState} from 'react';
import PageHeader from "./PageHeader";

function Home(){

    const [showHeaderButtons, setShowHeaderButtons] = useState(false);
    return(
        <div className="homeContainer">
            <PageHeader setShowHeaderButtons={setShowHeaderButtons} showHeaderButtons={showHeaderButtons}/>
            <div className='mainContent'>
                <div className='landingDiv'>
                    <div>
                        <h1>Our End Result Is Excellence</h1>
                        <br/>
                        <p>The Western Conglomerate State is an award winning, full-service engineering agency. Our team will create something special to meet your requirements.</p>
                        <br/>
                        <button>Request a Quote</button>
                    </div>
                </div>

                <div className='ourStrength'>
                    <div className='header'>
                        <h1>Our Strengths</h1>
                        <p>We Create functional and highly converting projects</p>
                    </div>
                    <div className='body'>
                        <div className='strength'>
                            <div id='top'>
                                <p id='icon'><i class="fa-solid fa-star"></i></p>
                                <h3>Quality</h3>
                                <p id='underline'></p>
                            </div>
                            <div id='body'>
                                <p>
                                    The highest quality is above all. We pay attention to every detail in everything we produce to exceed clients' expectations 
                                    and to guarantee they leave us inspired and satisfied each time.
                                </p>
                            </div>
                        </div>
                        <div className='strength'>
                            <div id='top'>
                                <p id='icon'><i class="fa-solid fa-gear"></i></p>
                                <h3>Service</h3>
                                <p id='underline'></p>
                            </div>
                            <div id='body'>
                                <p>
                                    We focus on growing companies and building brands. Our talented team of experts takes an integrated approach to help clients attract 
                                    their audiences and generate meaningful results.
                                </p>
                            </div>
                        </div>
                        <div className='strength'>
                            <div id='top'>
                                <p id='icon'><i class="fa-solid fa-rocket"></i></p>
                                <h3>Innovation</h3>
                                <p id='underline'></p>
                            </div>
                            <div id='body'>
                                <p>
                                    We strive for excellence in everything we do staying a step ahead of the ever-changing world through innovative thinking. We always search for new ways to drive 
                                    more effective results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='whoWeAre'>
                    <div className='left'>
                        <img src='Architecture.jpg' alt='Western Conglomerate State'/>
                    </div>
                    <div className='right'>
                        <h1>Who We Are</h1>
                        <br/>
                        <p>
                            The Western Conglomerate State is serving clients worldwide.
                        </p>
                        <br/>
                        <p>
                            We are a full-service creative engineering and digital marketing company under one roof. Our team of highly trained professionals will create 
                            something special to meet your requirements. We work in close cooperation with our clients. This helps us clearly understand their business potential, 
                            their audience, their objectives and above all, their requirements. We strive to deliver superior solutions for any taste and budget trying to exceed our 
                            clients' expectations.
                        </p>
                        <br/>
                        <br/>
                        <button>More About Us</button>
                    </div>
                </div>

                <div className='ratings'>
                    <div className='rating'>
                        <div className='top'>
                            <h1>700 <span><i class="fa-solid fa-plus"></i></span></h1>
                            <p id='underline'></p>
                        </div>
                        <div className='body'>
                            <p>hours of practice in creating award-winning digital solutions.</p>
                        </div>
                    </div>
                    <div className='rating'>
                        <div className='top'>
                            <h1>3.000 <span><i class="fa-solid fa-plus"></i></span></h1>
                            <p id='underline'></p>
                        </div>
                        <div className='body'>
                            <p>high-level projects successfully performed and delivered.</p>
                        </div>
                    </div>
                    <div className='rating'>
                        <div className='top'>
                            <h1>1.5k <span><i class="fa-solid fa-plus"></i></span></h1>
                            <p id='underline'></p>
                        </div>
                        <div className='body'>
                            <p>projects designed by our trained experts.</p>
                        </div>
                    </div>
                    <div className='rating'>
                        <div className='top'>
                            <h1>20 <span><i class="fa-solid fa-plus"></i></span></h1>
                            <p id='underline'></p>
                        </div>
                        <div className='body'>
                            <p>highly trained people in design, development and marketing.</p>
                        </div>
                    </div>
                </div>

                <footer>
                    <p>© 2024 Western Conglomerate State. All Rights Reserved.</p>
                    <p>Website Powered by <a href="https://nevoline-company.vercel.app/" target="_blank">NEVOLINE</a></p>
                </footer>
            </div>
        </div>
    )
}
export default Home;