import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {

    return (
        <footer style={{
            bottom: "0",
            backgroundColor: "#f5f5f5"
        }}
        >
        <Container className="py-3 text-center">
            <span className="text-muted text-centered">
                Created by Mitchell and Steph. You can find us on:
                <br />
                <i className="fab fa-github" /> github.com/Mitchell-McShane 
                <br />
                <i className="fab fa-github" /> github.com/stephdavis1 
            </span>
        </Container>
        </footer>
    )
}

export default Footer;
