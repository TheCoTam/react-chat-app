import { useChatStore } from "@/hooks/useChatStore";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { blockUser } from "@/actions/block-user";
import { useUserStore } from "@/hooks/useUserStore";
import BotBlockedModal from "../detail/bot-blocked-modal";

const BotBlockedSection = () => {
  const { currentUser } = useUserStore();
  const { user, isReceiverBlocked, changeBlock } = useChatStore();

  const handleUnblock = async () => {
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
    <div className="flex flex-col border-t border-solid items-center space-y-1">
      <p className="text-gray-400">You&apos;ve blocked {user.name}</p>
      <p className="text-gray-400 text-xs">
        You can&apos;t message or call them in this chat, and you won&apos;t
        receive their messages or call
      </p>
      <div className="flex items-center w-full p-3 gap-3">
        <BotBlockedModal />
        <Button variant="ghost" className="flex-1" onClick={handleUnblock}>
          Unblock
        </Button>
      </div>
    </div>
  );
};

export default BotBlockedSection;
