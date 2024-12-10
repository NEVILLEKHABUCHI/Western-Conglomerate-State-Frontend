import React, {useState} from "react";
import PageHeader from "./PageHeader";

function Services(){

    const [showHeaderButtons, setShowHeaderButtons] = useState(false);

    return (
        <div className="servicesContainer">
            <PageHeader setShowHeaderButtons={setShowHeaderButtons} showHeaderButtons={showHeaderButtons}/>
            <div className="mainContent">
                <div className="landingDiv">
                    <p>Home{">"}<span>Services</span></p>
                </div>

                <div className="services">
                    <div className="mainServices">
                        <div className="service">
                            <div className="left">
                              <div className="top">
                                <h2>Civil engineering</h2>
                                <p id="underline"></p>
                                <br/>
                              </div>

                              <p id="body">
                                Our civil engineering services are designed to bring your infrastructure and construction projects to life with precision and expertise. We connect you with skilled professionals 
                                who specialize in designing planning and managing construction projects of all scales, ensuring safety, efficiency and sustainability. <br/><br/>
                                From roadways, bridges, and buildings to water systems and urban planning, our civil engineers are equipped to tackle the most complex challenges. They adhere to the highest 
                                standards, leveraging cutting-edge tools and methodologies to deliver solutions that not only meet but exceed your expectations. <br/><br/>
                                Whether you're starting a new project or need expert advice on an ongoing one, our civil engineering services are here to turn your vision into reality.
                              </p>
                            </div>
                            <div className="right">
                                <img src="Civil_Engineering.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="service">
                            <div className="left">
                                <img src="Architecture_Service.jpg" alt=""></img>
                            </div>
                            <div className="right">
                                <div className="top">
                                    <h2>Architecture</h2>
                                    <p id="underline"></p>
                                    <br/>
                                </div>

                                <p id="body">
                                    Our architecture services blend creativity, functionality and innovation to bring your ideas to life. We connect you with visionary architects who specialize 
                                    in designing spaces that are not only aesthetically pleasing but also practical and sustainable. <br/><br/>
                                    From residential homes and commercial buildings to urban developmets and interior spaces, our architects work closely with you to understand your unique needs and preferences. They create 
                                    designs that harmonize with the environment, optimize space and reflect your vision. <br/><br/>
                                    Whether you are planning a new build, remodeling or conceptualizing a large-scale project, our architecture services ensure every detail is meticulously crafted to achieve 
                                    excellence in design and functionality.
                                </p>
                            </div>
                        </div>

                        <div className="service">
                            <div className="left">
                                <div className="top">
                                    <h2>Software Engineering</h2>
                                    <p id="underline"></p>
                                    <br/>
                                </div>
                                
                                <p id="body">
                                    Our software engineering services connect you with skilled professionals who bring technical expertise and innovative thinking to your digital projects. Whether you need 
                                    custom software development, system integration or cutting-edge solutions, we have the right talent to meet your needs. <br/><br/>
                                    From developing robust applications to optimizing existing systems, our software engineers specialize ibn designing, building, testing and maintaining software that delivers results. 
                                    They leverage the latest technologies and methodologies to ensure your software is scalable, secure and user-friendly.<br/><br/>
                                    Whether you're a startup looking to build your first product or an enterprise aiming to enhance your digital infrastructure, our software engineering services are tailored to help you achieve your 
                                    goals efficiently and effectively.
                                </p>
                            </div>
                            <div className="right">
                            <img src="Software_Engineering_Service.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="service">
                            <div className="left">
                                <img src="Mechanical_Engineering.jpg" alt=""/>
                            </div>
                            <div className="right">
                                <div className="top">
                                    <h2>Mechanical Engineering</h2>
                                    <p id="underline"></p>
                                    <br/>
                                </div>

                                <p id="body">
                                    Our mechanical Engineering services provide access to skilled professionals who specialize in designing, analyzing and manufacturing mechanical systems and components. We connect you 
                                    with experts who bring innovation and precision to a wide range of industries, from automotive and aerospace to manufacturing and energy. <br/><br/>
                                    Our engineers excel in areas such as machine design, thermal systems, robotics and product development. Using advanced tools and methodologies, they create solutions that optimize performance, 
                                    enhance efficiency and meet your specific requirements.<br/><br/>
                                    Whether you're developing a new product, improving existing systems, or addressing technical challenges, our mechanical engineering services deliver reliable, high-quality results tailored to your 
                                    project needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Services;