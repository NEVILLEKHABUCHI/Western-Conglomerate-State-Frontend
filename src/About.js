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
            </div>
        </div>
    )
}
export default About;