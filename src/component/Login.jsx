import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import authService from "../appwrite/authService";
import { login as authLogin } from "../store/reducers/authSlice";
import { BackHome, Btn, Input, Logo } from "./index";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(data));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen absolute top-0 left-0 bg-black pt-4 pb-4 pr-5 pl-5 xl:pl-0 xl:pr-0 ">
      <div className="flex w-full justify-between px-12 absolute top-8 left-0">
        <BackHome />
        {/* <DarkModeBTN /> */}
      </div>
      <div
        className={`mx-auto w-full max-w-sm sm:max-w-lg  bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div>
          <Logo width={"w-[4rem] mx-auto mb-2"} />
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    setError("Email address must be a valid address"),
                },
              })}
            />
            <Input
              label="Password:"
              type="password"
              placeholder="Enter yout password"
              {...register("password", {
                required: true,
                validate: {
                  matchPattern: (value) => {
                    const passwordPattern =
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
                    return (
                      passwordPattern.test(value) ||
                      setError("Use at least 8 characters one uppercase letter one lowercase letter and one number in your password")
                    );
                  },
                },
              })}
            />
            <Btn type="Submit" className="w-full">
              Sing in
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
