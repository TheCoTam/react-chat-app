import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";

import { useChatStore } from "@/hooks/useChatStore";
import { sendMessage } from "@/actions/send-message";
import { useUserStore } from "@/hooks/useUserStore";
import { Aperture, ImagePlus, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import upload from "@/lib/upload";

const BotSection = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });
  const [isPending, setIsPending] = useState(false);
  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore();

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = async () => {
    if (text === "") return;
    let imgUrl = null;
    setIsPending(true);

    if (img.file) {
      imgUrl = await upload(img.file);
    }

    const res = await sendMessage(
      chatId,
      currentUser.id,
      user.id,
      text,
      imgUrl
    );
    if (res && "error" in res) {
      toast.error(res.error);
    }
    setText("");
    setImg({
      file: null,
      url: "",
    });
    setIsPending(false);
  };

  return (
    <div className="flex gap-5 p-3 justify-between border-t border-solid border-gray-400 mt-auto">
      <div className="flex gap-3">
        <Label htmlFor="image">
          <ImagePlus className="cursor-pointer" />
        </Label>
        <Input type="file" onChange={handleImg} id="image" className="hidden" />
        <Aperture />
        <Mic />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-3 text-base rounded-[10px] bg-slate-800 text-white">
        {img.url !== "" && (
          <img src={img.url} alt="image" className="max-w-[50px] rounded-md" />
        )}
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          className="w-full bg-slate-800 border-none outline-none"
          disabled={isPending}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
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
        className="bg-blue-600 text-white py-[5px] px-[10px] border-none rounded cursor-pointer"
        onClick={handleSend}
        disabled={isPending}
      >
        Send
      </button>
    </div>
  );
};

export default BotSection;
