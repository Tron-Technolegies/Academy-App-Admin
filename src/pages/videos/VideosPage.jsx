import React from "react";
import VideoList from "../../components/videos/VideoList";
import VideoHeader from "../../components/videos/videoHeader";

const VideosPage = () => {
  return (
    <div>
      <VideoHeader />
      <VideoList />
    </div>
  );
};

export default VideosPage;
