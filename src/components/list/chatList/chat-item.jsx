import { useChatStore } from "@/hooks/useChatStore";

import { seenMessage } from "@/actions/seen-message";
import toast from "react-hot-toast";
import { useUserStore } from "@/hooks/useUserStore";

const ChatItem = ({ id, isSeen, user, img, name, msg }) => {
  const { chatId, changeChat } = useChatStore();
  const { currentUser } = useUserStore();
  const handleClick = async () => {
    if (!isSeen) {
      const res = await seenMessage(currentUser.id, chatId);
      if (res && "error" in res) {
        toast.error(res.error);
        return;
      }
    }
    changeChat(id, user);
  };

  return (
    <div
      className={`flex items-center gap-5 p-2 cursor-pointer rounded-xl ${
        isSeen ? "bg-transparent" : "bg-blue-500"
      }`}
      onClick={handleClick}
    >
      <img
        src={img}
        alt="Avatar"
        className="w-[50px] h-[50px] rounded-full object-cover"
      />
      <div className="flex flex-col max-w-[100%] gap-[10px]">
        <span className="font-medium">{name}</span>
        <p
          className={`text-sm truncate ${
            isSeen ? "font-light" : "font-medium"
          }`}
        >
          {msg}
        </p>
      </div>
    </div>
  );
};

export default ChatItem;
