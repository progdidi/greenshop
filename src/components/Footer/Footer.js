//images
import care from './images/plantServices/care.svg';
import renovation from './images/plantServices/renovation.svg';
import watering from './images/plantServices/watering.svg';
import footerLogo from './images/contacts/logo.svg';
import facebook from "./images/social/facebook.svg";
import instagram from "./images/social/instagram.svg";
import linkedin from "./images/social/linkedin.svg";
import twitter from "./images/social/twitter.svg";
import union from "./images/social/union.svg";
import payment from "./images/payment.png";



import './footer.scss';

const Footer = () => {
    return ( 
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer__services">
                    <div className="footer__services-items">
                        <div className="services__item">
                            <img src={care} alt="" className="services__item-img" />
                            <h6 className="services__item-title">Garden Care</h6>
                            <p className="services__item-descr">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                        <div className="services__item">
                            <img src={renovation} alt="" className="services__item-img" />
                            <h6 className="services__item-title">Plant Renovation</h6>
                            <p className="services__item-descr">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                        <div className="services__item">
                            <img src={watering} alt="" className="services__item-img" />
                            <h6 className="services__item-title">Watering Graden</h6>
                            <p className="services__item-descr">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                        </div>
                    </div>
                    

                    <div className="newsletter">
                        <h6 className="newsletter__title">Would you like to join newsletters?</h6>
                        <form action="" className="newsletter__form">
                            <input type="mail" className="newsletter__form-input" placeholder='enter your email address...'/>
                            <button className="newsletter__form-btn">Join</button>
                        </form>
                        <p className="newsletter__descr">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                    </div>
                </div>
                <div className="footer__contacts">
                    <a href="" className="footer__logo">
                        <img src={footerLogo} alt="logo" className="footer__logo-img" />
                    </a>
                    <p className="footer__contacts-item location">70 West Buckingham Ave. Farmingdale, NY 11735</p>
                    <a href="mail:ontact@greenshop.com" className="footer__contacts-item mail">contact@greenshop.com</a>
                    <a href="tel:+8801911717490" className="footer__contacts-item phone">+88 01911 717 490</a>
                </div>
                <div className="footer__info">
                    <div className="footer__info-nav">
                        <div className="footer__info-category">
                            <h6 className="footer__info-title">My Account</h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item"><a href="" className="footer__info-link">My Account</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Our stores</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Contact us</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Career</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Specials</a></li>
                            </ul>
                        </div>
                        <div className="footer__info-category">
                            <h6 className="footer__info-title">Help & Guide</h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item"><a href="" className="footer__info-link">Help Center</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">How to Buy</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Shipping & Delivery</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Product Policy</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">How to Return</a></li>
                            </ul>
                        </div>
                        <div className="footer__info-category">
                            <h6 className="footer__info-title">Categories</h6>
                            <ul className="footer__info-list">
                                <li className="footer__info-item"><a href="" className="footer__info-link">House Plants</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Potter Plants</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Seeds</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Small Plants</a></li>
                                <li className="footer__info-item"><a href="" className="footer__info-link">Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="footer__info-social">
                        <h6 className="footer__info-title">Social Media</h6>
                        <ul className="social__list">
                            <li className="social__list-item">
                                <a href="" className="social__list-link">
                                    <img src={facebook} alt="facebook" className="social__list-img" />
                                </a>
                            </li>
                            <li className="social__list-item">
                                <a href="" className="social__list-link">
                                    <img src={instagram} alt="instagram" className="social__list-img" />
                                </a>
                            </li>
                            <li className="social__list-item">
                                <a href="" className="social__list-link">
                                    <img src={twitter} alt="twitter" className="social__list-img" />
                                </a>
                            </li>
                            <li className="social__list-item">
                                <a href="" className="social__list-link">
                                    <img src={linkedin} alt="linkedin" className="social__list-img" />
                                </a>
                            </li>
                            <li className="social__list-item">
                                <a href="" className="social__list-link">
                                    <img src={union} alt="union" className="social__list-img" />
                                </a>
                            </li>
                        </ul>

                        <div className="footer__payment">
                            <h6 className="footer__info-title">We accept</h6>
                            <img src={payment} alt="" className="footer__payment-img" />
                        </div>

                        
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__bottom-text">© 2021 GreenShop. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;