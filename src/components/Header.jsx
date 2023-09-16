import React from "react";
import burger_menu from "./../assets/burger.svg";
import youtube_icon from "./../assets/youtube.svg";
import user_acc from "./../assets/user_acc.svg";
import { toggleBurger } from "../redux_slices/generalSlice";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center p-3 bg-slate-100 shadow-md">
      <div className="flex items-center gap-3">
        <div className="pl-4 pr-8 h-10">
          <img
            className="p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl"
            src={burger_menu}
            onClick={() => {
              dispatch(toggleBurger());
            }}
          />
        </div>
        <a href=".">
          <img className="h-10 cursor-pointer" src={youtube_icon} />
        </a>
      </div>
      <SearchBar />
      <div className="flex items-center">
        <img
          className="h-10 p-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl"
          src={user_acc}
        />
      </div>
    </div>
  );
};

export default Header;
