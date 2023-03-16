import { NavLink } from 'react-router-dom';

import deleteIcon from "./images/delete.svg";


import './shoppingCartPage.scss';

const ShoppingCartPage = () => {
    return ( 
        <>
        <div className="shopping-cart">
            <div className="container">
                <div className="shopping-cart__inner">
                    <div className="products">
                        <table className="products__table">
                            <tr className="products__header">
                                <th className="products__header-title">Products</th>
                                <th className="products__header-title">Price</th>
                                <th className="products__header-title">Quantity</th>
                                <th className="products__header-title">Total</th>
                            </tr>

                            <tr className="products__item">
                                <td className="products__item-info">
                                    <img src="" alt="" className="products__item-img" />
                                    <h6 className="products__item-title">Barberton Daisy</h6>
                                    <div className="products__item-article">SKU: 1995751877966</div>
                                </td>
                                <td className="products__item-price">$119.00</td>
                                <td className="products__item-quantity"></td>
                                <td className="products__item-total"></td>
                                <td className="products__item-delete">
                                    <img src={deleteIcon} alt="" className="delete-img" />
                                </td>
                            </tr>
                            <tr className="products__item">
                                <td className="products__item-info">
                                    <img src="" alt="" className="products__item-img" />
                                    <h6 className="products__item-title">Barberton Daisy</h6>
                                    <div className="products__item-article">SKU: 1995751877966</div>
                                </td>
                                <td className="products__item-price">$119.00</td>
                                <td className="products__item-quantity"></td>
                                <td className="products__item-total"></td>
                                <td className="products__item-delete">
                                    <img src={deleteIcon} alt="" className="delete-img" />
                                </td>
                            </tr>
                            <tr className="products__item">
                                <td className="products__item-info">
                                    <img src="" alt="" className="products__item-img" />
                                    <h6 className="products__item-title">Barberton Daisy</h6>
                                    <div className="products__item-article">SKU: 1995751877966</div>
                                </td>
                                <td className="products__item-price">$119.00</td>
                                <td className="products__item-quantity"></td>
                                <td className="products__item-total"></td>
                                <td className="products__item-delete">
                                    <img src={deleteIcon} alt="" className="delete-img" />
                                </td>
                            </tr>
                            
                        </table>
                    </div>

                    <div className="cart">
                        <h6 className="cart__title">Cart Totals</h6>
                        <form action="" className="coupon-form">
                            <input type="text" className="coupon-form__input" placeholder="Enter coupon code here..."/>
                            <input type="submit" value="Apply" className="coupon-form__btn"/>
                        </form>

                        <ul className="cart__list">
                            <li className="cart__list-item">
                                <p className="cart__list-category">Subtotal</p>
                                <p className="cart__list-sum">$2,683.00</p>
                            </li>
                            <li className="cart__list-item">
                                <p className="cart__list-category">Coupon Discount</p>
                                <p className="cart__list-sum">$2,683.00</p>
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

                        <div className="cart__buttons">
                            <NavLink to="/shop/shoppingcart/checkout" className="cart__link checkout">Proceed To Checkout</NavLink>
                            <a href="" className="cart__link">Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ShoppingCartPage ;