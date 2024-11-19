import "./App.css";
import potatoDatabase from "./Database/potatoDatabase.json";
import Cart from "./Components/Cart";
import { useState } from "react";
import ProductList from "./Components/ProductList";
import PopUp from "./Components/PopUp";

function App() {  //Usestates
  const [searchState, SetSearchState] = useState("");
  const [cartList, SetCartList] = useState([]);
  const [products, SetProducts] = useState(potatoDatabase);
  const [popUp, SetPopUp] = useState(false);
  const [currentProduct, SetCurrentProduct] = useState({});

  const updateProductList = (searchQuery) => { // Vi uppdaterar productlistan 
    return potatoDatabase.filter((product) => {
      if (searchQuery === "") {
        return true;
      } else if (
        product.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
  };
  const handleSubmit = (e) => {  // Submit funktion till searchbaren 
    e.preventDefault();
    SetProducts(updateProductList(searchState));
  };
  const handleCartClick = (product) => { //Hanterar, uppdaterar och lägger på produkter i count i kundvagnen 
    const prodInCart = cartList.find(
      (cartItem) => cartItem.name === product.name
    );
    if (prodInCart) {
      const newCartList = cartList.map((cartItem) => {
        if (cartItem.name === product.name) {
          return { ...cartItem, count: cartItem.count + 1 };
        }
        return cartItem;
      });
      SetCartList(newCartList);
    } else {
      SetCartList([...cartList, product]);
    }
  };
  const handlePopUp = (popUpState, product) => { //Hanterar PopUp 
    SetCurrentProduct(product);
    SetPopUp(popUpState);
  };

  const handleDeleteClick = (product) => { // Delete knappten som uppdaterar när ett antal tas bort i count 
    const prodInCart = cartList.find(
      (cartItem) => cartItem.name === product.name
    );
    if (prodInCart && prodInCart.count > 1) {
      const newCartList = cartList.map((cartItem) => {
        if (cartItem.name === product.name) {
          return { ...cartItem, count: cartItem.count - 1 };
        }
        return cartItem;
      });
      SetCartList(newCartList);
    } else {
      SetCartList(
        cartList.filter((cartItem) => cartItem.name !== product.name)
      );
    }
  };
  return (  
    <div className="App">
      <header className="App-header">
        <h1>Potato Shop</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => {
              SetSearchState(event.target.value);
              SetProducts(updateProductList(event.target.value));
            }}
          />
          <button>Search</button>
          <h2>Search result</h2>
        </form>
      </header>
      <main>
        <div className={"Main"}>
          <ProductList
            potatoDatabase={products}
            clickAction={handleCartClick}
            searchState={searchState}
            clickActionInfo={handlePopUp}
          />
          <Cart cartList={cartList} clickAction={handleDeleteClick} />
        </div>
        <PopUp
          popUp={popUp}
          currentProduct={currentProduct}
          clickActionClose={handlePopUp}
        />
      </main>
    </div>
  );
}

export default App;
