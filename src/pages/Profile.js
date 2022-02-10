import React, { useEffect, useState } from "react";
import { firestore } from "../shared/configs/firebase";
import {
  query,
  collection,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { useAuthContext } from "../shared/context/AuthContext";
import { async } from "@firebase/util";

function Profile() {
  const { user } = useAuthContext();
  const [users, setUsers] = useState(null);
  const [visible, setVisible] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contactnum, setContactnum] = useState("");

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

  // Update User Profile
  const updateUser = async (e) => {
    e.preventDefault();
    let userDoc = doc(firestore, "Users", user.id);
    let newFields = { firstname, lastname, contactnum };

    await updateDoc(userDoc, newFields).then(() => {
      alert("User Updated Successfully!");
    });
  };

  // Delete User Profile
  const deleteUser = async (id) => {
    let userDoc = doc(firestore, "Users", id);

    await deleteDoc(userDoc).then(() => {
      alert("User Deleted Successfully!");
    });
  };

  return (
    <div className="profile">
      {visible
        ? users
            .filter((item) => item.id === user.id)
            .map((item, i) => {
              return (
                <form key={item.id} onSubmit={updateUser}>
                  <p>
                    {item.firstname} &nbsp;
                    {item.lastname}
                    <br />
                    {item.email}
                    <br />
                    {item.contactnum}
                    <br />
                  </p>

                  <input
                    value={firstname}
                    type="text"
                    required
                    placeholder="First Name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <br />
                  <input
                    value={lastname}
                    type="text"
                    required
                    placeholder="Last Name"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <br />
                  <input
                    value={contactnum}
                    type="text"
                    required
                    placeholder="Contact Number"
                    onChange={(e) => setContactnum(e.target.value)}
                  />
                  <br />
                  <button type="submit">Update</button>
                </form>
              );
            })
        : "Loading"}
    </div>
  );
}

export default Profile;
