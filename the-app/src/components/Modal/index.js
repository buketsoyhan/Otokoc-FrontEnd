import React from "react";

function index({ setModal, modal, info }) {
  console.log("indexteki", info);
  return (
    <div>
      {modal === true && (
        <div>
          <div>{info.username}</div>
          <div>{info.password}</div>
          <button onClick={() => setModal(false)}>X</button>
        </div>
      )}
    </div>
  );
}

export default index;
