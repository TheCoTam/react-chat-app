import ChatItem from "./chat-item";
import { useChatList } from "@/hooks/useChatList";
import AddModal from "./add-modal";
import { useState } from "react";

const ChatList = () => {
  const { chats } = useChatList();
  const [searchValue, setSearchValue] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="overflow-auto">
      <div className="flex items-center justify-between gap-5 p-5">
        <div className="flex bg-slate-800 items-center space-x-5 rounded-[10px] p-[10px]">
          <img src="./search.png" alt="Search" className="w-5 h-5" />
          <input
            type="text"
            value={searchValue}
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full bg-transparent border-none outline-none text-white"
          />
        </div>
        <AddModal />
      </div>
      <div className="flex flex-col">
        {filteredChats.map((data, index) => (
          <ChatItem
            key={index}
            id={data.chatId}
            isSeen={data.isSeen}
            user={data.user}
            img={data.user.img}
            name={data.user.name}
            msg={data.lastMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
