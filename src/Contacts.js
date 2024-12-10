import React, { useState } from "react";
import PageHeader from "./PageHeader";

function Contacts(){
    const [showHeaderButtons, setShowHeaderButtons] = useState(false);

    return (
        <div className="contactsContainer">
            <PageHeader setShowHeaderButtons={setShowHeaderButtons} showHeaderButtons={showHeaderButtons}/>

            <div className="mainContent">
                <div className="landingDiv">
                    <p>Home{">"}<span>Contacts</span></p>
                </div>

                <div className="contactsDiv">
                    <div className="contacts">
                        <div className="left">
                            <h2>Stay In Touch</h2><br/>
                            <p>Let's create something awesome together!</p><br/>

                            <p>
                                Feel free to contact us in any convenient way to discuss your project or ask any questions. Our managers will gladly provide an 
                                initial consultation and estimates. We are happy to take on projects of any complexity.
                            </p>
                            <br/>

                            <div className="contact">
                                <div className="icon">
                                    <p><i class="fa-solid fa-address-card"></i></p>
                                </div>
                                <div className="content">
                                    <h2>Address</h2>
                                    <p>778, KAKAMEGA</p>
                                </div>
                            </div>

                            <div className="contact">
                                <div className="icon">
                                    <p><i class="fa-solid fa-phone-volume"></i></p>
                                </div>
                                <div className="content">
                                    <h2>Phone</h2>
                                    <p>+254 791626298</p>
                                </div>
                            </div>

                            <div className="contact">
                                <div className="icon">
                                    <p><i class="fa-solid fa-envelope"></i></p>
                                </div>
                                <div className="content">
                                    <h2>E-mail</h2>
                                    <p>wconglomerate@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <form>
                                <input type="text" placeholder="Enter your full name*"/>
                                <br/><br/>
                                <input type="text" placeholder="Enter your Phone Number *"/>
                                <br/><br/>
                                <input type="text" placeholder="Enter your e-mail address*"/>
                                <br/><br/>
                                <textarea rows={6} cols={50} placeholder="Type your message"></textarea>
                                <br/><br/>
                                <div>
                                    <button>SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;