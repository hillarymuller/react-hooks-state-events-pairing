import video from "../data/video.js";
import VideoInfo from "./VideoInfo";
import React from "react";


function App() {
  console.log("Here's your data:", video);

  return (
    <>
    <VideoInfo videoData={video} />
    
    </>
  );
}

export default App;
