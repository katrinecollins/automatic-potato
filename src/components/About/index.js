import React from 'react';

import clipart from '../../images/1940s-music-clipart-5.jpg'
import profilePicture from '../../images/61053103_10105891516570451_7078254726856310784_n.jpg'

function About () {

    return (
        <div id="about-me" class="about-me">
            <img src={clipart} class="float-left" />
            <h2>About Me</h2>
            
            <div id="my-pic" class="my-pic">
                    <img src={profilePicture} class= "float-right" />
                <p>
                    Hi, my name is Katrine. I have a B.A. in medieval literature and American history from UCONN, so you know I’m pretty good at JEOPARDY. 
                    My passions are cannabis and telling the stories of the women that have been grossly under-represented throughout history.  
                </p>
            </div>
        </div>
    )
}

export default About;