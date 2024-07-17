const Message = ({ avt, content, own, img }) => {
  return (
    <div className={`flex max-w-[70%] gap-3 ${own ? "self-end" : ""}`}>
      {!own && (
        <img
          src={avt}
          alt="avatar"
          className="w-[30px] h-[30px] object-cover rounded-full"
        />
      )}
      <div className="flex-1 flex flex-col gap-2">
        {img && (
          <img
            src={img}
            alt="image"
            className="w-full h-[300px] rounded-xl object-cover"
          />
        )}
        <p className={`p-3 rounded-xl ${own ? "bg-blue-500" : "bg-slate-700"}`}>
          {content}
        </p>
        <span className="text-xs">1 min ago</span>
      </div>
    </div>
  );
};

export default Message;
