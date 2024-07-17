const SharedPhotoItem = ({ img, title }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={img}
          alt="Image"
          className="w-10 h-10 rounded-md object-cover"
        />
        <span className="text-sm font-light">{title}</span>
      </div>
      <img
        src="./download.png"
        alt="Icon"
        className="w-6 h-6 p-[7px] bg-slate-700 rounded-full cursor-pointer object-fill"
      />
    </div>
  );
};

export default SharedPhotoItem;
