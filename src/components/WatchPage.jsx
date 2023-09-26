import React from "react";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import Comments from "./Comments";
import { detectDeviceType } from "../utils/utils";

const WatchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let deviceType = detectDeviceType();
  let width = "75%";
  let height = "600";
  if (deviceType == "Mobile") {
    width = "100%";
    height = "200";
  }
  return (
    <div className="p-2 flex flex-col h-[90vh] overflow-y-auto w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <iframe
          width={width}
          height={height}
          src={"https://www.youtube.com/embed/" + searchParams.get("vid")}
        />
        <div className="flex-1 h-[250px] sm:h-[600px] overflow-y-auto bg-slate-100 w-full rounded-lg p-2">
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
