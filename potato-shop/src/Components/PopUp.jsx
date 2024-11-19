function PopUp({ popUp, clickActionClose, currentProduct }) { // Vissar information med en Popup ruta när man klickar på mer information och en knapp close.
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
