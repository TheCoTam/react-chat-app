const UserInfo = () => {
  return (
    <div className="p-5 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src="./avatar.png"
          alt="Avatar"
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <h2 className="w-max">John Doe</h2>
      </div>
      <div className="flex gap-5">
        <img src="./more.png" alt="More" className="w-5 h-5" />
        <img src="./video.png" alt="Video" className="w-5 h-5" />
        <img src="./edit.png" alt="Edit" className="w-5 h-5" />
      </div>
    </div>
  );
};

export default UserInfo;
