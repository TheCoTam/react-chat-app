import { auth } from "@/lib/firebase";

const LogOutButton = () => {
  const handleClick = () => auth.signOut();

  return (
    <button
      onClick={handleClick}
      className="p-2 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md"
    >
      Log Out
    </button>
  );
};

export default LogOutButton;
