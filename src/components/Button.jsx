import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      className={`${
        props.disabled ? "pointer-events-none" : ""
      } cursor-default`}
      to={"/"}
    >
      <li
        className={`p-2 ${
          props.disabled ? "opacity-30" : "cursor-pointer hover:bg-slate-300"
        } rounded-md ${props.vertical ? "" : "pl-7"}`}
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
