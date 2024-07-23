import TopSection from "./top-section";
import CenterSection from "./center-section";
import BotSection from "./bot-section";
import { useChatStore } from "@/hooks/useChatStore";
import BotBlockedSection from "./bot-blocked-section";

const Chat = () => {
  const { isReceiverBlocked } = useChatStore();
  return (
    <div className="flex flex-col grow h-full border-l border-r border-solid border-gray-400">
      <TopSection />
      <CenterSection />
      {isReceiverBlocked ? <BotBlockedSection /> : <BotSection />}
    </div>
  );
};

export default Chat;
