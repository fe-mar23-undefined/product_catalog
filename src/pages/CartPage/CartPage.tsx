
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlovalContextProvider';
import './CartPage.scss'

export const CartPage = () => {
    const {cart, removeFromCart, addToCart} = useGlobalContext();

    const totalPrice = cart
        .reduce((accu, curr) => accu + curr.fullPrice, 0);
    return (
        <section className='cart-page main__cart-page'>
            <Link className='cart-page__back-link' to={`/phones`}>
                <svg className='cart-page__back-svg' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.47075 0.528606C5.2104 0.268256 4.78829 0.268256 4.52794 0.528606L0.527945 4.52861C0.267595 4.78896 0.267595 5.21107 0.527945 5.47141L4.52794 9.47141C4.78829 9.73176 5.2104 9.73176 5.47075 9.47141C5.7311 9.21107 5.7311 8.78896 5.47075 8.52861L1.94216 5.00001L5.47075 1.47141C5.7311 1.21107 5.7311 0.788955 5.47075 0.528606Z" fill="#313237" />
                </svg>
                back
            </Link>
            <h1 className='cart-page__title'>
                Cart Page
            </h1>
            {cart.length > 0 && <div>
                <div className='cart-page__cart-items-list'>
                    {cart.map(cartItem => {
                        return (
                        <p key={cartItem.phoneId + Math.random()}>
                            hey its me {cartItem.itemId}
                            <button onClick={() => addToCart(cartItem)}>Add</button>
                            <button onClick={() => removeFromCart(cartItem)}>Remove</button>
                        </p>
                        )
                    })}
                </div>
                <div className='cart-page__checkout'>
                    <p className='cart-page__checkout__total-price'>${totalPrice}</p>
                    <p className='cart-page__checkout__items-number'>Total for {cart.length} items</p>
                    <button className='cart-page__checkout__submit'>checkout</button>
                </div>
            </div>
            }


        </section>
    )


}