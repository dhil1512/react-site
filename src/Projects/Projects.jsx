import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Projects(){
    return (
    <div className="container text-white mt-3">
        <h3 className="ms-2">Projects</h3>
        <div className="row">
            <div className="col-6">
                <div className="project-container p-3 mb-3 rounded container-height">
                    <h5>CLI-MC Profile Lookup</h5>
                    <p>A python-based command line interface tool to look up Minecraft Profile information via the Mojang API.</p>
                    <button className="btn">GitHub <i class="bi bi-github"></i></button>
                </div>
            </div>
            <div className="col-6">
                <div className="project-container p-3 mb-3 rounded container-height">
                    <h5>Discord Activity Ranking System</h5>
                    <p>A Discord Bot to increase user activity by creating a ranking system and leaderboard.</p>
                    <button className="btn">GitHub <i class="bi bi-github"></i></button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="project-container p-3 mb-3 rounded container-height">
                    <h5>DylanW.co.uk</h5>
                    <p>My personal website that I built using ReactJS, SCSS and Bootstrap. I am hosting this website using AWS/Cloudflare.</p>
                    <button className="btn">GitHub <i class="bi bi-github"></i></button>
                </div>
            </div>
            <div className="col-6">
                <div className="project-container p-3 mb-3 rounded container-height">
                    <h5>Item 4</h5>
                    <p>My personal website that I built using ReactJS, SCSS and Bootstrap. I am hosting this website using AWS/Cloudflare.</p>
                    <button className="btn">GitHub <i class="bi bi-github"></i></button>
                </div>
            </div>
        </div>
    </div>
    );
  };
  

export default Projects