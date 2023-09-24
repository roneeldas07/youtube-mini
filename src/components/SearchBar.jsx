import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setVideos } from "../redux_slices/videosListSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  useEffect(() => {
    getSearchSuggestion(searchText).then((response) => {
      setSuggestions(response[1]);
      setDisplaySuggestions(true);
    });
  }, [searchText]);
  const getSearchSuggestion = async () => {
    let response = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchText
    );
    let jsonData = await response.json();
    return jsonData;
  };
  const search = async () => {
    let response = await fetch(
      YOUTUBE_SEARCH_API.replace("{searchQuery}", searchText)
    );
    let jsonData = await response.json();
    dispatch(setVideos(jsonData));
  };
  return (
    <div className="flex items-center relative w-full justify-center">
      <input
        className="border-solid border-2 border-gray-900 rounded-l-2xl py-1 px-5 w-4/6"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText}
      />
      {displaySuggestions && (
        <div
          id="suggestions"
          className={`absolute border-solid top-9 left-auto w-4/6 bg-white -translate-x-6`}
        >
          {suggestions.map((item) => (
            <div
              className="hover:bg-slate-50 p-2"
              onClick={() => {
                setSearchText(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
      <button
        className="py-1 px-3 rounded-r-2xl border-2 border-gray-600 border-solid hover:bg-slate-300"
        onClick={() => {
          search();
          setDisplaySuggestions(false);
        }}
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
