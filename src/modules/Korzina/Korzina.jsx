import { useCart } from '../../Context/CartContext';
import { Header } from '../../components/Header';
import '../../assets/scss/modules/_cart.scss';
import { useState } from 'react';

function Korzina() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalCost = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return total + price * quantity;
  }, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = () => {
    setOrderPlaced(true);
    clearCart();
    setShowDeliveryForm(false);
    setFormData({ name: '', phone: '', address: '' });
    setPaymentMethod('');
  };

  return (
    <div className="container">
      <Header />
      <div className="korzina-content">
        <h2>Ваша корзина</h2>

        {orderPlaced && (
          <div className="order-success-message">
            ✅ Заказ оформлен на имя <strong>{formData.name}</strong> на сумму <strong>{totalCost} сом</strong>.
          </div>
        )}

        {cartItems.length === 0 && !orderPlaced ? (
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
                    <p className="price">Цена: {item.price * item.quantity} сом</p>
                  </div>
                  <button onClick={() => removeFromCart(item.name)}>Удалить</button>
                </div>
              ))}
            </div>

            {!orderPlaced && (
              <div className="cart-summary">
                <h3>Итого: {totalCost} сом</h3>
                <button onClick={clearCart}>Очистить корзину</button>
                <button className="checkout-button" onClick={() => setShowDeliveryForm(true)}>
                  Оформить заказ
                </button>
              </div>
            )}

            {showDeliveryForm && (
              <div className="delivery-form">
                <h3>Информация о доставке</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <textarea
                  name="address"
                  placeholder="Адрес доставки"
                  value={formData.address}
                  onChange={handleInputChange}
                />

                <div className="payment-methods">
                  <h4>Метод оплаты:</h4>
                  <button onClick={() => setPaymentMethod('electronic')}>
                    Электронный заказ
                  </button>
                  <button onClick={() => setPaymentMethod('qr')}>
                    Оплата через QR код
                  </button>
                </div>

                {paymentMethod === 'qr' && (
                  <div className="qr-code">
                    <p>Отсканируйте QR код для оплаты:</p>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Оплата%20на%20сумму%20${totalCost}%20сом`}
                      alt="QR код для оплаты"
                    />
                  </div>
                )}

                {paymentMethod && (
                  <button className="confirm-order" onClick={handleOrderSubmit}>
                    Подтвердить заказ
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Korzina;
