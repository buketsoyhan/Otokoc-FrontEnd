import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";

import "./style.css";
import Select from "react-select";
import data from "../Products/data";
import Product from "../Products/Product";
import ShoppingCard from "../ShoppingCard/ShoppingCard";

function Dashboard(props) {
  const { products } = data;
  // const [cardItems, setCardItems] = useState([]);
  // const [product, setProduct] = useState(data);
  const [expand, setExpand] = useState(false);
  const [shoppingCard, setShoppingCard] = useState([]);

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
      <div className="header">
        <span className="userIcon">
          <FontAwesomeIcon className="icon" icon={faUser} />
        </span>
        <span className="headerStrongText">
          <strong>Otokoç</strong>
          <span className="headerNormalText">Otomotiv</span>
        </span>
      </div>
      <hr></hr>
      <div className="main">
        <Row>
          <Col sm={8}>
            <div>
              <div className="row dashboard">
                <div className="filter">
                  <Select className="filterBrand" options={optionsBrand} />
                  <Select className="filterYear" options={optionsYear} />

                  <input
                    style={{ height: 62, width: 400 }}
                    type="text"
                    placeholder="Parça No"
                  />
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
                      <Product
                        key={product.partNo}
                        product={product}
                        shoppingCard={shoppingCard}
                        setShoppingCard={setShoppingCard}
                      >
                        {" "}
                      </Product>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className= {expand===true ? "large" : "small"}>
            <div>
            <div className="basket">
          {expand === false && (
            <a
              style={{ color: "#0F172A", textDecoration: "none" }}
              href="#"
              onClick={() => {
                setExpand(true);
              }}
            >
              {" "}
              {`<< Detaylı Sepeti Göster`}
            </a>
          )}

          {expand === true && (
            <a
              style={{ color: "#0F172A", textDecoration: "none" }}
              href="#"
              onClick={() => {
                setExpand(false);
              }}
            >
              {" "}
              {`>> Detaylı Sepeti Gizle`}
            </a>
          )}

          <ShoppingCard
            shoppingCard={shoppingCard}
            expand={expand}
            setExpand={setExpand}
          />
          <div>{shoppingCard.length === 0 && <div>Sepet Boş</div>}</div>
        </div>
            </div>
          </Col>
        </Row>
        {/* <Row>
            <Col style={{ backgroundColor: "violet" }} sm={8}>
              sm=8
            </Col>
            <Col style={{ backgroundColor: "aqua" }} sm={3}>
              sm=3
            </Col>
          </Row> */}
      </div>
    </div>
  );
}

export default Dashboard;
