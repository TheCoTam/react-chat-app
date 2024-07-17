import { Button } from "@/components/ui/button";

const SearchItem = ({ name, img }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img
          src={img}
          alt="avatar"
          className="w-[45px] h-[45px] rounded-full object-cover"
        />
        <span>{name}</span>
      </div>
      <Button size="sm">Add User</Button>
    </div>
  );
};

export default SearchItem;
