import React from "react"

import "./About.css"

const About = () => {
    const imagePath = process.env.NODE_ENV === "production" ? "/static" : "";

    return (
        <div className="about_container">
            <div className="about_row1">
                <div className="about_col1">
                    {<img className="about_image" src={`${imagePath}/aboutImage.svg`}></img>}
                </div>
                <div className="about_col2">
                    <div>welcome to trashed</div>
                </div>
            </div>
            <div className="about_row3">
                <div className="about_row3_col1">report waste in your area</div>
                <div className="about_row3_col2">organize clean up events</div>
                <div className="about_row3_col3">reduce waste from home</div>
            </div>
            <div className="about_row2">
                <div> <span>TRASHED </span>is an application designed for users 
                    interested in keeping their communities clean and beautiful! 
                    Whether you want to get out and get your hands dirty, or 
                    create change from the comfort of your home, <span>TRASHED </span> 
                    can be a helpful tool for anyone.</div>
            </div>
            <div className="about_row4">Built and designed by Quintin Hull as his capstone 
                at<span className="aa_span">&nbsp;App Academy.</span></div>
        </div>
    )
}

export default About;