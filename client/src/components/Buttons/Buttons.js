import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Saved from "../../components/Saved";
import Results from "../../components/Results";
import Search from "../../components/Search";
import API from "../../utils/API";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { relative } from "path";
import axios from 'axios';


const Buttons = props =>

<div className="container">
    <div className="row">
    
        <div className="col-md-8">
      
      

        <span className="btn-group pull-right">
    
        
        
        <button className="btn btn-primary red"  >{props.term}</button>
    </span>

        </div>


    </div>
    <div>
        <hr/>
    </div>


</div>           
 

export default Buttons;

