import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";

import { useChatStore } from "@/hooks/useChatStore";
import { sendMessage } from "@/actions/send-message";
import { useUserStore } from "@/hooks/useUserStore";

const BotSection = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [isPending, setIsPending] = useState(false);
  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore();

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = async () => {
    if (text === "") return;
    setIsPending(true);
    const res = await sendMessage(chatId, currentUser.id, user.id, text);
    if (res && "error" in res) {
      toast.error(res.error);
    }
    setText("");
    setIsPending(false);
  };

  return (
    <div className="flex gap-5 p-3 items-center justify-between border-t border-solid border-gray-400 mt-auto">
      <div className="flex gap-3">
        <img src="./img.png" alt="img" className="w-5 h-5 cursor-pointer" />
        <img
          src="./camera.png"
          alt="camera"
          className="w-5 h-5 cursor-pointer"
        />
        <img src="./mic.png" alt="mic" className="w-5 h-5 cursor-pointer" />
      </div>
      <input
        type="text"
        value={text}
        placeholder="Type a message..."
        className="flex-1 p-3 text-base rounded-[10px] bg-slate-800 border-none outline-none text-white"
        disabled={isPending}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="relative">
        <img
          src="./emoji.png"
          alt="emoji"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        />
        <div className="absolute bottom-[50px] left-0">
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
        </div>
      </div>
      <button
        className="bg-blue-700 text-white py-[5px] px-[10px] border-none rounded cursor-pointer"
        onClick={handleSend}
        disabled={isPending}
      >
        Send
      </button>
    </div>
  );
};

export default BotSection;
