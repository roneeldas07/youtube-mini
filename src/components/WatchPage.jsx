import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <div className="p-2">
      <iframe
        width="873"
        height="491"
        src={"https://www.youtube.com/embed/" + searchParams.get("vid")}
      ></iframe>
    </div>
  );
};

export default WatchPage;
