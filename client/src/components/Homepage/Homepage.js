import React from 'react';
import Button from "react-bootstrap/Button";

const Homepage = () => {

    return (
        <div class="container bg-overlay">
            <div class="homepage-logo">
                <img src='https://i.imgur.com/5gwyncf.png' width="280" height="100" alt="ad-hawk"></img>
            </div>
            <br />

            <div class="homepage-h1">
                <h1>Hire the best freelancers for any job, online.</h1>
                <br />
            </div>
            <div class="homepage-h4">
                <h4>Millions of people use Ad-hawk to turn their ideas into reality</h4>
            </div>
            <br />
            <div class="homepage-button">
                <Button href="/alljobs">Get Started</Button>
            </div>
        </div>
    )
};

export default Homepage;
