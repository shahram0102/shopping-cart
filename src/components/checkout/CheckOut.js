import React from "react";
import { useCart } from "../../Providers/CartProvider";
import styles from "../../styles/checkout.module.css";

function CheckOut() {
  const data = useCart();
  return (
    <>
      {data.total === 0 ? (
        <h3
          style={{ textAlign: "center", marginTop: "1rem", color: "#9333ea" }}
        >
          محصولی سفارش نداده اید
        </h3>
      ) : (
        <section className={styles.checkoutContainer}>

              <div className={styles.checkoutList}>
              {data.cart.map((c) => {
            return (
                <div className={styles.checkoutItem}>
                  <img width="80px" height="70px" src={c.image} alt={c.name} />
                  <p>{c.name}</p>
                  <p>{c.quantity}</p>
                  <p>{c.price} تومان</p>
                </div>
                          )})}
                <div
                  style={{
                     marginTop:"15px",
                    display: "flex",
                    justifyContent:"center",
                    width:"100%",
                    padding:"5px",
                    maxWidth:"500px"
                  }}
                >
                  <span style={{ marginBottom: "10px" }}>قیمت کل :</span>
                  <span> تومان {data.total}</span>
                </div>
              </div>
            
        </section>
      )}
    </>
  );
}

export default CheckOut;
