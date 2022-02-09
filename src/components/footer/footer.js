import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
    <div class="footer" id="footer">
        <a href="https://github.com/EvoL1e/">
            <AiFillGithub size="3rem" />
        </a>
        <a href="https://www.instagram.com/aibrahim039/?hl=en">
            <AiFillInstagram size="3rem" />
        </a>
        <a href="https://linkedin.com/in/abraam-ibrahim-6517911b5">
            <AiFillLinkedin size="3rem" />
        </a>
        <h3>Thank you for visting!</h3>
        <p>2021 Abraam Ibrahim</p>
    </div>
    );
}

export default Footer;