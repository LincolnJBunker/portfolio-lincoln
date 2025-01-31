import React from "react";
import Sentinel from '../../public/Sentinel.png'
import ATPM from '../../public/ATPM.png'
import Huzz from '../../public/HUZZ.png'

export const Projects = () => {
    const projects = [
        {
            title: "Sentinel",
            tech: "Typescript, React, MUI, Python, PostgreSQL, AWS, Serverless",
            description: `While working at Monolith, I helped collaborate and develop Sentinel, which handles real-time Amazon data for each of Monolith's brands.
            I contributed significantly to the second version of the app, adding admin features for managing FBM, WFM, Shopify Orders, feature flag integrations, and company reports.`,
            image: Sentinel
        },
        {
            title: "Alpine Twin Peak Maintenance",
            tech: "Javascript, React, React Bootstrap, Node.js, PostgreSQL, Sequelize",
            description: `My first personal full-stack project! This website supports my aeration business, educating users about aeration and offering an online scheduling tool.
            I implemented an admin dashboard to manage users and appointments, along with a contact system using NodeMailer.`,
            image: ATPM
        },
        {
            title: "Nature Network",
            tech: "Javascript, React, React Bootstrap, Node.js, PostgreSQL, Sequelize, NPS API, Google Maps API",
            description: `A group project—a social media app for U.S. National Parks! Users can sign up, connect with friends, and post about park adventures.
            Integrated Google Maps & NPS APIs to display all parks, along with their info and images.`,
            image: "/images/nature-network.png"
        },
        {
            title: "Huzz Converter",
            tech: "Typescript, React, Gender API",
            description: `A fun project inspired by a social media video! This tool appends "-ruzz" to male names and converts female names to "Huzz".
            I leveraged the Gender API to dynamically handle name conversion, avoiding the need for hardcoded logic.`,
            image: Huzz
        }
    ];

    return (
        <React.Fragment>
            <div className="projects-container">
                <h1>Projects</h1>
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <h5 className="project-tech">{project.tech}</h5>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};
