import "./App.css";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import Cart from "./component/Cart";
import { addTocardInLS } from "./utilities/cartAdd";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  let newCart;
  useEffect(() => {
    try {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const ProductAdd = (product) => {
    newCart = [...cart, product];
    setCart(newCart);
    addTocardInLS(product);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {product.map((pd, idx) => (
                <div key={idx} className="col-md-4 my-4">
                  <div className="card">
                    <img src={pd.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Name:{pd.name}</h5>
                      <p className="card-text">Price:{pd.price}</p>
                      <p className="card-text">Ratings:{pd.ratings}</p>
                      <p className="card-text">Stock:{pd.stock}</p>
                      <button
                        onClick={() => ProductAdd(pd)}
                        className="btn btn-info form-control"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
