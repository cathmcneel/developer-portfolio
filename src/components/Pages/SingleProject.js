import React from 'react';
import { Card } from 'react-bootstrap';



const SingleProject = ( {name, description, img, github, applicationlink} ) => {
    
console.log(img);
    return (
        <div class="container projects" >
            <div  style={{ width: '' }} class="row project-card">    
            <div class="row">
            <h1 class="col-sm card-title" id="project-title"> {name} </h1>
            <div id='singleProjectContainer'>
                <div id='singleProjectImg'>
                    <img src={`/images/${img}.jpg`} alt={`${name} application screenshot`}></img>
                </div>
                <div id='singleProjectInfo'>
                    {/* reads text from 'info' item which contains HTML. This is translated into HTML by the dangerouslySetInnerHTML attribute */}
                    <div class="card-text" id='singleProjectText' dangerouslySetInnerHTML={{__html: description}}></div>
                    <br></br>
                    <div class="project-link" id='projectLinks'>
                        <a href={applicationlink} target="_blank"><p>View Live</p></a>
                        <a href={github} target="_blank"><p>View Github</p></a>
                        </div>
                        </div>
                </div>
            </div>
            </div> 
            {/* <a href="<Portfolio />"><p>Link Back to Portfolio Page</p></a> */}
        </div>
    )
}

export default SingleProject;