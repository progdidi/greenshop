import shop from "./images/shop.png";
import like from "./images/like.svg";

import CatalogItem from '../../components/catalogItem/CatalogItem';
import {plants} from "../../helpers/plants/plants";

import './shopPage.scss';

const ShopPage = () => {
    return ( 
        <>
        <section className="shop">
            <div className="container">
                <div className="product">
                    <div className="product__card">
                        <div className="product__media">
                            <div className="product__slider">
                                <img src={shop} alt="" className="product__slider-img" />
                            </div>
                        </div>
                        <div className="product__details">
                            <div className="product__top">
                                <h4 className="product__title">Barberton Daisy</h4>
                                <p className="product__price"></p>
                                <div className="product__rating">19 Customer Review</div>
                            </div>
                            <div className="product__descr">
                                <h6 className="product__descr-title">Short Description:</h6>
                                <p className="product__descr-text">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                            </div>
                            <div className="product__size">
                                <h6 className="product__size-title">Size:</h6>
                                <button className="product__size-item">S</button>
                                <button className="product__size-item">M</button>
                                <button className="product__size-item">L</button>
                                <button className="product__size-item">XL</button>
                            </div>
                            <div className="product__buy">
                                <div className="product__buy-amount"></div>
                                <button className="product__buy-btn buy">Buy NOW</button>
                                <button className="product__buy-btn basket">Add to cart</button>
                                <button className="product__buy-btn like">
                                    <img src={like} alt="" className="product__buy-img" />
                                </button>
                            </div>
                            <div className="product__info">
                                <p className="product__info-item">SKU: 1995751877966</p>
                                <p className="product__info-item">Categories: Potter Plants</p>
                                <p className="product__info-item">Tags: Home, Garden, Plants</p>
                            </div>
                        </div>
                    </div>

                    <div className="product__about">
                        <div className="product__description">
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
                        <div className="product__reviews"></div>
                    </div>
                    
                </div>

                <div className="related">
                    <div className="related__products">
                        {plants.map((plant) => {
                            return (
                                <CatalogItem
                                    key={plant.id}
                                    title={plant.title} 
                                    price={plant.descr}
                                    img={plant.img} 
                                    link={plant.link}
                                />
                            )                            
                        })}
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ShopPage;