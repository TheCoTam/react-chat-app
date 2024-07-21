import UserDetail from "./user-detail";
import Action from "./action";

const Detail = () => {
  return (
    <div className="flex flex-col w-[25%]">
      <UserDetail />
      <Action />
    </div>
  );
};

export default Detail;
