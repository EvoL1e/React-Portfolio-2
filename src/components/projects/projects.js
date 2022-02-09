import React from 'react';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';

function projects() {
    return (
        <article id="my-work">
            <h2>My Work</h2>
            <section class="boxes-row justify-center">
                <div class="box-column">
                    <figure class="work-boxes" id = "whatsForDinner">
                        <h3 class="box-header">Whats For Dinner</h3>
                        <img src="./images/whatsForDinner.png" alt="Example"/>
                    </figure>
                    <p>
                        My first project. I worked with a team of 2 other people to create a website to help others figure out what they can make with whats in their fridge. Its as easy as typing in what you want to use or have 
                        and letting the website grab a list of delicious foods for you. We used UIKIT, Spectacular API, Chuck Norris API, Javascript, html, and CSS
                    </p>
                        
                    <a href="https://jdesgarennes.github.io/whatsForDinner/">
                    <AiFillHome size="3rem" />
                    </a>

                    <a href="https://github.com/jdesgarennes/whatsForDinner">
                    <AiFillGithub size="3rem" />
                    </a>

                </div>
               

                <div class="box-column">
                    <figure class="work-boxes" id = "gameReviewer">
                        <h3 class="box-header">Game Reviewer</h3>
                        <img src="./images/gameReviewer.png" alt="Example"/>
                    </figure>

                    <p>
                        My second project. I worked with a team of 3 others to make a website where users could  review their favorite games. We used Passport.js, OAUTH 2.0, NodeMailer, BCRYPT, JavaScript, CSS, Express.JS, MYSQL, Sequelize, and Handlebars.
                    </p>
                        
                    <a href="https://evol1e.github.io/Password-Generator/index.html">
                    <AiFillHome size="3rem" />
                    </a>

                    <a href="https://github.com/EvoL1e/Password-Generator">
                    <AiFillGithub size="3rem" />
                    </a>

                </div>

                <div class="box-column">
                    <figure class="work-boxes" id = "chatApp">
                        <h3 class="box-header">Chat App</h3>
                        <img src="./images/chatApp.png" alt="Example"/>
                    </figure>

                    <p>
                        My third project. Uses React, GraphQL, MongoDB, and WebSocket. A simple group chat app that allows you to type to a group message board.
                    </p>
                        
                    <a href="https://fast-ridge-63034.herokuapp.com/">
                    <AiFillHome size="3rem" />
                    </a>

                    <a href=" https://github.com/chriscast94/ACK---messenger">
                    <AiFillGithub size="3rem" />
                    </a>

                </div>

                <div class="box-column">
                    <figure class="work-boxes" id = "passwordGenerator">
                        <h3 class="box-header">Password Generator</h3>
                        <img src="./images/passwordGenerator.png" alt="Example"/>
                    </figure>

                    <p>
                        A simple password Generator that can make a secure randomly generated password at any length between 8 characters and 128 characters
                    </p>
                        
                    <a href="https://evol1e.github.io/Password-Generator/index.html">
                    <AiFillHome size="3rem" />
                    </a>

                    <a href=" https://github.com/EvoL1e/Password-Generator">
                    <AiFillGithub size="3rem" />
                    </a>

                </div>

                <div class="box-column">
                    <figure class="work-boxes" id = "teamProfileGenerator">
                        <h3 class="box-header">Team Profile Generator</h3>
                        <img src="./images/teamProfileGenerator.png" alt="Example"/>
                    </figure>

                    <p>
                        Allows you to generate a team using inquirer. Will ask you a few questions and generate a website with what you enter.
                    </p>
                        
                    <a href="https://youtu.be/e7PbXzHhj14">
                    <AiFillHome size="3rem" />
                    </a>

                    <a href=" https://github.com/EvoL1e/Team-Profile-Generator">
                    <AiFillGithub size="3rem" />
                    </a>

                </div>

                <div class="box-column">
                    <figure class="work-boxes" id = "dayPlanner">
                        <h3 class="box-header">Day Planner</h3>
                        <img src="./images/dayPlanner.png" alt="Example"/>
                    </figure>

                    <p>
                        Allows to plan out your day. Will color code each time block for then it is the past, present, and future so you can now when the event you planned is at a glance.
                    </p>
                        
                    <a href="https://evol1e.github.io/Day-Planner/">
                    <AiFillHome size="3rem" />
                    </a>

                    <a href=" https://evol1e.github.io/Day-Planner/">
                    <AiFillGithub size="3rem" />
                    </a>

                </div>


            </section>

        </article>
        
    );
}

export default projects;