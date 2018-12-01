import React from "react"
import "./Counters.css"



const Counters = props => (
    
    <div className="container">
            <div className="col-md-1"></div>
           <div class="col-md-10 study-session" data-toggle="collapse" data-target="#demo" aria-expanded="false" aria-controls="collapseExample">
            Study Sessions
            </div>
            <div className="col-md-1"></div>
    <div className="row collapse" id="demo"  >


        <div  className="col-md-1 "></div>
        <div   className="col-md-3 counter ">
        <h3 class="display-2">

        {props.renderTimer(props.renderTimer)}
        
        </h3>
        <p className="counter-text"  >Click
        
        <a onClick={()=>props.handleIncrement(props.handleIncrement)}
    
           
        > here </a> and start a session</p>
        </div>

        <div  className="col-md-3 counter ">

        <h3 class="display-2">{props.studySession}</h3>
        <p className="counter-text">You had this many sessions</p>
        </div>

        <div  className="col-md-3 counter ">

         <h3 class="display-2">{props.totalTime} hs</h3>
        <p className="counter-text">All time spent studying goes here</p>
        </div>
        <div  className="col-md-1"></div>
        


    </div>
    </div>

)

export default Counters;