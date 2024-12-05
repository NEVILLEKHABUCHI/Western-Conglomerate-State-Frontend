import React, { useState } from "react";
import PageHeader  from "./PageHeader";

function About(){

    const [showHeaderButtons, setShowHeaderButtons] = useState(false);
    const [openValues, setOpenValues] = useState({}); //Track which values are open

    const toggleContent = (index) => {
        setOpenValues((prev) => ({
            ...prev,
            [index]: !prev[index] //Toggle thge specific value
        }));
    };

    const values = [
        {
            icon: "fa-handshake",
            title: "Dependability",
            content: `We strive to always provide our clients with what we guarantee, 
            to meet every deadline, and to communicate proactively. We find the right approach to your business like to our own, 
            we endeavor to deliver services you can completely rely on.`
        },
        {
            icon: "fa-lightbulb",
            title: "Creativity",
            content: `We believe that creative thinking can solve the impossible and push boundaries to challenge common thinking. 
            Our task is not to quickly find the easiest solution but thoroughly research and analyze the case to create the best 
            possible result that meets the client's business needs and attracts a new audience.`
        },
        {
            icon: "fa-star",
            title: "Quality",
            content: `We can say without a doubt that the highest quality is above all for us. 
            We pay much attention to every detail in everything we produce to exceed clients' expectations and to make sure they leave us each time 
            inspired and satisfied.`
        },
        {
            icon: "fa-people-group",
            title: "Teamwork",
            content: `Thinking and working together, we merge our power to deliver the best possible and ingenious solutions. We deliberately 
            sustain a collaborative atmosphere where every team member's idea is heard, considered and appreciated to make you benefit from the final result.`
        },
        {
            icon: "fa-shield",
            title: "Integrity",
            content: `We uphold the highest ethical standards, ensuring transparency, honesty and accountability in every connection we facilitate. 
            Our commitment to doing what's right guarantees that clients and engineers build trust-driven, successful partnerships.`
        },
        {
            icon: "fa-user-tie",
            title: "Client-centric",
            content: `Our clients are at the heart of everything we do. We prioritize understanding your unique needs to provide tailored solutions. 
            By connecting you with the right engineering professionals, we ensure your projects are handled with care, expertise and a focus on exceeding your 
            expectations.`
        },
        {
            icon: "fa-circle-question",
            title: "Curiosity",
            content: `Curiosity drives innovation and we embrace it wholeheartedly. We constantly explore new ideas and approaches to connect clients with 
            engineers who bring fresh perspectives and creative solutions to every challenge.`
        },
        {
            icon: "fa-hand-fist",
            title: "Challenger Mentality",
            content: `We thrive on pushing boundaries and challenging the status quo. Our team is dedicated to connecting you with 
            engineers who tackle problems head-on, innovate fearlessly and deliver results that exceed expectations.`
        }
    ];

    return (
        <div className="aboutContainer">
            <PageHeader setShowHeaderButtons={setShowHeaderButtons} showHeaderButtons={showHeaderButtons}/>

            <div className="mainContent">
                <div className="landingDiv">
                        <p>Home{">"} <span>About</span></p>
                </div>

                <div className="whatWeDo">
                    <div className="left">
                        <h1>What We Do</h1>
                        <br/>
                        <p>
                            The Western Conglomerate State offers a comprehensive network of engineers, each vetted for their expertise and experience. 
                        </p>
                        <br/>
                        <p>
                            We connect clients with skilled engineers across various fields, including mechanical, civil, electrical, 
                            software and more. Our platform simplifies the process of finding the right expertise for your projects, 
                            whether small-scale designs or large industrial undertakings. We ensure quality, efficiency and tailored 
                            solutions to meet your specific engineering needs. 
                        </p>
                    </div>
                    <div className="right">
                        <img src="Architecture_Pencil.jpg" alt="Western Conglomerate State"/>
                    </div>
                </div>

                <div className="ourValues">
                    <h1>Our Values</h1>

                    <div className="allValues">
                        {values.map((value, index) => (
                            <div className="value" key={index}>
                                <div className="top">
                                    <i className={`fa-solid ${value.icon}`} id="icon"></i>

                                    <div>
                                        <p>{value.title}</p>
                                        <i 
                                        className={`fa-solid ${openValues[index] ? "fa-minus" : "fa-plus"}`}
                                        onClick={() => toggleContent(index)}></i>
                                    </div>
                                </div>

                                <div className="body">
                                    <p>{openValues[index] && value.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ourMission">
                    <div>
                        <p id="icon"><i class="fa-solid fa-bullseye"></i></p>
                        <br/>
                        <h1>Our Mission</h1>
                        <br/>

                        <p id="content">
                            Our mission is to bridge the gap between clients and the engineering expertise they need to succed. We 
                            strive to simplify the process of finding qualified engineers across all disciplines, ensuring every project-bug or small-receives the right talent for 
                            the job. 
                        </p>
                        <br/>
                        <p id="content">
                            We are committed to delivering exceptional value through transparency , trust and innovation. 
                            By fostering strong connections and empowering both clients and engineers, we aim to drive progress, 
                            complex challenges and build a future where technician excellence meets real-world impact.
                        </p>
                    </div>
                </div>

                <div className="ourWorkProcess">
                    <div className="top">
                        <h1>Our Work Process</h1>
                        <p>
                            We follow a streamlined process to ensure your project's success. From understanding your needs to connecting you with 
                            the right engineers, every step is designed to deliver efficient, high-quality results tailored to your goals.
                        </p>
                    </div>
                    <div className="body">
                        <div className="process">
                            <p>01.</p>
                            <br/>

                            <h2>Research</h2>
                            <br/>

                            <p>
                                We begin by understanding your unique project needs. Through in-depth discussions and analysis, we identify the specific 
                                engineering expertise required to bring your vivion to life. This phase ensures that we fully grasp the scope, goals and 
                                challenges of your project.
                            </p>

                        </div>
                        <div className="process">
                            <p>02.</p>
                            <br/>

                            <h2>Strategy</h2>
                            <br/>

                            <p>
                                Using the insights from our research, we develop a customized plan to connect you with the right 
                                engineers. Our strategy focuses on matching skills, experience and innovative solutions to your project's requirements, 
                                ensuring seamless collaboration.
                            </p>
                        </div>
                        <div className="process">
                            <p>03.</p>
                            <br/>

                            <h2>Design</h2>
                            <br/>

                            <p>
                                Collaborating with engineers and stakeholders, we craft a tailored project framework. This includes 
                                creating detailed blueprints, workflows and timelines to ensure clarity and alignment across all parties involved.
                            </p>
                        </div>
                        <div className="process">
                            <p>04.</p>
                            <br/>

                            <h2>Development</h2>
                            <br/>

                            <p>
                                Once the groundwork is set, the engineers get to work. Whether it's designing systems, developing prototypes 
                                or constructing infrastructure, we ensure every step of the process aligns with the agreed-upon plan. 
                                Regular updates keep you informed and involved.
                            </p>
                        </div>
                        <div className="process">
                            <p>05.</p>
                            <br/>

                            <h2>Quality Assurance</h2>
                            <br/>

                            <p>
                                We prioritize excellence by rigorously reviewing the work at every stage. Our quality assurance process includes 
                                thorough testing, inspections and feedback loops to ensure the final outcome meets or exceeds industry standards and client 
                                expectations.
                            </p>
                        </div>
                        <div className="process">
                            <p>06.</p>
                            <br/>

                            <h2>Deployment and Delivery</h2>
                            <br/>

                            <p>
                                After successful quality checks, we oversee the deployment or handover of the completed project. 
                                We ensure a smooth transition and provide support to address any questions or concerns during implementation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default About;