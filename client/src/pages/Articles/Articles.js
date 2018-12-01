import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Saved from "../../components/Saved";
import Results from "../../components/Results";
import Search from "../../components/Search";
import Jumbotron from "../../components/Jumbotron"
import Goals from "../../components/Goals"
import Todoitems from "../../components/Todoitems"
import "./Articles.css";
import API from "../../utils/API";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { relative } from "path";
import axios from 'axios';
import {Button, Panel, Collapse} from "react-bootstrap";
import Buttons from "../../components/Buttons";
import Counters from "../../components/Counters";
import Moment from "react-moment";
import Timer from "../../components/Countdown"



class Articles extends Component {

  state = {
    videos:[],
    term:"",
    isOpen:false,
    videoId:"",
    saved:[],
    open:true,
    countTerms:0,
    searchedTerms:[],
    goals:[],
    goalsBody:{text:'', key:''},
    currentGoal:{text: '', key:'', body:''},
    youEnter:"You enter:",
    studySession:0,
    studyCounter:0,
    totalTime:0,
    textBody:{text:'', key:""},
    htmlBody:"this is html",
    animationBody:"this is animation",
    
  }

  hoursStudied = () => {
    let newTime = this.state.studySession * 25;
    console.log(newTime)

  }


  handleIncrement = () => {
    this.setState({ studySession: this.state.studySession + 1})
    let formatTime =  (30/60);
    let finalTime = Math.floor(formatTime * 100) / 100;
    
    this.setState({totalTime: this.state.totalTime + finalTime})


    console.log(formatTime, finalTime)
    console.log("this is new time" )
    console.log("clicked session!")
  }


  componentDidMount(){
    console.log()
   this.getSavedVideos();
  }


  handleInput = e =>{
    console.log('Hello Input')
    const itemText = e.target.value
    const body = e.target.value;
    const currentGoal = {text: itemText, key: Date.now(), body:body}
    this.setState({
      currentGoal,
    })
  }

  deleteItem = key => {
    const filteredItems = this.state.goals.filter(goal => {
      return goal.key !== key
    })
    this.setState({
      goals: filteredItems,
    })
  }




  addItem = e => {
    e.preventDefault()
    console.log('Hello Add Item')

    const newItem = this.state.currentGoal

    if (newItem.text === 'Html'){

      const newObject = Object.assign({}, newItem, {
        body: "To build websites, you should know about HTML — the fundamental technology used to define the structure of a webpage. HTML is used to specify whether your web content should be recognized as a paragraph, list, heading, link, image, multimedia player, form, or one of many other available elements or even a new element that you define. We recommend you start by looking at some of the tutorials we selected for HTML, CSS and Javascript!"
      })

      const goals = [...this.state.goals, newObject]
      this.setState({
        goals: goals,
        currentGoal: {text: '', key:'', body:''},
      })
    }
    if (newItem.text === 'Animation'){
      const newObject = Object.assign({}, newItem, {
        body: "    It is easier to get into animation today than ever before. There are plenty of software available, some are quite cheap (or even free), and most modern computer can handle the more simple animation tasks (mostly 2D). The catch is that although anyone can start animating right now, the art of animation is not easy to learn and very hard to master. You should start by looking into After Effects, Cinema 4d or TV Paint!"
      })
      const goals = [...this.state.goals, newObject]
      this.setState({
        goals: goals,
        currentGoal: {text: '', key:'', body:''},
      })  
    }
    // if (newItem.text !== 'Html' || 'Animation'){
    //   const newObject = Object.assign({}, newItem, {
    //     text: "Sorry!",
    //     body: "We couldn't find any matches!"
    //   })
    //   const goals = [...this.state.goals, newObject]
    //   this.setState({
    //     goals: goals,
    //     currentGoal: {text: '', key:'', body:''},
    //   })
    // }
  }

  getSavedVideos = () =>{
    API.getVideo()
    .then((res) => {
      this.setState({saved: res.data})
    })
  }

  handleGoalSubmit = (event) => {

  }

  renderTimer = () =>{
    
    return (
      <Timer />
    )
    
  }

  //Input for term 

  handleTermChange = (event) =>{
    this.setState({ term:event.target.value})
  }

  handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log("getting videos");
    console.log("this.state.term: ", this.state.term);
    API.searchYoutube(this.state.term)
    .then((res) =>{
      this.setState({ videos: res.data.items });
      console.log("this.state.videos: ", this.state.videos );
    })
    .then((searchedTerms)=>{
      let termsArray = [...this.state.searchedTerms, this.state.term]
      console.log(termsArray)
      this.setState({ 
      searchedTerms: termsArray});
      console.log("searched items: ", this.state.searchedTerms)

    })

    // this.setState(preState => ({
    //   searchedTerms:[...preState.searchedTerms, this.state.term]
    // }))
    // console.log
 
  }


 

  renderVideos = () => {
    return this.state.videos.map(video => (
      <Results
      thisVideoId={video.id.videoId}
      key={video.id.videoId}
      title={video.snippet.title}
      description={video.snippet.description}
      imageUrl={video.snippet.thumbnails.high.url}
      openModal={this.openModal}
      saveButton={this.saveButton}

      />
    ));
  }


  // renderButtons = () =>{
  //   return this.state.searchedTerms.map(term => (
  //     <Buttons
  //     term={term}
  //     />
  //   ))
  // }

  // renderButtons = () => {
  // return this.state.searchedTerms.map(searched =>(
  //   <Buttons 
  //   key={searched.id}
  //   term={searched}
  //   />
  // ))
  // }




  renderSavedVideos = () => {
    console.log(this.state.saved)
    return this.state.saved.map(save => (
      <Saved
      _id={save._id}
      thisVideoId={save.videoId}
      videoId={save.id}
      key={save.id}
      title={save.title}
      date={save.date}
      description={save.description}
      imageUrl={save.imageUrl}
      handleDeleteButton={this.handleDeleteButton}
      getSavedVideos={this.getSavedVideos}
      openModal={this.openModal}
      />
    ))
  }

  openModal = (thisVideoId) => {
    this.setState({isOpen: true, thisVideoId})
    console.log('clicked',thisVideoId)
  }

  handleDeleteButton = (id) => {
    console.log("delete clicked!", id);
    console.log(id);
    API.deleteVideo(id)
    .then(res =>this.getSavedVideos());
  }

  saveButton = (thisVideoId) => {
    console.log("save clicked", thisVideoId)
    const findVideoById = this.state.videos.find((video) => video.id.videoId===thisVideoId);
    console.log(this.state.videos)
    console.log("findVideoById: ", findVideoById);
    const newSave = {title:findVideoById.snippet.title, imageUrl:findVideoById.snippet.thumbnails.high.url, videoId:findVideoById.id.videoId, description:findVideoById.snippet.description};
    API.saveVideo(newSave)
    .then(this.getSavedVideos());
  }

  // saveButton = id =>{
  //   const video = this.state.videos.find(video => video.id === id);
  //   API.saveVideo({

  //     title:video.snippet.title,
  //     imageUrl:video.snippet.thumbnails.high.url,
  //     id:video.id.videoId
  //   }).then(() => this.getSavedVideos())
  // }

  
  
  render() {
    return (
      <div>
      <Jumbotron>
      <h1 className="display-4"> The Learning Spark </h1>
      <Goals 
      
        addItem={this.addItem}
        handleInput={this.handleInput}
        inputElement={this.inputElement}
        currentGoal={this.state.currentGoal}
        />
    </Jumbotron>
     
      <div className="main-container">
        <div className="container">
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.thisVideoId} onClose={() => this.setState({isOpen: false})} />


 

          

          


          <Counters
          handleIncrement={this.handleIncrement}
          studyCounter={this.state.studyCounter}
          studySession={this.state.studySession}
          totalTime={this.state.totalTime}
          renderTimer={this.renderTimer}
           />
        <div>
        
        </div>


           <Todoitems 
        
        youEnter={this.youEnter}
        entries={this.state.goals}
        deleteItem={this.deleteItem} />

      


          {/* Search Form and Results Section */}          
          <Search
            handleTermChange={this.handleTermChange}
            handleFormSubmit={this.handleFormSubmit}
            renderVideos={this.renderVideos}
          
          />

   
        
 
          {/* Saved Articles Section */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#library" aria-expanded="false" aria-controls="collapseExample">
                    Your Library
                    </button>
                    </h3>
                  </div>
                  <div className="panel-body collapse" id="library">
                    <ul className="list-group">
                    {this.renderSavedVideos()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
      </div>
    
    );
  }
}


export default Articles;
