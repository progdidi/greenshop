//Plant Slider
import PlantCardSlider from "../../components/PlantCardSlider/PlantCardSlider";

//Plant details
import StarRating from "../../components/StarRating/StarRating";
import QuantityCounter from "../../components/QuantityCounter/QuantityCounter";


//social images
import like from "./images/like.svg";
import twitter from './images/social/twitter.svg';
import facebook from './images/social/facebook.svg';
import linkedin from './images/social/linkedin.svg';
import mail from './images/social/mail.svg';

//related products
import CatalogItem from '../../components/catalogItem/CatalogItem';
import {plants} from "../../helpers/plants/plants";
import Slider from 'react-slick';

import './shopPage.scss';

const ShopPage = () => {


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
        <section className="shop">
            <div className="container">
                <div className="product">
                    <div className="product__card">
                        <PlantCardSlider/>
                        <div className="product__details">
                            <div className="product__details-top">
                                <h4 className="product__title">Barberton Daisy</h4>
                                <div className="product__details-numbers">
                                    <p className="product__price">119.00$</p>
                                    <StarRating/>
                                    <div className="product__rating">19 Customer Review</div>
                                </div>
                                
                            </div>
                            <div className="product__details-descr">
                                <h6 className="product__descr-title">Short Description:</h6>
                                <p className="product__descr-text">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                            </div>
                            <div className="product__details-size">
                                <h6 className="product__size-title">Size:</h6>
                                <ul className="size__list">
                                    <li className="size__list-item"><button className="size__list-btn">S</button></li>
                                    <li className="size__list-item"><button className="size__list-btn">M</button></li>
                                    <li className="size__list-item"><button className="size__list-btn">L</button></li>
                                    <li className="size__list-item"><button className="size__list-btn">XL</button></li>
                                </ul>
                            </div>
                            <div className="product__details-buy">
                                <div className="product__buy-amount">
                                    <QuantityCounter/>
                                </div>
                                <button className="product__buy-btn buy">Buy NOW</button>
                                <button className="product__buy-btn basket">Add to cart</button>
                                <button className="product__buy-btn like">
                                    <img src={like} alt="" className="product__buy-img" />
                                </button>
                            </div>
                            <div className="product__details-info">
                                <p className="product__info-item">SKU: 1995751877966</p>
                                <p className="product__info-item">Categories: Potter Plants</p>
                                <p className="product__info-item">Tags: Home, Garden, Plants</p>
                            </div>
                            <div className="product__details-social">
                                <p className="product__social-text">Share this products:</p>
                                <ul className="product__social-list">
                                    <li className="product__social-item">
                                        <a href="#" className="product__social-link">
                                        <img src={facebook} alt="" className="product__social-img" />
                                        </a>
                                    </li>
                                    <li className="product__social-item">
                                        <a href="#" className="product__social-link">
                                        <img src={twitter} alt="" className="product__social-img" />
                                        </a>
                                    </li>
                                    <li className="product__social-item">
                                        <a href="#" className="product__social-link">
                                        <img src={linkedin} alt="" className="product__social-img" />
                                        </a>
                                    </li>
                                    <li className="product__social-item">
                                        <a href="#" className="product__social-link">
                                        <img src={mail} alt="" className="product__social-img" />
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className="product__about">
                        <div className="product__tabs-buttons">
                            <button className="product__tabs-btn">Product Description</button>
                            <button className="product__tabs-btn">Reviews (19)</button>
                        </div>

                        <div className="product__tabs-items">
                            <div className="product__tabs-item">
                                <p className="product__description-text">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>

                                <p className="product__description-text">
                                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. 
                                </p>

                                <h6 className="product__description-title">Living Room:</h6>
                                <p className="product__description-text">
                                The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.                      
                                </p>

                                <h6 className="product__description-title">Dining Room:</h6>
                                <p className="product__description-text">The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.
                                </p>

                                <h6 className="product__description-title">Office:</h6>
                                <p className="product__description-text">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                            </div>
                            
                            <div className="product__tabs-item">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, fugit modi vel enim animi, illo quisquam dolorum quaerat debitis unde similique temporibus quas sunt doloribus blanditiis quae voluptatem pariatur maxime.
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="related">
                    <h4 className="related__title">Related Products</h4>
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
        </section>
        </>
     );
}
 
export default ShopPage;