import TopSection from "./top-section";
import CenterSection from "./center-section";
import BotSection from "./bot-section";

const Chat = () => {
  return (
    <div className="flex flex-col grow h-full border-l border-r border-solid border-gray-400">
      <TopSection />
      <CenterSection />
      <BotSection />
    </div>
  );
};

export default Chat;
