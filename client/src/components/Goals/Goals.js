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
import "./Goals.css"


class Goals extends Component {

  
    // componentDidUpdate(){
    //     this.props.inputElement.curent.focus()
    // }


    render(){
        return(
            <div className="container">
    <div className="row">
    
        <div className="col-md-12" >

        <h3 className="goals"> First things first! Enter what you wish to learn!</h3>

        <form onSubmit={this.props.addItem}>
            <div className="form-group">
                <label htmlFor="term" className="goals">We'll suggest you the best path to get there!</label>
                <input 
                onChange={this.props.handleInput}
                ref={this.props.inputElement}
                value={this.props.currentGoal.text}
                
                
                type="text" className="form-control" id="term" aria-describedby="emailHelp" />
              </div>

              
              <button  type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>


    </div>
    <div>
        <hr/>
    </div>


</div>  

        )
    }

}

         
 

export default Goals;