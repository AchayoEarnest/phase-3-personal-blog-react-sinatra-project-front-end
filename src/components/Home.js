import React from "react";
import Container from "./Container";
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <div className="Main_Page">
                <div className="Sidebar_Sect_Left">
                    <div className="Side_Bar_Links">
                        Home
                    </div>
                    <div className="Side_Bar_Links">
                        Explore
                    </div>
                    <div className="Side_Bar_Links">
                        Account
                    </div>
                    <div className="Side_Bar_Links">
                        Contact Us
                    </div>
                </div>

                <div className="Main_Area">
                    <div className="Hero_Head">
                        <h1>CAHAYO TECH BLOGS</h1>
                        <h3>Get Updates on Modern Technology</h3>
                        
                    </div> 
                    <Container />
                    <Container />
                    <Container />
                </div>

                <div className="Sidebar_Sect_Right">
                Sidebar_Area_Right
                </div>
            </div>
        </div>
    )
}

export default Home;