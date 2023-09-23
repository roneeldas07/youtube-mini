import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../redux_slices/videosListSlice";

const Content = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.videos_list.videos);
  useEffect(() => {
    getVideosList().then((response) => {
      dispatch(setVideos(response));
    });
  }, []);

  const getVideosList = async () => {
    let response = await fetch(YOUTUBE_VIDEOS_API);
    let jsonData = await response.json();
    return jsonData;
  };

  return (
    <div className="flex flex-wrap justify-start p-5 grow h-[90vh] overflow-y-auto">
      {videoData?.items?.length > 0 &&
        videoData.items.map((item, index) => (
          <div key={index} className="w-100 sm:w-1/2 md:w-1/3 xl:w-1/4">
            <Link to={"/watch?vid=" + item.id}>
              <VideoCard snippet={item.snippet} statistics={item.statistics} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Content;
