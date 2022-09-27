let allProduct = [];
let a = 0;
let pidx;
const addTocardInLS = (pd) => {
  console.log(typeof pd.id);
  const isCart = JSON.parse(localStorage.getItem("Cart"));
  if (isCart) {
    //console.log("cart is availabe");
    for (let i = 0; i < isCart.length; i++) {
      if (isCart[i].id === pd.id) {
        a = 1;
        //qtr+1
        break;
      } else {
        a = 0;
      }
    }
    if (a == 0) {
      allProduct.push(pd);
      localStorage.setItem("Cart", JSON.stringify(allProduct));
    }

    //localStorage.setItem("Cart", JSON.stringify(pd));
  } else {
    allProduct.push(pd);
    localStorage.setItem("Cart", JSON.stringify(allProduct));
    //console.log(1);
  }

  let shoppingCart = {};
};

export { addTocardInLS };
