import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  updateDoc,
  doc,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { firestore } from "../shared/configs/firebase";
import { useAuthContext } from "../shared/context/AuthContext";
import { async } from "@firebase/util";

function ViewOrder() {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const ask = query(collection(firestore, "Orders"));
    const unsub = onSnapshot(ask, (querySnapshot) => {
      setOrders(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
      setVisible(true);
    });
    return () => unsub;
  }, []);

  const updateOrder = async (id, status) => {
    let userOrder = doc(firestore, "Orders", id);

    await updateDoc(userOrder, { status }).then(() => {
      alert("Order Updated Successfully!");
    });
  };

  function getOrders() {
    if (user?.role === "admin") {
      return orders;
    } else {
      return orders.filter((order) => order.customer === user?.id);
    }
  }
  return (
    <div className="order">
      {visible
        ? getOrders().map((item, i) => {
            return (
              <div key={item.id}>
                <p>Customer Name: {item.name}</p>
                <p>Order Type: {item.ordercategory}</p>
                <p>Address: {item.address}</p>
                <p>Food Item: {item.fooditem}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.total}</p>
                <p>Status: {item.status ? item.status : "Pending"}</p>

                {user.role === "admin" && (
                  <>
                    <button
                      onClick={() => {
                        updateOrder(item.id, "Done");
                      }}
                    >
                      Done
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button
                      onClick={() => {
                        updateOrder(item.id, "Being Delivered");
                      }}
                    >
                      Being Delivered
                    </button>
                    <br />
                    <p>
                      ___________________________________________________________________
                    </p>
                  </>
                )}
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default ViewOrder;
