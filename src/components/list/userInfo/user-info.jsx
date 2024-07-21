import { useUserStore } from "@/hooks/useUserStore";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={currentUser.img}
          alt={currentUser.name}
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <h2 className="w-max">{currentUser.name}</h2>
      </div>
      <div className="flex gap-5">
        <img src="./more.png" alt="More" className="w-5 h-5" />
        <img src="./video.png" alt="Video" className="w-5 h-5" />
        <img src="./edit.png" alt="Edit" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default UserInfo;
