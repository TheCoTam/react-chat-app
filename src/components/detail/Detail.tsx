import UserDetail from "./user-detail";
import Action from "./action";

const Detail = () => {
  return (
    <div className="flex flex-col w-[25%]">
      <UserDetail
        avt="./avatar.png"
        name="John Doe"
        description="this is a description"
      />
      <Action />
    </div>
  );
};

export default Detail;
