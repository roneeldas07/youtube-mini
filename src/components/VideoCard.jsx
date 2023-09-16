import React from "react";

const VideoCard = ({ snippet, statistics }) => {
  const formatViews = (count = 0) => {
    if (count < 1000) return count;
    else if (count < 100000) return parseInt(count / 1000) + " k";
    else return parseInt(count / 100000) + " lakh";
  };
  return (
    <div className="flex flex-col px-2 pb-5 pt-2 gap-2">
      <div>
        <img
          src={snippet.thumbnails.high.url}
          className="w-full h-44 rounded-md cursor-pointer"
        />
      </div>
      <div className="flex gap-1">
        <div className="flex flex-col">
          <span className="font-bold">{snippet.title}</span>
          <span className="text-sm text-slate-600 font-semibold">
            {snippet.channelTitle}
          </span>
          {statistics?.viewCount && (
            <span className="text-sm text-slate-600 font-semibold">
              {formatViews(statistics.viewCount)} views • Streamed 1h ago
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
