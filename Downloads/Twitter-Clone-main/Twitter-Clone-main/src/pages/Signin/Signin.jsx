import React from 'react'
const Signin = () => {
  return (

    <div className="flex justify-center items-center">
      <form className="bg-gray-200 flex flex-col py-8 px-8 rounded-lg w-8/12 md:w-6/12 gap-5">
        <h2 className="text-2xl font-bold text-center">Sign in to Twitter</h2>
        <input type="text"
          placeholder="Username"
          className="text-l py-2 rounded-full px-4" />
        <input type="password"
          placeholder="Password"
          className="text-l py-2 rounded-full px-4" />

        <button className="text-l py-2 rounded-full px-4 bg-blue-400 text-white">Sign In</button>

        <p className="text-center text-l">Don't have an account</p>
        <input type="text"
          placeholder="Username"
          className="text-l py-2 rounded-full px-4" />

        <input type="email"
          placeholder="Email"
          required
          className="text-l py-2 rounded-full px-4" />

        <input type="password"
          placeholder="Password"
          className="text-l py-2 rounded-full px-4" />

        <button className="text-l py-2 rounded-full px-4 bg-blue-400 text-white"
          type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signin
