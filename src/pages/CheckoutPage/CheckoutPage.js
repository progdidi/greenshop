import payment from './images/payment.png';

import './checkoutPage.scss';

import Modals from '../../components/Modals/Modals';

const CheckoutPage = () => {
    return ( 
        <>
        <section className="checkout">
            <div className="container">
                <div className="checkout__inner">
                    <form className="checkout-form">
                        <h6 className="checkout-form__title">Billing Address</h6>
                        <div className="checkout-form__inputs">
                            <label htmlFor="firstname" className="checkout-form__label">
                                First Name
                                <input type="text" className="checkout-form__input" name="firstname" id="firstname"/>
                            </label>
                            <label htmlFor="lastname" className="checkout-form__label">
                                Last Name
                                <input type="text" className="checkout-form__input" name="lastname" id="lastname"/>
                            </label>
                            <label htmlFor="region" className="checkout-form__label">
                                Country / Region
                                <input type="text" className="checkout-form__input" name="region" id="region" placeholder='Select a country / region'/>
                            </label>
                            <label htmlFor="town" className="checkout-form__label">
                                Town / City
                                <input type="text" className="checkout-form__input" name="town" id="town"/>
                            </label>
                            <label htmlFor="street" className="checkout-form__label">
                                Street Address
                                <input type="text" className="checkout-form__input" name="street" id="street" placeholder='House number and street name'/>
                                <input type="text" className="checkout-form__input" name="peas" id="peas" placeholder='Appartment, suite, unit, etc. (optional)'/>
                            </label>
                            <label htmlFor="state" className="checkout-form__label">
                                State
                                <input type="text" className="checkout-form__input" name="state" id="state" placeholder='Select a state'/>
                            </label>
                            <label htmlFor="zip" className="checkout-form__label">
                                Zip
                                <input type="text" className="checkout-form__input" name="zip" id="zip"/>
                            </label>
                            <label htmlFor="email" className="checkout-form__label">
                                Email address
                                <input type="text" className="checkout-form__input" name="email" id="email"/>
                            </label>
                            <label htmlFor="phone" className="checkout-form__label">
                                Phone Number
                                <input type="text" className="checkout-form__input" name="phone" id="phone"/>
                            </label>

                            <label htmlFor="notes" className="checkout-form__label">
                                Order notes (optional)
                                <textarea name="notes" id="notes" cols="30" rows="10" className="checkout-form__textarea"></textarea>
                            </label>
                        </div>
                        
                    </form>

                    <div className="order">
                        <h5 className="order__title">Your Order</h5>
                        <div className="order__products">
                            <table className="products__table">
                                <tr className="products__header">
                                    <th className="products__header-title">Products</th>
                                    <th className="products__header-title"></th>
                                    <th className="products__header-title">Total</th>
                                </tr>

                                <tr className="products__item">
                                    <td className="products__item-info">
                                        <img src="" alt="" className="products__item-img" />
                                        <h6 className="products__item-title">Barberton Daisy</h6>
                                        <div className="products__item-article">SKU: 1995751877966</div>
                                    </td>
                                    
                                    <td className="products__item-quantity">
                                        (x2)
                                    </td>
                                    <td className="products__item-total"></td>
                                </tr>
                                <tr className="products__item">
                                    <td className="products__item-info">
                                        <img src="" alt="" className="products__item-img" />
                                        <h6 className="products__item-title">Barberton Daisy</h6>
                                        <div className="products__item-article">SKU: 1995751877966</div>
                                    </td>
                                    
                                    <td className="products__item-quantity">
                                        (x2)
                                    </td>
                                    <td className="products__item-total"></td>
                                </tr>
                                <tr className="products__item">
                                    <td className="products__item-info">
                                        <img src="" alt="" className="products__item-img" />
                                        <h6 className="products__item-title">Barberton Daisy</h6>
                                        <div className="products__item-article">SKU: 1995751877966</div>
                                    </td>
                                    
                                    <td className="products__item-quantity">
                                        (x2)
                                    </td>
                                    <td className="products__item-total"></td>
                                </tr>
                                
                            </table>
                        </div>
                        <div className="order__cart">
                    
                            <ul className="cart__list">
                                <li className="cart__list-item">
                                    <p className="cart__list-category">Subtotal</p>
                                    <p className="cart__list-sum">$2,683.00</p>
                                </li>
                                <li className="cart__list-item">
                                    <p className="cart__list-category">Coupon Discount</p>
                                    <p className="cart__list-sum">0.00</p>
                                </li>
                                <li className="cart__list-item">
                                    <p className="cart__list-category">Shiping</p>
                                    <p className="cart__list-sum">$2,683.00</p>
                                </li>
                                <a href="" className="cart__list-link">View shipping charge</a>
                            </ul>

                            <div className="cart__total">Total
                                <p className="cart__total-sum">$2,699.00</p>
                            </div>
                        </div>

                        <div className="order__payment">
                            <h6 className="payment-form__title">Payment Method</h6>
                            <form action="" className="payment-form">
                                    
                                    <label for="card" className="payment-form__label">
                                        <input type="radio" id="card" name="card" value="card"className="payment-form__input" />
                                        <img src={payment} alt="" className="payment-form__label-img" />
                                    </label>

                                    <label for="transfer" className="payment-form__label">
                                        <input type="radio" id="transfer" name="card" value="card"className="payment-form__input" />
                                        Dorect bank transfer
                                    </label>

                                    <label for="cash" className="payment-form__label">
                                        <input type="radio" id="cash" name="card" value="card"className="payment-form__input" />
                                        Cash on delivery
                                    </label>                               

                                

                                
                            </form>
                        </div>

                        <input type="submit" value="Place Order" className="order__submit-btn"/>
                    </div>

                    

                    
                </div>
                                   
            </div>
        </section>

        {/* <Modals/> */}
        </>
     );
}
 
export default CheckoutPage;