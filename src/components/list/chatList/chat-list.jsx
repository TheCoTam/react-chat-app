import { useState } from "react";

import ChatItem from "./chat-item";
import AddUser from "./addUser/add-user";

const pseudoData = [
  {
    img: "./avatar.png",
    name: "John Doe",
    message: "Hello, how are you?",
  },
  {
    img: "./avatar.png",
    name: "John Doe",
    message: "Hello, how are you?",
  },
  {
    img: "./avatar.png",
    name: "John Doe",
    message: "Hello, how are you?",
  },
  {
    img: "./avatar.png",
    name: "John Doe",
    message: "Hello, how are you?",
  },
  {
    img: "./avatar.png",
    name: "John Doe",
    message: "Hello, how are you?",
  },
];

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="overflow-auto">
      <div className="flex items-center justify-between gap-5 p-5">
        <div className="flex bg-slate-800 items-center space-x-5 rounded-[10px] p-[10px]">
          <img src="./search.png" alt="Search" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-none outline-none text-white"
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="Plus"
          className="w-9 h-9 p-[10px] bg-slate-800 rounded-[10px] cursor-pointer"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>
      <div>
        {pseudoData.map((data, index) => (
          <ChatItem
            key={index}
            img={data.img}
            name={data.name}
            msg={data.message}
          />
        ))}
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
