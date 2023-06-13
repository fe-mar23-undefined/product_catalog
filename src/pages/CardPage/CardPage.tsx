
import { Link } from 'react-router-dom';
import './CardPage.scss'

export const CardPage = () =>
    <section className='card-page main__card-page'>

        <Link className='card-page__back-link' to={`/phones`}>
            <svg className='card-page__back-svg' width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47075 0.528606C5.2104 0.268256 4.78829 0.268256 4.52794 0.528606L0.527945 4.52861C0.267595 4.78896 0.267595 5.21107 0.527945 5.47141L4.52794 9.47141C4.78829 9.73176 5.2104 9.73176 5.47075 9.47141C5.7311 9.21107 5.7311 8.78896 5.47075 8.52861L1.94216 5.00001L5.47075 1.47141C5.7311 1.21107 5.7311 0.788955 5.47075 0.528606Z" fill="#313237" />
            </svg>
            back
        </Link>
        <h1 className='card-page__title'>
            Card Page
        </h1>
        <div className='card-page__checkout'>
            <p className='card-page__checkout__total-price'>$2657</p>
            <p className='card-page__checkout__items-number'>Total for 3 items</p>
            <button className='card-page__checkout__submit'>checkout</button>
        </div>

    </section>