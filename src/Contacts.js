import React, { useState } from "react";
import PageHeader from "./PageHeader";

function Contacts(){
    const [showHeaderButtons, setShowHeaderButtons] = useState(false);

    // formData: An object that stores the form fields: fullName, phoneNUmber, email and message
    // setFormData: A function to update the state when users input data into the form fields.
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email:'',
        message:''
    });

    // This function listens for changes in the input fields
    // e.target: Refers to the input element being updated.
    // Destructuring: name - The name attribute of the input element(e.g, fullName). value - The user's input.
    // Updates formData by copying the current state and overwriting the changed field.
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    // e.preventDefault(): Prevents the default from behavior(e.g., refreshing the page).
    // fetch:
    //      - Sends a POST request to your backend endpoint(/send-email).
    //      - headers: Indicates that the request body contains JSON data.
    //      - body: Converts the formData object into a JSON string for transmission.
    // Alert: Shows a success message after submission. 
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send form data to the backend
        await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        });
        alert('Message sent!');
    }

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
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name*" required/>
                                <br/><br/>
                                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your Phone Number *" required/>
                                <br/><br/>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your e-mail address*" required/>
                                <br/><br/>
                                <textarea rows={6} cols={50} name="message" value={formData.message} onChange={handleChange} placeholder="Type your message"></textarea>
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