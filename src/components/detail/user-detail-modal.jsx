import { useState } from "react";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import upload from "@/lib/upload";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useUserStore } from "@/hooks/useUserStore";
import { deleteImg } from "@/actions/delete-img";
import FormState from "../form-state";

const UserDetailModal = ({ avt }) => {
  const { currentUser } = useUserStore();
  const [avatar, setAvatar] = useState({
    file: null,
    url: avt,
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleClick = async () => {
    try {
      setIsUpdating(true);
      const imgUrl = await upload(avatar.file);
      const prevImg = await deleteImg(currentUser.img);

      if (prevImg && "error" in prevImg) {
        setMessage(prevImg.error);
        return;
      }

      const userRef = doc(db, "users", currentUser.id);
      const usersSnapshot = await getDoc(userRef);

      if (usersSnapshot.exists()) {
        const userData = usersSnapshot.data();
        userData.img = imgUrl;
        await updateDoc(userRef, userData);
        window.location.reload();
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={avt}
          alt="avatar"
          className="h-[100px] w-[100px] rounded-full object-cover"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Avatar</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center space-y-3">
          <img src={avatar.url} alt="Avatar" className="max-w-[200px] h-full" />
          <Label
            htmlFor="file"
            className="cursor-pointer text-primary underline-offset-4 hover:underline"
          >
            Change Image
          </Label>
          <Input
            type="file"
            id="file"
            className="hidden"
            onChange={handleChange}
          />
          <FormState message={message} isSuccess={false} />
        </div>
        <DialogFooter className="sm:justify-end space-x-2">
          <DialogClose>
            <Button variant="ghost" disabled={isUpdating}>
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleClick} disabled={isUpdating}>
            Save Change
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailModal;
