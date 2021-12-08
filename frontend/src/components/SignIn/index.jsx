import { Link } from "react-router-dom";
import { FormSignin } from "./Form.sigin";
import { HeaderSignIn } from "./header.sigini";

export default function SignIn() {
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <HeaderSignIn />
          <FormSignin />
          Or{" "}
          <Link
            to="/signup"
            className="font-medium  text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
