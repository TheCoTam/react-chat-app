const UserDetail = ({ avt, name, description }) => {
  return (
    <div className="flex flex-col items-center px-6 py-4 gap-4 border-b border-solid">
      <img
        src={avt}
        alt="avatar"
        className="h-[100px] w-[100px] rounded-full object-cover"
      />
      {/* TODO: Add action change avatar  */}
      <div className="flex flex-col gap-2 items-center">
        <h2>{name}</h2>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default UserDetail;
