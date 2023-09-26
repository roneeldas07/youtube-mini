import React from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import Comments from "./Comments";

const WatchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div className="p-2 flex flex-col h-[90vh] overflow-y-auto w-full">
      <div className="flex gap-2">
        <iframe
          width="1080"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("vid")}
        ></iframe>
        <div className="flex-1">
          <LiveChat />
        </div>
      </div>
      <div className="mt-3">
        <Comments />
      </div>
    </div>
  );
};

export default WatchPage;
