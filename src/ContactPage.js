import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";


function ContactPage(props) {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleMail = (evt) => {
        setEmail(evt.target.value);
    }

    const handleSubject = (evt) => {
        setSubject(evt.target.value);
    }

    const handleBody = (evt) => {
        setBody(evt.target.value);
    }

    const handleReset = () => {
        setEmail("");
        setSubject("");
        setBody("");
    }

    return (
        <div className="home-page-css contact-page">
            <div className={`form-contact-page ${props.darkMode ? "form-contact-page-light-mode" : ""}`}>
                <Form>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" onChange={handleMail} value={email}></Form.Control>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" onChange={handleSubject} value={subject}></Form.Control>
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={handleBody} value={body}></Form.Control>
                    <div className="btn-grps">
                        <Button>Submit</Button>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}
export default ContactPage;
//service_ug8u48b