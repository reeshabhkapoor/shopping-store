import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import FlipMove from "react-flip-move";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders:</h1>
      <div className="orders__order">
        <FlipMove>
          {orders?.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </FlipMove>
        {orders !== [] ? <div className="noOrders">No Orders</div> : null}
      </div>
    </div>
  );
}

export default Orders;
