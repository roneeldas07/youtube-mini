import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, setVideos } from "../redux_slices/videosListSlice";

const Content = () => {
  const video_intersection_observer = new IntersectionObserver(
    (entries) => {
      let lastCard = entries[0];
      if (!lastCard.isIntersecting) return;
      getVideosList().then((response) => {
        dispatch(addVideos(response.items));
      });
      video_intersection_observer.unobserve(lastCard.target);
    },
    {
      rootMargin: "100px",
      threshold: 1,
    }
  );
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.videos_list.videos);
  useEffect(() => {
    console.log("useEffect initial");
    getVideosList().then((response) => {
      dispatch(setVideos(response.items));
    });
  }, []);

  useEffect(() => {
    document.querySelector("#video-card:last-child") &&
      video_intersection_observer.observe(
        document.querySelector("#video-card:last-child")
      );
  }, [videoData]);

  const getVideosList = async () => {
    let response = await fetch(YOUTUBE_VIDEOS_API);
    let jsonData = await response.json();
    return jsonData;
  };

  return (
    <div className="flex flex-wrap justify-start p-5 grow h-[90vh] overflow-y-auto">
      {videoData?.length > 0 &&
        videoData.map((item, index) => (
          <div
            key={index}
            id="video-card"
            className="w-100 sm:w-1/2 md:w-1/3 xl:w-1/4"
          >
            <Link to={"/watch?vid=" + item.id}>
              <VideoCard snippet={item.snippet} statistics={item.statistics} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Content;
