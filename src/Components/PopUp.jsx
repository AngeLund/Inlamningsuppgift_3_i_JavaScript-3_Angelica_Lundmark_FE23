// popUp state är om den vissas eller inte. ClickActionsClose är close button
// currentProduct som kommer från vissa mer info.
function PopUp({ popUp, clickActionClose, currentProduct }) { 
  if (popUp) {
    return (
      <div className="popUpDiv">
        <p className="information">{currentProduct.info}</p>
        <button
          className="closeButton"
          onClick={() => clickActionClose(false, currentProduct)}
        >
          Close
        </button>
      </div>
    );
  }
  return <></>;
}

export default PopUp;
