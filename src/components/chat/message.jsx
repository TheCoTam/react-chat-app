import { calculateTime } from "@/actions/message-time-calculation";

const Message = ({ avt, content, own, img, createdAt }) => {
  return (
    <div className={`flex max-w-[70%] gap-3 ${own ? "self-end" : ""}`}>
      {!own && (
        <img
          src={avt || "./avatar.png"}
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
        {content !== "" && (
          <p
            className={`p-2 rounded-xl max-w-[25vw] break-words w-max ${
              own && "ml-auto"
            } ${own ? "bg-blue-500" : "bg-slate-700"}`}
          >
            {content}
          </p>
        )}
        <span className={`text-[9px] ${own && "ml-auto"}`}>
          {calculateTime(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default Message;
