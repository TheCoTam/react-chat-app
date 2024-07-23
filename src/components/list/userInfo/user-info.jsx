import { useUserStore } from "@/hooks/useUserStore";
import { Ellipsis, SquareCode, Video } from "lucide-react";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={currentUser.img || "./avatar.png"}
          alt={currentUser.name}
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <h2 className="w-max font-bold">{currentUser.name}</h2>
      </div>
      <div className="flex gap-5">
        <Ellipsis className="cursor-pointer" />
        <Video className="cursor-pointer" />
        <SquareCode className="cursor-pointer" />
      </div>
    </div>
  );
};

export default UserInfo;
