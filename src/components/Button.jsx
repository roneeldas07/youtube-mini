import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={"/"}>
      <li
        className={`p-2 cursor-pointer rounded-md hover:bg-slate-300 ${
          props.vertical ? "" : "pl-7"
        }`}
      >
        <div
          className={`flex ${
            props.vertical
              ? "flex-col items-center justify-center gap-1"
              : "gap-3"
          }`}
        >
          <img src={props.src} className="w-6" />
          <span className={`${props.vertical ? "text-[10px]" : ""}`}>
            {props.title}
          </span>
        </div>
      </li>
    </Link>
  );
};

export default Button;
