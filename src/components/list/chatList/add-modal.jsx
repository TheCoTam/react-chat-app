import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { searchUsers } from "@/actions/searchUser";
import SearchItem from "./search-item";
import FormState from "@/components/form-state";

const formSchema = z.object({
  username: z.string().min(1),
});

const AddModal = () => {
  const [message, setMessage] = useState("");
  const [searchValue, setSearchValue] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = async (value) => {
    setMessage("");
    setSearchValue([]);
    setIsSearching(true);
    const username = value.username;
    const res = await searchUsers(username);
    if (res && "error" in res) {
      setMessage(res.error);
    } else {
      setSearchValue(res);
    }
    setIsSearching(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src="./plus.png"
          alt="Plus"
          className="w-9 h-9 p-[10px] bg-slate-800 rounded-[10px] cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search User</DialogTitle>
          <DialogDescription>
            Search someone you want to chat with.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Username"
                        {...field}
                        disabled={isSearching}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="secondary" disabled={isSearching}>
                Search
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex flex-col gap-2">
          <FormState isSuccess={false} message={message} />
          {searchValue.map((item, index) => (
            <SearchItem
              key={index}
              id={item.id}
              name={item.name}
              img={item.img}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddModal;
