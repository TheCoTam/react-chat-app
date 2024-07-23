import { useChatStore } from "@/hooks/useChatStore";

const TopSection = () => {
  const { user } = useChatStore();
  return (
    <div className="flex items-center justify-between p-5 border-b">
      <div className="flex items-center gap-5">
        <img
          src={user.img || "./avatar.png"}
          alt="Avatar"
          className="w-[60px] h-[60px] rounded-full object-cover"
        />
        <div className="flex flex-col gap-[5px]">
          <span className="text-lg font-bold">{user.name}</span>
          <p className="text-sm font-light text-gray-400">
            Something is here, too.
          </p>
        </div>
      </div>
      <div className="flex gap-5">
        <img src="./phone.png" alt="phone" className="w-5 h-5" />
        <img src="./video.png" alt="video" className="w-5 h-5" />
        <img src="./info.png" alt="info" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default TopSection;
