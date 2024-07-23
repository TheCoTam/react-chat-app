import { useUserStore } from "@/hooks/useUserStore";
import UserDetailModal from "./user-detail-modal";

const UserDetail = () => {
  const { currentUser } = useUserStore();
  return (
    <div className="flex flex-col items-center px-6 py-4 gap-4 border-b border-solid">
      <UserDetailModal avt={currentUser.img || "./avatar.png"} />
      <div className="flex flex-col gap-2 items-center">
        <h2>{currentUser.name}</h2>
        <p className="text-xs">Something is here, too.</p>
      </div>
    </div>
  );
};

export default UserDetail;
