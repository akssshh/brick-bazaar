import React from 'react'
import FormInput from '../components/Forminput'
import SubmitBtn from '../components/SubmitBtn'
import Link from 'next/link'

const page = () => {
  return (
    <section className="h-screen grid place-items-center ">
      <form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-p"
      >
        <h4 className="text-center text-3xl mt-8 font-bold">Login</h4>

        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            href='/'
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </form>
    </section>
  )
}

export default page