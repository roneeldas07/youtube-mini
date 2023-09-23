import React from "react";
import { useSelector } from "react-redux";
import home_side from "./../assets/home_side.svg";
import music_side from "./../assets/music_side.svg";
import shorts_side from "./../assets/shorts_side.svg";
import subscriptions_side from "./../assets/subscriptions_side.svg";
import Button from "./Button";

const SideBar = () => {
  const burgerState = useSelector((state) => state.general.burger);

  if (burgerState) {
    return (
      <div className="w-56 h-[90vh] overflow-y-auto border-r-2 shrink-0">
        <ul className="p-2 mt-3">
          <Button title="Home" src={home_side} />
          <Button title="Shorts" src={shorts_side} />
          <Button title="Subscriptions" src={subscriptions_side} />
          <Button title="Music" src={music_side} />
        </ul>
        <hr />
        <ul className="p-2">
          <Button title="Home" src={home_side} />
          <Button title="Shorts" src={shorts_side} />
          <Button title="Subscriptions" src={subscriptions_side} />
          <Button title="Music" src={music_side} />
        </ul>
        <hr />
        <ul className="p-2">
          <Button title="Home" src={home_side} />
          <Button title="Shorts" src={shorts_side} />
          <Button title="Subscriptions" src={subscriptions_side} />
          <Button title="Music" src={music_side} />
        </ul>
        <hr />
        <ul className="p-2">
          <Button title="Home" src={home_side} />
          <Button title="Shorts" src={shorts_side} />
          <Button title="Subscriptions" src={subscriptions_side} />
          <Button title="Music" src={music_side} />
        </ul>
        <hr />
        <ul className="p-2">
          <Button title="Home" src={home_side} />
          <Button title="Shorts" src={shorts_side} />
          <Button title="Subscriptions" src={subscriptions_side} />
          <Button title="Music" src={music_side} />
        </ul>
        <hr />
        <div>© 2023 Google LLC</div>
      </div>
    );
  } else {
    return (
      <div className="w-18 sm:w-24 h-[90vh] overflow-y-auto flex flex-col justify-start items-center border-r-2 shrink-0">
        <ul className="mt-3 flex flex-col gap-7">
          <Button title="Home" src={home_side} vertical={true} />
          <Button title="Shorts" src={shorts_side} vertical={true} />
          <Button
            title="Subscriptions"
            src={subscriptions_side}
            vertical={true}
          />
          <Button title="Music" src={music_side} vertical={true} />
        </ul>
      </div>
    );
  }
};

export default SideBar;
