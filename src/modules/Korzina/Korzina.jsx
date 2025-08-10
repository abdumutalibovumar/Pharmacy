import { useCart } from "../../Context/CartContext";
import "../../assets/scss/modules/_cart.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Header";

function Korzina() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [orderItems, setOrderItems] = useState([]);

  const totalCost = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  const handleOrder = () => {
    setOrderTotal(totalCost);
    setOrderItems(cartItems);
    setShowOrderModal(true);
    clearCart();
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Корзина успешно очищена!");
  };

  return (
    <>
      <Header title={'Ваша корзина'}/>
      <div className="container">
        <div className="korzina-content">
          {cartItems.length === 0 ? (
            <p>Ваша корзина пуста.</p>
          ) : (
            <>
              <div className="cart-items-list">
                {cartItems.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>Количество: {item.quantity}</p>
                      <p className="price">
                        Цена: {item.price * item.quantity} сом
                      </p>
                    </div>
                    <button onClick={() => removeFromCart(item.name)}>
                      Удалить
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3>Итого: {totalCost} сом</h3>
                <div className="cart-summary-btns">
                  <button onClick={handleClearCart}>Очистить корзину</button>
                  <button className="checkout-button" onClick={handleOrder}>
                    Оформить заказ
                  </button>
                </div>
              </div>
            </>
          )}

          {showOrderModal && (
            <div
              className="modal-overlay"
              onClick={() => setShowOrderModal(false)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-btn"
                  onClick={() => setShowOrderModal(false)}
                >
                  &times;
                </button>
                <h3>Заказ оформлен!</h3>
                <p>Сума заказ товаров: {orderTotal} сом</p>
                <h4>Ваш заказ:</h4>
                <ul>
                  {orderItems.map((item, index) => (
                    <li key={index}>
                      {item.name} — {item.quantity} шт. —{" "}
                      {item.price * item.quantity} сом
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <ToastContainer position="top-right" autoClose={3000} />
        </div>
      </div>
    </>
  );
}

export default Korzina;
