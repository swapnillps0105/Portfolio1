import "./FormStyles.css";
import React from 'react';

const FormPage = () => {
    return (
        <div className="form">
            <form>
                <span>Your Name</span>
                <input type="text"/>
                <span>Email</span>
                <input type="email"/>
                <span>Subject</span>
                <input type="text"/>
                <span>Message</span>
                <textarea rows="6" placeholder="type your message here"/>
                <button className="btn">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
