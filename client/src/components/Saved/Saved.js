import React from "react";
import "./Saved.css"
import ModalVideo from "react-modal-video";





const Saved = props =>  (



<div className="container" >
    <div className="row" >
        <div className="col-md-4" >
        <img className="media-object saved" src={props.imageUrl}/> 

        </div>
        <div className="col-md-8">
        <h4 className="title">{props.title} </h4>
        <p>{props.description}</p>

        <span className="btn-group pull-right">
        <a href={props.url} target="_blank">
        <button className="btn btn-default" onClick={()=>props.openModal(props.thisVideoId)}>View Video</button>
        </a>
        <button className="btn btn-primary red" onClick={() => props.handleDeleteButton(props._id)} >Delete</button>
    </span>

        </div>


    </div>
    <div>
        <hr/>
    </div>


</div>           
 
)

export default Saved;