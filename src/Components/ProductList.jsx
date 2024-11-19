function ProductList({ potatoDatabase, clickAction, clickActionInfo }) { // Här generar vi hela produkt listan från databasen och har också en add knappt och en information knappt.
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
