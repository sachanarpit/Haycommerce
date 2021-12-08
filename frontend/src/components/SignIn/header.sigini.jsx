export const HeaderSignIn = () => {
  return (
    <div>
      <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Workflow" />
      <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
        Welcome back to HayCommerce
      </h2>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {/* Or{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a> */}
      </p>
    </div>
  );
};
