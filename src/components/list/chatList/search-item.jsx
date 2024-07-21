import { useState } from "react";
import { Button } from "@/components/ui/button";
import { addUser } from "@/actions/add-user";
import toast from "react-hot-toast";
import { CheckCheck } from "lucide-react";
import { useUserStore } from "@/hooks/useUserStore";

const SearchItem = ({ id, name, img }) => {
  const [added, setAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useUserStore();

  const handleClick = async () => {
    setIsLoading(true);
    const res = await addUser(id, currentUser.id);
    if (res && "error" in res) {
      toast.error(res.error);
    } else {
      setAdded(true);
    }
    setIsLoading(false);
  };

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
      {added ? (
        <CheckCheck size={24} className="text-green-500" />
      ) : (
        <Button size="sm" onClick={handleClick} disabled={isLoading}>
          Add User
        </Button>
      )}
    </div>
  );
};

export default SearchItem;
