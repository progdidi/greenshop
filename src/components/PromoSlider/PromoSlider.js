import Slider from 'react-slick';

import promo1 from "./images/promo1.png";

import './promoSlider.scss';

const PromoSlider = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
            <div className="slider__item">
                <div className="promo__item">
                    <div className="promo__item-content">
                        <p className="promo__item-subtitle">Welcome to GreenShop</p>
                        <h1 className="promo__item-title">Let’s Make a Better <span>Planet</span> </h1>
                        <p className="promo__item-text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className="promo__item-btn">SHOP NOW</button>
                    </div>
                    <div className="promo__item-media">
                        <img src={promo1} alt="plant" className="promo__item-img" />
                    </div>
                </div>
            </div>
            <div className="slider__item">
                <div className="promo__item">
                    <div className="promo__item-content">
                        <p className="promo__item-subtitle">Welcome to GreenShop</p>
                        <h1 className="promo__item-title">Let’s Make a Better <span>Planet</span> </h1>
                        <p className="promo__item-text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className="promo__item-btn">SHOP NOW</button>
                    </div>
                    <div className="promo__item-media">
                        <img src={promo1} alt="plant" className="promo__item-img" />
                    </div>
                </div>
            </div>
            <div className="slider__item">
                <div className="promo__item">
                    <div className="promo__item-content">
                        <p className="promo__item-subtitle">Welcome to GreenShop</p>
                        <h1 className="promo__item-title">Let’s Make a Better <span>Planet</span> </h1>
                        <p className="promo__item-text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className="promo__item-btn">SHOP NOW</button>
                    </div>
                    <div className="promo__item-media">
                        <img src={promo1} alt="plant" className="promo__item-img" />
                    </div>
                </div>
            </div>
            <div className="slider__item">
                <div className="promo__item">
                    <div className="promo__item-content">
                        <p className="promo__item-subtitle">Welcome to GreenShop</p>
                        <h1 className="promo__item-title">Let’s Make a Better <span>Planet</span> </h1>
                        <p className="promo__item-text">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className="promo__item-btn">SHOP NOW</button>
                    </div>
                    <div className="promo__item-media">
                        <img src={promo1} alt="plant" className="promo__item-img" />
                    </div>
                </div>
            </div>
        </Slider>
      );
}
 
export default PromoSlider;

 