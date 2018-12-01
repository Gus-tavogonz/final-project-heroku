import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
 
// Random component
const Completionist = () => <span>You are good to go!</span>;
const renderer = ({minutes, seconds, completed}) =>{
    if (completed) {
        return <Completionist />
    } else {
        return <span> {minutes}:{seconds}</span>
    }
}
 
class Timer extends Component {
    render(){
        return (
            <Countdown date={Date.now() + 1800000}
            renderer={renderer}>
            
          </Countdown>
        )
    }

 
}

export default Timer;