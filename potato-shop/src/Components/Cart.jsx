function Cart({ cartList, clickAction }) { // Carten där man generarer listan ser listen till kundvagnen här finns också en delete knappen. 
  let totalCost = 0;
  cartList.forEach(
    (cartItem) => (totalCost += cartItem.price * cartItem.count)
  );
  return (
    <div className={"List"}>
      <h4>Your cart</h4>
      {cartList.map((product) => {
        return (
          <div className={"listWrapper"}>
            <div className={"left"}>
              <img className="productImg" src={product.img} />
            </div>
            <div className={"right"} key={product.productNumber}>
              <h3>{product.name}</h3>
              <p>Antal: {product.count}</p>
              <p>Price: {product.price} kr</p>
              <button
                className={"deleteButton"}
                onClick={() => clickAction(product)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <p>Total: {totalCost} SEK</p>
    </div>
  );
}

export default Cart;
