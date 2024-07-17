import SharedPhotoItem from "./shared-photo";

const ActionItem = ({ title, icon, data }) => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <img
          src={icon}
          alt="icon"
          className="w-6 h-6 bg-slate-700 p-2 rounded-full cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {data &&
          data.map((item, index) => (
            <SharedPhotoItem key={index} img={item.img} title={item.title} />
          ))}
      </div>
    </div>
  );
};

export default ActionItem;
