import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "@/actions/sign-in";
import { loginSchema } from "@/schemas";
import FormState from "../form-state";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await signIn(values);
    if (res && "error" in res) {
      setMessage(res.error);
      setIsSuccess(false);
    }
    if (res && "success" in res) {
      setMessage(res.success);
      setIsSuccess(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[45%] space-y-5">
      <h2 className="text-2xl text-white">Welcome back!</h2>
      <Form {...form}>
        <form
          className="flex flex-col space-y-3 w-[90%] md:w-[70%] lg:w-[60%]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Example@gmail.com"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormState message={message} isSuccess={isSuccess} />
          <Button size="sm" disabled={isLoading}>
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
