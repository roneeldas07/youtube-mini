import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToChat } from "../redux_slices/liveChatSlice";
import { generateRandomName, generateRandomString } from "../utils/utils";
import face from "./../assets/face.svg";

const LiveChat = () => {
  const [chatText, setChatText] = useState("");
  const dispatch = useDispatch();
  const live_chats = useSelector((store) => store.live_chats.chats);
  useEffect(() => {
    const chat_entry_interval = setInterval(() => {
      dispatch(
        addToChat({
          id: Date.now(),
          author: generateRandomName(),
          message: generateRandomString(),
        })
      );
    }, 3000);
    return () => {
      clearInterval(chat_entry_interval);
    };
  }, []);
  const sendMessage = () => {
    dispatch(
      addToChat({
        id: Date.now(),
        author: "Rajneesh",
        message: chatText,
      })
    );
    setChatText("");
  };
  return (
    <div className="flex flex-col h-full">
      <div className="font-bold text-lg">Live Chat</div>
      <div className="flex flex-col flex-1 h-[250px]">
        <div className="flex flex-col-reverse overflow-y-auto h-[250px]">
          {live_chats.map((item) => (
            <Chat key={item.id} author={item.author} message={item.message} />
          ))}
        </div>
      </div>
      <hr className="border-gray-800" />
      <div className="flex gap-1 mt-2">
        <input
          className="border-solid border-2 border-gray-900 rounded-2xl py-1 px-5 flex-1 w-full"
          onChange={(e) => {
            setChatText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              sendMessage();
            }
          }}
          value={chatText}
          placeholder="Type Here..."
        />
        <button
          className="py-1 px-3 rounded-2xl border-2 border-gray-600 border-solid bg-green-200 hover:bg-green-400"
          onClick={() => {
            sendMessage();
          }}
        >
          ✈️
        </button>
      </div>
    </div>
  );
};

const Chat = ({ author, message }) => {
  return (
    <div className="flex py-1 pr-1">
      <img src={face} className="w-6" />
      <span className="font-bold mr-1">{author}:</span>
      <span>{message}</span>
    </div>
  );
};
export default LiveChat;
