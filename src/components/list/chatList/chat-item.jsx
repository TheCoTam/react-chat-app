const ChatItem = ({ img, name, msg }) => {
  return (
    <div className="flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-gray-400">
      <img
        src={img}
        alt="Avatar"
        className="w-[50px] h-[50px] rounded-full object-cover"
      />
      <div className="flex flex-col gap-[10px]">
        <span className="font-medium">{name}</span>
        <p className="text-sm font-light">{msg}</p>
      </div>
    </div>
  );
};

export default ChatItem;
