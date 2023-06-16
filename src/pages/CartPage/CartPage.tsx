import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContextProvider';
import './CartPage.scss'
import { CheckoutModal } from '../../components/CheckoutModal';
import { Phone } from '../../types/Phone';

export const CartPage = () => {
    let navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const { cart, removeFromCart, addToCart, emptyCart, decreaseQuantity } = useGlobalContext();

    const totalPrice = cart
        .reduce((accu, curr) => accu + (curr.phone.fullPrice * curr.quantity), 0);

    const totalItems = cart
        .reduce((accu, curr) => accu + (curr.quantity), 0);

    const handleSubmit = () => {
        emptyCart();
        setIsProcessing(true);
    }
    console.log(cart)
    const visibleItems = useMemo(() => {
        let items = new Set(cart)

        return Array.from(items);
    }, [cart]);

    console.log(visibleItems);
    return (
        <>
        {!cart.length && !isProcessing ? <p>ualalla</p> :
        <section className='cart-page main__cart-page'>
            <button className='cart-page__back-link' onClick={() => navigate(-1)}>
                <svg className='cart-page__back-svg' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.47075 0.528606C5.2104 0.268256 4.78829 0.268256 4.52794 0.528606L0.527945 4.52861C0.267595 4.78896 0.267595 5.21107 0.527945 5.47141L4.52794 9.47141C4.78829 9.73176 5.2104 9.73176 5.47075 9.47141C5.7311 9.21107 5.7311 8.78896 5.47075 8.52861L1.94216 5.00001L5.47075 1.47141C5.7311 1.21107 5.7311 0.788955 5.47075 0.528606Z" fill="#313237" />
                </svg>
                back
            </button>
            <h1 className='cart-page__title'>
                Cart Page
            </h1>
            {cart.length > 0 && <div className='cart-content'>
                <ul className="cart__list">
                    {cart.map(cartItem => {
                        return (
                            <div
                                key={cartItem.phone.phoneId + Math.random()}
                                className="cart-element">
                                <button
                                    className="cart-element__delete"
                                    onClick={() => removeFromCart(cartItem.phone)}
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4721 4.47138C12.7324 4.21103 12.7324 3.78892 12.4721 3.52858C12.2117 3.26823 11.7896 3.26823 11.5292 3.52858L8.00065 7.05717L4.47206 3.52858C4.21171 3.26823 3.7896 3.26823 3.52925 3.52858C3.2689 3.78892 3.2689 4.21103 3.52925 4.47138L7.05784 7.99998L3.52925 11.5286C3.2689 11.7889 3.2689 12.211 3.52925 12.4714C3.7896 12.7317 4.21171 12.7317 4.47206 12.4714L8.00065 8.94279L11.5292 12.4714C11.7896 12.7317 12.2117 12.7317 12.4721 12.4714C12.7324 12.211 12.7324 11.7889 12.4721 11.5286L8.94346 7.99998L12.4721 4.47138Z" fill="#B4BDC4">
                                        </path>
                                    </svg>
                                </button>
                                <div className="cart-element__image-container">
                                    <img
                                        className="cart-element__image"
                                        src={`https://raw.githubusercontent.com/mate-academy/product_catalog/main/public/${cartItem.phone.image}`}
                                        alt={cartItem.phone.name}
                                    />
                                </div>
                                <h2 className="cart-element__title">{cartItem.phone.name}</h2>
                                <div className="cart-element__count count">
                                    <button className="count__btn"
                                        disabled={cartItem.quantity === 1}
                                        onClick={() => decreaseQuantity(cartItem.phone)}
                                    >-</button>
                                    <span className="count__value">{cartItem.quantity}</span>
                                    <button
                                        className="count__btn"
                                        onClick={() => addToCart(cartItem.phone)}
                                    >+</button>
                                </div>
                                <div className="cart-element__value">${cartItem.phone.fullPrice}</div>
                            </div>
                        )
                    })}

                </ul>
                <div className='cart-page__checkout'>
                    <p className='cart-page__checkout__total-price'>${totalPrice}</p>
                    <p className='cart-page__checkout__items-number'>Total for {totalItems} items</p>
                    <button onClick={handleSubmit} className='cart-page__checkout__submit'>checkout</button>
                </div>
            </div>
            }
        </section>
        }
        {!cart.length && isProcessing && <CheckoutModal setLoaderStatus={setIsProcessing} />}
        </>
)
}