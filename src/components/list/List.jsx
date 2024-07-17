import UserInfo from "./userInfo/user-info";
import ChatList from "./chatList/chat-list";

const List = () => {
  return (
    <div className="flex w-[25%] flex-col">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
