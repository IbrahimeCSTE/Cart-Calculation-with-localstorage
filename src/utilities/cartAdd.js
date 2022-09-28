let allProduct = [];
let a = 0;
const addTocardInLS = (pd) => {
  const isCart = JSON.parse(localStorage.getItem("Cart"));
  if (isCart) {
    //console.log("cart is availabe");
    for (let i = 0; i < isCart.length; i++) {
      let x;
      if (isCart[i].id === pd.id) {
        x = parseInt(isCart[i].quantity);
        x += 1;
        isCart[i].quantity = x;
        //console.log(isCart[i].quantity);

        //newCart
        localStorage.setItem("Cart", JSON.stringify(isCart));

        a = 1;
        break;
      } else {
        a = 0;
      }
    }
    if (a == 0) {
      pd.quantity = 1;
      allProduct.push(pd);
      localStorage.setItem("Cart", JSON.stringify(allProduct));
    }

    //localStorage.setItem("Cart", JSON.stringify(pd));
  } else {
    pd.quantity = 1;
    allProduct.push(pd);
    localStorage.setItem("Cart", JSON.stringify(allProduct));
    //console.log(pd.quantity);
  }
};

export { addTocardInLS };
