import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/login";

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
    </div>
  );
};

export default App;
