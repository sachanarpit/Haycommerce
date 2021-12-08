import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { FormSignUp } from "./Form.sigup";
import { HeaderSignUp } from "./Header.signup";

export default function SignUp() {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <HeaderSignUp />
          <FormSignUp />
          Or{" "}
          <Link
            to="/signin"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
