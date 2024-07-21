import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/auth/login";
import { ToastProvider } from "./components/providers/toast-provider";
import { useUserStore } from "./hooks/useUserStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useChatStore } from "./hooks/useChatStore";

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerr flex w-[80vw] h-[90vh] text-white">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <ToastProvider />
    </div>
  );
};

export default App;
