import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


function contactMe() {
    return (
        <article id="contact-me">
            <section class="row contact-info">
                <h2>Contact Me</h2>
                <ul>
                    <li>Email: abraam31758@gmail.com</li>

                    <li>Phone: (951) 422-1517</li>

                    <li>
                        <a href="https://github.com/EvoL1e/">
                            <AiFillGithub size="3rem" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aibrahim039/?hl=en">
                            <AiFillInstagram size="3rem" />
                        </a>
                    </li>

                    <li>
                        <a href="https://linkedin.com/in/abraam-ibrahim-6517911b5">
                            <AiFillLinkedin size="3rem" />
                        </a>
                    </li>
                </ul>
            </section>
        </article>
    );
}

export default contactMe;