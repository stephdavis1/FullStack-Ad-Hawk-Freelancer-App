import React from "react";
import { Container } from "react-bootstrap";
import { Github } from 'react-bootstrap-icons';

const Footer = () => {

    return (
        <footer style={{
            bottom: "0",
            backgroundColor: "#f5f5f5"
        }}
        >
        <Container className="py-3 text-center">
            <span className="text-footer text-centered">
                <p>Created by Mitchell and Steph. 
                <br />You can find us at:</p>
                <Github href="github.com/Mitchell-McShane">/Mitchell-McShane</Github>
                <Github href="https://github.com/stephdavis1">/stephdavis1</Github>
            </span>
        </Container>
        </footer>
    )
}

export default Footer;
