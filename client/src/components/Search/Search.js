import React from "react";
import "./Search.css"

const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary search">
          <div className="panel-heading">
            <h3>
            
              Start learning here!
              
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                
                <input onChange={props.handleTermChange} type="text" className="form-control" id="term" aria-describedby="emailHelp" />
              </div>

              
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <br/><br/>

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>
              
               Results
              
            </h3>
          </div>
          <div className="panel-body">
            {props.renderVideos()}           
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>


export default Search;