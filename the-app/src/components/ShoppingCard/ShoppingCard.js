import React from "react";
import "./style.css";
function ShoppingCard({ shoppingCard, expand, setExpand }) {
  console.log(shoppingCard);
  
  const sumPrice = (type) =>{
    let sum=0;
    let kdv=0;
    let total=0;
    shoppingCard.map((card)=>{
      sum += card.price * card.amount;
    })

    kdv=sum * 0.18;


    if(type==="sum"){
      return sum;
    
    }
    if(type==="kdv"){
      return kdv;
    }
    else{
      return kdv+sum;
    }
  }

  return (
    <div>
      {expand === false && (
        <div className="original">

          <h3>
            <strong>Sepet Özeti</strong>
          </h3>
          {shoppingCard.length !== 0 &&
            shoppingCard.map((card, index) => {
              return (
                <div className="originalItems" key={index}>
                  <span className="original-partNo">{card.partNo}</span>
                  <span className="original-amount">{card.amount} Ad.</span>
                </div>
              );
            })}
            <hr></hr>

        </div>
      )}
      {expand === true && (
        <div className="expanded">
          <h3>
            <strong>Sepet</strong>
          </h3>
          {shoppingCard.length !== 0 &&
            shoppingCard.map((card, index) => {
              return (
               
                  <div className="expandedItems" key={index}>
                    <span>{card.partNo}</span>
                    <span>{card.amount} Ad.</span>
                    <span>{card.price} TL</span>

                  </div>
            
              );
            })}
            <hr></hr>
            <div style={{display:"flex", justifyContent:"space-between" }} >
              <span>Ara Toplam</span>
              <span>{sumPrice("sum")} TL</span>
            </div>
            <div style={{display:"flex", justifyContent:"space-between" }}>
            <span>KDV</span>
            <span>%18</span>
              <span>{sumPrice("kdv")} TL</span>
              </div>  
            <div style={{display:"flex", justifyContent:"space-between" }}>
              <span><strong> Toplam</strong> </span>
              <span>{sumPrice("total")} TL</span> 
              </div>




        </div>
      )}
    </div>
  );
}

export default ShoppingCard;
