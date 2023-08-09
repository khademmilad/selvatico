"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

const Register = (props: Props) => {
 
  const { register , handleSubmit , formState:{errors}}  = useForm()
  const [isRegistered, setIsRegistered] = useState(false);
  const registerUrl = "http://141.95.0.236:8000/api/register/";


  const onSubmit = async (data: object) => {
    const res = await fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      console.log("Register Successful");
    } else {
      console.log("Register has failed");
    }
  };

  return (
    <section className="max-sm:p-16 p-16 max-w-7xl mx-auto h-screen">
      <div className="container p-10 rounded-xl bg-opacity-10 mx-auto shadow-2xl ">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading mb-4 text-6xl text-white tracking-tighter">
            Create a free account
          </h2>
          <p className="mb-16 text-xl text-white tracking-tight">
            Enjoy the free capabilities of our Product!
          </p>
          <form className="flex flex-wrap -m-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input
                  className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="username"
                  type="text"
                  placeholder="Username"
                  {...register("username",{required:true})}
                />
                {errors.firstname?.type === "required" && "Name is required"}
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input
                  className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  {...register("email",{required:true})}
                />
                {errors.email?.type === "required" && "Email Address is required"}
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input
                  className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password",{required:true,minLength:10})}
                />
                {errors.password?.type === "required" && "Password is required"}
              </label>
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block">
                <input
                  className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmpassword",{required:true})}
                />
                {errors.confirmpassword?.type === "required" && "Confirm Password is required"}
              </label>
            </div>
            <div className="w-full p-3">
              <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="exampleCheck2"
                  
                />
                <label
                  className="inline-block pl-[0.15rem] max-sm:pt-1 hover:cursor-pointer"
                  htmlFor="exampleCheck2"
                >
                  <span>I agree to the </span>{" "}
                  <a className="text-white hover:text-gray-200" href="#">
                    Terms &amp; Conditions &amp; Privacy Policy
                  </a>
                </label>
              </div>
            </div>
            <div className="w-full p-3">
              <button
                
                className="btn-grad btn-grad:hover"
                type="submit"
              >
                Create Free Account
              </button>
              <span className="font-medium text-white tracking-tight">
                <span>Already have an account?</span>
                <Link
                  className="text-red-500 hover:text-red-700 transition duration-200"
                  href="login"
                >
                  {" "}
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
