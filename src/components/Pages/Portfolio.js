import React, {useState} from 'react';

import SingleProject from './SingleProject';


function Portfolio() {

    const [projects, setproject] = useState([
        {
          id: 1,
          name: "Shindig",
          active: true,
          description: "Search platform for finding entertainemnt events in your area on specific dates",
          img: "shindig",
          // remember to save image with same name in the assets folder
          github: "https://github.com/cathmcneel/shindig",
          applicationlink: "https://cathmcneel.github.io/shindig/"
        },
        {
          id: 2,
          name: "Restaurant Rater",
          active: true,
          description: "Social Network for Rating Restaurants, leaving comments, and seeing what others have to say about all the local grub!",
          img: "restaurantrater",
          github: "https://github.com/cathmcneel/restaurant-rater",
          applicationlink: "https://hidden-anchorage-87241.herokuapp.com/"
        }
      ])

  return (
 
        <div className="Page"> 
          <h1>Projects</h1>
          <div className="project-card">

            {projects.map((project) => (
              <SingleProject 
                 name={project.name} 
                description={project.description}
                img={project.img}
                github={project.github}
                applicationlink={project.applicationlink}
                />
            ))}
          </div>
         </div>
 );
};

export default Portfolio;