import React, { useState } from "react";
import VideoList from "../../components/videos/VideoList";
import VideoHeader from "../../components/videos/VideoHeader";
import { useContext } from "react";
import { AdminContext } from "../../utils/AdminContext";

const VideosPage = () => {
  const [search, setSearch] = useState("");
  const { refetchTrigger } = useContext(AdminContext);
  return (
    <div>
      <VideoHeader search={search} setSearch={setSearch} />
      <VideoList search={search} refetchTrigger={refetchTrigger} />
    </div>
  );
};

export default VideosPage;
