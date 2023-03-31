import { NavLink } from 'react-router-dom';

import deleteIcon from "./images/delete.svg";

import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";

//interested
import Slider from 'react-slick';
import CatalogItem from '../../components/catalogItem/CatalogItem';
import {plants} from "../../helpers/plants/plants";

import './shoppingCartPage.scss';

const ShoppingCartPage = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        dotsClass: 'slick-dots-shop',
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };

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
                                <td className="products__item-quantity">
                                    <QuantityCounter/>
                                </td>
                                <td className="products__item-total"></td>
                                <td className="products__item-delete">
                                    <button className="delete-btn">
                                        <img src={deleteIcon} alt="" className="delete-img" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="products__item">
                                <td className="products__item-info">
                                    <img src="" alt="" className="products__item-img" />
                                    <h6 className="products__item-title">Barberton Daisy</h6>
                                    <div className="products__item-article">SKU: 1995751877966</div>
                                </td>
                                <td className="products__item-price">$119.00</td>
                                <td className="products__item-quantity">
                                    <QuantityCounter/>
                                    
                                </td>
                                <td className="products__item-total"></td>
                                <td className="products__item-delete">
                                    <button className="delete-btn">
                                        <img src={deleteIcon} alt="" className="delete-img" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="products__item">
                                <td className="products__item-info">
                                    <img src="" alt="" className="products__item-img" />
                                    <h6 className="products__item-title">Barberton Daisy</h6>
                                    <div className="products__item-article">SKU: 1995751877966</div>
                                </td>
                                <td className="products__item-price">$119.00</td>
                                <td className="products__item-quantity">
                                    <QuantityCounter/>
                                </td>
                                <td className="products__item-total"></td>
                                <td className="products__item-delete">
                                    <button className="delete-btn">
                                        <img src={deleteIcon} alt="" className="delete-img" />
                                    </button>
                                    
                                </td>
                            </tr>
                            
                        </table>
                    </div>

                    <div className="cart">
                        <h6 className="cart__title">Cart Totals</h6>
                        <form action="" className="coupon-form">
                            <label htmlFor="" className="coupon-form__label">Coupon Apply</label>
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

        <div className="related">
            <div className="container">
                <h4 className="related__title">You may be interested in</h4>
                <Slider {...settings}>
                        {plants.map((plant) => {
                            return (
                                <div className="related__products-item">
                                    <CatalogItem
                                        key={plant.id}
                                        title={plant.title} 
                                        price={plant.descr}
                                        img={plant.img} 
                                        link={plant.link}
                                    />
                                </div>
                                
                            )                            
                        })}
                </Slider>
            </div>           
            
        </div>

        
        </>
     );
}
 
export default ShoppingCartPage ;