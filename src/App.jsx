import Chat from "@/components/chat/Chat";
import Detail from "@/components/detail/Detail";
import List from "@/components/list/List";
import Login from "@/components/auth/login";
import { ToastProvider } from "@/components/providers/toast-provider";
import { useUserStore } from "@/hooks/useUserStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useChatStore } from "@/hooks/useChatStore";
import NoChat from "@/components/list/no-chat";
import { getFirstChatIdByUserId } from "./actions/get-chatId";
import { getUserById } from "./actions/get-user";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId, changeChat } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      fetchUserInfo(user?.uid);
      const { chatId, userId } = await getFirstChatIdByUserId(user?.uid);
      const firstChatUser = await getUserById(userId);
      changeChat(chatId, firstChatUser);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return (
      <div className="containerr flex w-[80vw] h-[90vh] text-white">
        <Login />
        <ToastProvider />
      </div>
    );
  }

  if (!chatId) {
    return (
      <div className="containerr flex w-[80vw] h-[90vh] text-white">
        <>
          <List />
          <NoChat />
        </>
        <ToastProvider />
      </div>
    );
  }
  return (
    <div className="containerr flex w-[80vw] h-[90vh] text-white">
      <>
        <List />
        <Chat />
        <Detail />
      </>
      <ToastProvider />
    </div>
  );
};

export default App;
