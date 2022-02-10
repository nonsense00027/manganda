import React, { useEffect, useState } from "react";
import { auth, firestore } from "../shared/configs/firebase";
import {
  query,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [users, setUsers] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, stLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const ask = query(collection(firestore, "Users"));
    const unsub = onSnapshot(ask, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
      setVisible(true);
    });
    return () => unsub;
  }, []);

  //CreateUser
  const addUser = (e) => {
    e.preventDefault();
    let data = {
      count: users.length + 1,
      firstname,
      lastname,
      email,
      contactnum,
      password,
    };
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await setDoc(doc(firestore, "Users", user.uid), data);
        alert("Sign up successs!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="w-96">
      <div>
        <h2 className="text-center font-semibold text-3xl mb-4">Sign Up</h2>
      </div>
      <form onSubmit={addUser}>
        <input
          className="border px-2 py-1 my-1 rounded-sm w-full"
          value={firstname}
          type="text"
          required
          placeholder="First Name"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <input
          className="border px-2 py-1 my-1 rounded-sm w-full"
          value={lastname}
          type="text"
          required
          placeholder=" Last Name"
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <input
          className="border px-2 py-1 my-1 rounded-sm w-full"
          value={email}
          type="text"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="border px-2 py-1 my-1 rounded-sm w-full"
          value={contactnum}
          type="text"
          required
          placeholder="Contact Number"
          onChange={(e) => setContactnum(e.target.value)}
        />
        <br />
        <input
          className="border px-2 py-1 my-1 rounded-sm w-full"
          value={password}
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="w-full bg-blue-800 text-white py-1 rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
