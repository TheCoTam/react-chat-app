import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const Login = () => {
  return (
    <div className="flex w-full h-full items-center justify-between">
      <LoginForm />
      <div className="w-[1px] bg-black h-full"></div>
      <RegisterForm />
    </div>
  );
};

export default Login;
