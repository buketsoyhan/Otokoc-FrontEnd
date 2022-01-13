import React from 'react'
import "./style.css";
function Product(props) {
    const {product} =props;
    return (
        <div className='all-products' > 
            <input className="picture" type="image" img src = {product.picture} alt="photo" /> 
            <h3 className="product part-no">{product.partNo}</h3>
            <h3 className="product track-name">{product.trackName}</h3>
            <h3 className="product price"> {product.price}TL</h3>
            <div className='product amount-list'>
                <input style={{width:"5rem", justifyContent:"center"}} clasName="amount" type="number" placeholder='Adet' ></input>
                <button style={{marginLeft:"50px", alignItems:"center"}} className="add-button">+</button>
            </div>

        </div>
    )
}

export default Product
