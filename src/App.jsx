import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/auth/login";
import { ToastProvider } from "./components/providers/toast-provider";

const App = () => {
  const user = false;

  return (
    <div className="containerr flex w-[80vw] h-[90vh]">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <ToastProvider />
    </div>
  );
};

export default App;
