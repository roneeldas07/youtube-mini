import { useEffect } from "react";

const useIntersectionObserver = (callback,target) => {
  const video_intersection_observer = new IntersectionObserver(
    callback,{rootMargin: "100px",threshold: 1,}
  );
  useEffect(() => {
    target &&
      video_intersection_observer.observe(
        target
      );
  }, [videoData]);

  return video_intersection_observer
}

export default useIntersectionObserver