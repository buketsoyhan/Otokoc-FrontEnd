import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import Select from "react-select";
import data from "../Products/data";
import Product from "../Products/Product";



function Dashboard(props) {
  const { products } = data;
  const [cardItems, setCardItems] = useState([]);
  const optionsBrand = [
    { value: "ford", label: "Ford" },
    { value: "volvo", label: "Volvo" },
  ];
  const optionsYear = [
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
  ];

  return (
    <div>
      <div className="header ">
        {/* <div>
          <FontAwesomeIcon icon="fa-light fa-user" />
        </div> */}
        <span className="headerStrongText">
          <strong>Otokoç</strong>
          <span className="headerNormalText">Otomotiv</span>
        </span>
      </div>
      <hr></hr>
      <div className="main">
        <div className="row dashboard">
          <div className="filter">
            <Select className="filterBrand" options={optionsBrand} />
            <Select className="filterYear" options={optionsYear} />
          </div>

          <div className="form-header header-bg">
            <h3 className="header-bg">Resim</h3>
            <h3 className="header-bg">Parça No</h3>
            <h3 className="header-bg">Parça Adı</h3>
            <h3 className="header-bg">Tutar</h3>
            <h3 className="header-bg">Adet</h3>
          </div>

          <div className="all-products">
            <div>
              {products.map((product) => (
                <Product key={product.partNo} product={product}>
                  {" "}
                </Product>
              ))}
            </div>
          </div>
        </div>

        <div className="basket">
          <h2><strong>Sepet</strong></h2>
          <div>
                {cardItems.length===0 && <div>Sepet Boş</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
