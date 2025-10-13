import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import React from "react";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-background">
      <Card className="relative m-auto w-[450px] overflow-hidden bg-background/10">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create your account to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm mode="signup" />
        </CardContent>
        <CardFooter className="flex flex-col gap-2 items-center w-full mt-4">
          <span className="text-sm dark:text-white text-black">
            Already have an account?
          </span>
          <Link to="/login" className="w-full">
            <button
              type="button"
              className="w-full rounded-lg px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition cursor-pointer text-base"
            >
              Login
            </button>
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Signup;
