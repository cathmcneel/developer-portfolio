import React from 'react';



const SingleProject = ( {name, description, img, github, applicationlink} ) => {
    

    return (
        <div >
            <h1> {name} </h1>
            <div id='singleProjectContainer'>
                <div id='singleProjectImg'>
                    <img src={`/assets/${img}.png`} alt={`${name} application screenshot`}></img>
                </div>
                <div id='singleProjectInfo'>
                    {/* reads text from 'info' item which contains HTML. This is translated into HTML by the dangerouslySetInnerHTML attribute */}
                    <div id='singleProjectText' dangerouslySetInnerHTML={{__html: description}}></div>
                    <br></br>
                    <div id='projectLinks'>
                        <a href={applicationlink} target="_blank"><p>View Live</p></a>
                        <a href={github} target="_blank"><p>View Github</p></a>
                        <a href="<Portfolio />"><p>Link Back to Portfolio Page</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject;