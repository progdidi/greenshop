import { NavLink } from 'react-router-dom';

//orders
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import CartData from '../../components/CartData/CartData';

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
                    <OrderDetails/>

                    <div className="cart">
                        <h6 className="cart__title">Cart Totals</h6>
                        
                        <CartData/>

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