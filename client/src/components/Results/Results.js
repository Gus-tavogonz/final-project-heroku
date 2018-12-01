import React from "react";
import "./Results.css"
import ModalVideo from "react-modal-video";
import ReactDom from "react-dom"

const Results = props =>



    <div className="card" data-aos="fade-up" >

    <img className="card-img-top" src={props.imageUrl} />
    <h6>
        <span>
            <p>{props.title}</p>
        </span>
        <span className="btn-group pull-right">
            <button className="btn btn-default" onClick={()=>props.openModal(props.thisVideoId)} >View video</button>
            
        <button className="btn btn-primary" onClick={()=>props.saveButton(props.thisVideoId)}>Save</button>
        </span>
    </h6>
      
    
    </div>



export default Results;