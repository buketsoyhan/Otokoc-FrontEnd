import React from "react";
import "./style.css";

function index({ setModal, modal, info }) {
  return (
    <div>
      {modal === true && (
        <div className="errorBox">
          <div className="errorBoxTop">
            <div className="errors">
              {" "}
              <strong> Hata</strong>
            </div>
            <button className="errorIcon" onClick={() => setModal(false)}>
              X
            </button>
          </div>

          <div className="errorName">
            <div>{info.username}</div>
            <div>{info.password}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default index;
