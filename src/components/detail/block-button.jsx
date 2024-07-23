import { blockUser } from "@/actions/block-user";
import { useChatStore } from "@/hooks/useChatStore";
import { useUserStore } from "@/hooks/useUserStore";
import toast from "react-hot-toast";

const BlockButton = () => {
  const { currentUser } = useUserStore();
  const { user, isReceiverBlocked, changeBlock } = useChatStore();

  const handleClick = async () => {
    if (!user) {
      toast.error("Something went wrong");
      console.log("Current user not found");
      return;
    }

    const res = await blockUser(currentUser.id, user.id, isReceiverBlocked);

    if (res && "error" in res) {
      toast.error(res.error);
      return;
    }
    changeBlock();
    window.location.reload();
  };

  return (
    <button
      className="px-4 py-2 bg-red-700 text-white rounded-md cursor-pointer hover:bg-red-800 active:bg-red-900"
      onClick={handleClick}
    >
      {isReceiverBlocked ? "Unblock User" : "Block User"}
    </button>
  );
};

export default BlockButton;
