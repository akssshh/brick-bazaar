import FormInput from "../components/Forminput";
import SubmitBtn from "../components/SubmitBtn";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-screen grid place-items-center ">
      <form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl mt-8 font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Already a member?
          <Link
            href="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default page;
