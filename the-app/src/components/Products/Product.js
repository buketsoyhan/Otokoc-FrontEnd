import React, { useState } from "react";
import "./style.css";
function Product({ product, shoppingCard, setShoppingCard }) {
  const [amount, setAmount] = useState("1");

  const onAdd = (product) => {
    const item = {
      partNo: product.partNo,
      amount: amount,
      price: product.price,
    };
    setShoppingCard([...shoppingCard, item]);
    setAmount("1");
  };

  return (
    <div className="all-products">
      <input
        className="picture"
        type="image"
        src={product.picture}
        alt="photo"
      />
      <h3 className="product part-no">{product.partNo}</h3>
      <h3 className="product track-name">{product.trackName}</h3>
      <h3 className="product price"> {product.price}TL</h3>
      <div className="product amount-list">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "5rem", justifyContent: "center" }}
          className="product amount"
          type="number"
          placeholder="Adet"
        ></input>
        <div className="" style={{ margin: "auto" }}>
          <button
            style={{
              alignItems: "center",
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
            }}
            className="product  addButton"
            onClick={() => onAdd(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
