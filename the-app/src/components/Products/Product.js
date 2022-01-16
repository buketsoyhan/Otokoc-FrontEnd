import React, { useState } from "react";
import "./style.css";
function Product({ product, shoppingCard, setShoppingCard }) {
  const [amount, setAmount] = useState("0");

  const onAdd = (product) => {
    const item = {
      partNo: product.partNo,
      amount: amount,
      price: product.price,
    };
    console.log("item", item);
    setShoppingCard([...shoppingCard, item]);
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
          className="amount"
          type="number"
          placeholder="Adet"
        ></input>
        <button
          style={{ marginLeft: "50px", alignItems: "center" }}
          className="add-button"
          onClick={() => onAdd(product)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Product;
