import axios from "axios";

export default {

  searchYoutube:function(term){
    const key = "&key=AIzaSyDvRtq9mRjNQjPPiuiPKU8gWpo3AHkCLaY";
    const queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=" + term + key;
   // term;
    term;
    //const fullQueryURL = queryURL + key + term;
    return axios.get(queryURL);
  },

  getVideo: function (){
    return axios.get("/api/videos");

  },

  saveVideo: function(videoObj){
    return axios.post("/api/videos", videoObj);
  },
  deleteVideo: function(id){
    return axios.delete(`/api/videos/${id}`)
  }

  
};

