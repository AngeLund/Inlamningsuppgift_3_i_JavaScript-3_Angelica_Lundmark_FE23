//PotatoDabas är en json, ClickAction är en add button och clickActionInfo är öppna popUp med den producten
function ProductList({ potatoDatabase, clickAction, clickActionInfo }) { 
  return (
    <div className={"List"}>
      {potatoDatabase.map((product) => {
        return (
          <div className={"listWrapper"}>
            <div className={"left"}>
              <img className="productImg" src={product.img} />
            </div>
            <div className={"right"} key={product.productNumber}>
              <h3>{product.name}</h3>
              <p>Price: {product.price} kr</p>
              <button
                className={"infoButton"}
                onClick={() => clickActionInfo(true, product)}
              >
                More information
              </button>
              <button
                className={"AddButton"}
                onClick={() => clickAction(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
