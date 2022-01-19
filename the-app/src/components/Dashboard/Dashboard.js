import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";

import "./style.css";
import data from "../Products/data";
import Product from "../Products/Product";
import ShoppingCard from "../ShoppingCard/ShoppingCard";

function Dashboard(props) {
  let { products } = data;
  const [filterText, setFilterText] = useState("");
  const [filterBrand, setFilterBrand] = useState("Hepsi");
  const [filterYear, setFilterYear] = useState("Hepsi");

  const [expand, setExpand] = useState(false);
  const [shoppingCard, setShoppingCard] = useState([]);

  const [result, setResult] = useState(data.products);

  const optionsBrand = [
    { value: "hepsi", label: "Hepsi" },
    { value: "ford", label: "Ford" },
    { value: "volvo", label: "Volvo" },
  ];

  const optionsYear = [
    { value: "hepsi", label: "Hepsi" },
    { value: "2015", label: "2015" },
    { value: "2016", label: "2016" },
    { value: "2017", label: "2017" },
    { value: "2018", label: "2018" },
    { value: "2019", label: "2019" },
    { value: "2020", label: "2020" },
  ];

  const filtered = (array) =>
    array.filter((product) => {
      return product.partNo.toString().includes(filterText);
    });

  const filteredBrand = (array) =>
    array.filter((product) => {
      return product.brand.toString().includes(filterBrand);
    });

  const filteredYear = (array) =>
    array.filter((product) => {
      return product.year.toString().includes(filterYear);
    });

  useEffect(() => {
    let temp = products;

    temp = filtered(temp);
    temp = filteredBrand(temp);
    temp = filteredYear(temp);

    setResult(temp);
  }, [filterText, filterBrand, filterYear]);

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
                  <select
                    className="filterBrand"
                    onChange={(e) => {
                      setFilterBrand(e.target.value);
                    }}
                    value={filterBrand}
                  >
                    {optionsBrand.map((optionsBrand, index) => (
                      <option key={index}>{optionsBrand.label}</option>
                    ))}
                  </select>

                  <select
                    className="filterYear"
                    onChange={(e) => {
                      setFilterYear(e.target.value);
                    }}
                    value={filterYear}
                  >
                    {optionsYear.map((optionsYear, index) => (
                      <option key={index}>{optionsYear.label}</option>
                    ))}
                  </select>

                  <input
                    style={{ height: 62, width: 400 }}
                    type="text"
                    placeholder="Parça No"
                    value={filterText}
                    onChange={(e) => {
                      setFilterText(e.target.value);
                    }}
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
                    {result.map((product) => (
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
          <Col className={expand === true ? "large" : "small"}>
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
      </div>
    </div>
  );
}

export default Dashboard;
