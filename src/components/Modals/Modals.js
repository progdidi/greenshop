import thanks from "./images/thanks.svg";
import google from "./images/google.svg";
import facebook from "./images/facebook.svg";
import OrderDetails from "../OrderDetails/OrderDetails";

import './modals.scss';

const Modals = () => {
    return ( 
        <>
        <div className="modal">
            <div className="modal__overlay">
                <div className="modal__content received">
                    <div className="recieved__top">
                        <button data-close className="modal__close-btn">x</button>
                        <img src={thanks} alt="" className="recieved__top-img" />
                        <p className="recieved__top-text">Your order has been received</p>
                    </div>

                    <ul className="recieved__info">
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Order Number</p>
                            <p className="recieved__info-data">19586687</p>
                        </li>
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Date</p>
                            <p className="recieved__info-data">15 Sep, 2021</p>
                        </li>
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Total</p>
                            <p className="recieved__info-data">2,699.00</p>
                        </li>
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Payment Method</p>
                            <p className="recieved__info-data">Cash on delivery</p>
                        </li>
                    </ul>

                    <div className="recieved__details">
                        <h6 className="recieved__details-title">Order Details</h6>
                        <OrderDetails/>

                        <p className="recieved__details-ship">Shiping $16.00</p>
                        <p className="recieved__details-total">Total $2,699.00</p>
                    </div>

                    <p className="recieved__comment">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>          

                    <button className="recieved__btn">Track your order</button>

                </div>

                {/* <div className="login modal__login">
                    <div className="login__top">
                        <button className="login__top-btn">Login</button>
                        <button className="login__top-btn">Register</button>
                    </div>
                    
                    <form action="" className="login__form">
                        <h6 className="login__form-title">Enter your username and password to login.</h6>
                        <input type="email" className="login__form-input" placeholder="almamun_uxui@outlook.com"/>
                        <input type="password" className="login__form-input" />
                        <a href="" className="password-link">Forgot Password?</a>
                        <button className="login__form-btn">Login</button>
                    </form>

                    <div className="login__social">
                        <p className="login__social-text">Or login with</p>

                        <a href="" className="login__social-link">
                            <img src={google} alt="" className="login__social-img" />
                            <p className="login__social-descr">Login with Google</p>
                        </a>
                        <a href="" className="login__social-link">
                            <img src={facebook} alt="" className="login__social-img" />
                            <p className="login__social-descr">Login with Facebook</p>
                        </a>
                    </div>
                </div>

                <div className="register modal__register">
                    <div className="login__top">
                        <button className="login__top-btn">Login</button>
                        <button className="login__top-btn">Register</button>
                    </div>
                    
                    <form action="" className="login__form">
                        <h6 className="login__form-title">Enter your email and password to register.</h6>
                        <input type="text" className="login__form-input" placeholder="Username"/>
                        <input type="email" className="login__form-input" placeholder="almamun_uxui@outlook.com"/>
                        <input type="password" className="login__form-input" />
                        <input type="password" className="login__form-input" placeholder="Confirm Password"/>
                        <button className="login__form-btn">Register</button>
                    </form>

                    <div className="login__social">
                        <p className="login__social-text">Or register with</p>

                        <a href="" className="login__social-link">
                            <img src={google} alt="" className="login__social-img" />
                            <p className="login__social-descr">Continue with Google</p>
                        </a>
                        <a href="" className="login__social-link">
                            <img src={facebook} alt="" className="login__social-img" />
                            <p className="login__social-descr">Continue with Facebook</p>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
        </>
     );
}
 
export default Modals;