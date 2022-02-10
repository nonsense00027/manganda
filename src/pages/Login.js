import React, { useState } from "react";
import { auth } from "../shared/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "./SignUp";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login Successful!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Incorrect Email or Password.");
      });
  }

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center">
      <SignUp />
      <h3 className="mt-6">Already have an account?</h3>
      <div className="w-96 mt-4">
        <form onSubmit={login}>
          <h2 className="text-center font-semibold text-3xl mb-4">Login</h2>
          <input
            className="border px-2 py-1 my-1 rounded-sm w-full"
            value={email}
            type="text"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border px-2 py-1 my-1 rounded-sm w-full"
            value={password}
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-1 rounded-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
