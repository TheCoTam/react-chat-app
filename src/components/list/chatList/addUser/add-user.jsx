import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchItem from "./search-item";
import toast from "react-hot-toast";

const formSchema = z.object({
  username: z.string().min(1),
});

const searchValue = [
  {
    name: "John Doe",
    img: "./avatar.png",
  },
  {
    name: "John Doe",
    img: "./avatar.png",
  },
  {
    name: "John Doe",
    img: "./avatar.png",
  },
  {
    name: "John Doe",
    img: "./avatar.png",
  },
  {
    name: "John Doe",
    img: "./avatar.png",
  },
  {
    name: "John Doe",
    img: "./avatar.png",
  },
];

const AddUser = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (value) => {
    toast.success(value.username);
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto p-7 w-max h-max bg-slate-700 rounded-md">
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
                      className="text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button variant="secondary">Search</Button>
          </form>
        </Form>
      </div>
      <div className="flex flex-col mt-10 gap-2">
        {searchValue.map((item, index) => (
          <SearchItem key={index} name={item.name} img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default AddUser;
