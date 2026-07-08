
import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
  <div className="about-content">
<h2>About Us</h2>
<p>We are a trusted financial platform dedicated to making loan access simple,fast and transparent. Our mission is to
  empower individuals and small business with flexible financing options without the hassle of traditional banking bureacracy.
</p>

<div className="card-container">
  <div className="cards">
    <h3>Fast Approval</h3>
    <p>Get decisions in minutes , not weeks</p>
  </div>

  <div className="cards">
    <h3>No hidden fees</h3>
    <p>100% free to apply-no hidden charges</p>
  </div>

  <div className="cards">
    <h3>Secure and Private</h3>
    <p>Your data is encrypted and never shared</p>
  </div>

</div>

  </div>
  </div>
  );
}
export default About;


