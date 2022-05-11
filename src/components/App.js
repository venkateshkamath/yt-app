import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "./hooks/useVideos";
const App = () => {
  const [selectedVideos, setSelectedVideos] = useState(null);
  const [videos, search] = useVideos("doraemon");
  useEffect(()=>{
    setSelectedVideos(videos[0]);

  }, [videos])

  // Array items

  return (
    <div className="ui container">
      <h1>
        <span style={{ color: "red" }}>HB</span>&nbsp;Tube
      </h1>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {" "}
            <VideoDetail video={selectedVideos} />
          </div>
          <div className="five wide column">
            {" "}
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideos(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
