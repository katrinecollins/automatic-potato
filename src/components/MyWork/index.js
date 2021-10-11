import React from 'react';
import clipart2 from '../../images/1950-s-housewife-clipart-3.jpg'
import clipart3 from '../../images/chucks-clipart-17.jpg'
import clipart4 from '../../images/movie time.jpg'
import clipart5 from '../../images/cannabis-clipart-19.jpg'

function MyWork () {
return (
    <div id="my-work" class="my-work">
            <img src= {clipart2} class="float-right" />
          <h2>My Work</h2> 
            <div id="Run-Buddy" class="Run-Buddy">
                <h3>Run Buddy</h3>
                <a href="https://katrinecollins.github.io/Run-Buddy/">
                    <img src={clipart3} alt=""/>
                </a>
            </div>
             <div id="Mobile Movie Time" class="Mobile-Movie-Time">
                <h3>Mobile Movie Time</h3>
                <a href="https://katrinecollins.github.io/group-1-project/">
                    <img src={clipart4} alt=""/>
                </a>
            </div>
            <div id="Workout-Budz class="Workout-Budz>
                <h3>Workout Budz</h3>
                <a href="https://workout-budz.herokuapp.com/login">
                    <img src={clipart5} alt=""/>
                </a>
            </div>
        </div>
)
}

export default MyWork;