import React from "react";

function ShoppingCard({ shoppingCard, expand, setExpand }) {
  console.log(shoppingCard);

  return (
    <div>
        
      {expand === false && (
          
        <div className="original">
           
          {shoppingCard.length !== 0 &&
            shoppingCard.map((card, index) => {
              return (
                <div key={index}>
                  <span>{card.partNo}</span>

                  <span>{card.amount} Ad.</span>
                </div>
              );
            })}
        </div>
      )}
      {expand === true && (
        <div className="expanded">

          {shoppingCard.length !== 0 &&
            shoppingCard.map((card, index) => {
              return (
                <div key={index}>
                  <span>{card.partNo}</span>
                    <span>{card.price} TL</span>
                  <span>{card.amount} Ad.</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default ShoppingCard;
