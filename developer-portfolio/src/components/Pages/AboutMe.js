import React from 'react';
import coverImage from '../../assets/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
     
      <div className="my-2">
        <p>
          I am a beginner developer, completing the Columbia Full Stack Coding Bootcamp in May. I have built several sites with various functionality and languages and am excited about several upcoming projects. 
        </p>
      </div>
      <img src={coverImage} className="my-2" style={{ width: "40%", height: "700px" }} alt="cover" />
    </section>
  );
}

export default About;