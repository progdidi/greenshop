import banner from './images/banner.png';

import './mainPage.scss';

import PromoSlider from '../../components/PromoSlider/PromoSlider';
import CatalogItem from '../../components/catalogItem/CatalogItem';
import {plants} from "../../helpers/plants/plants";
import BlogItem from '../../components/blogItem/BlogItem';
import { blogs } from '../../helpers/blogs/blogs';
import AdvanceItem from '../../components/advanceItem/AdvanceItem';
import { advance } from '../../helpers/advance/advance';

const MainPage = () => {
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <PromoSlider/>  
            </div>
        </section>

        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <div className="catalog__aside">
                        <div className="catalog__filter">
                            <div className="catalog__filter-category">
                                <h6 className="catalog__filter-title">Categories</h6>
                                <ul className="catalog__filter-list">
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">House Plants</p>
                                            <p className="catalog__filter-amount">(33)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Potter Plants</p>
                                            <p className="catalog__filter-amount">(12)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Seeds</p>
                                            <p className="catalog__filter-amount">(65)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Small Plants</p>
                                            <p className="catalog__filter-amount">(39)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Big Plants</p>
                                            <p className="catalog__filter-amount">(23)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Succulents</p>
                                            <p className="catalog__filter-amount">(17)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Trerrariums</p>
                                            <p className="catalog__filter-amount">(19)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Gardening</p>
                                            <p className="catalog__filter-amount">(13)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Accessories</p>
                                            <p className="catalog__filter-amount">(18)</p>
                                        </button>                                
                                    </li>
                                </ul>
                            </div>

                            <div className="catalog__filter-category">
                                <h6 className="catalog__filter-title">Price Range</h6>
                                <form className="price-range__form" action="">   
                                                                
                                    <input type="range" id="price-range" className="price-range__form-input" name="price" min="39" max="1500"/>
                                    <label for="price" className="price-range__form-label">Price: $39 - $1230</label>
                                    <input className="price-range__form-btn" type="submit" value="Filter"/>
                                </form>
                            </div>

                            <div className="catalog__filter-category">
                                <h6 className="catalog__filter-title">Size</h6>
                                <ul className="catalog__filter-list">
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Small</p>
                                            <p className="catalog__filter-amount">(119)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Medium</p>
                                            <p className="catalog__filter-amount">(86)</p>
                                        </button>                                
                                    </li>
                                    <li className="catalog__filter-item">
                                        <button className="catalog__filter-btn">
                                            <p className="catalog__filter-product">Large</p>
                                            <p className="catalog__filter-amount">(78)</p>
                                        </button>                                
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="banner">
                            <img src={banner} alt="banner" className="banner__img" />
                        </div>
                    </div>
                    <div className="catalog__content">
                        <div className="catalog__top">
                            <div className="catalog__top-buttons">
                                <div className="catalog__top-btn">All Plants</div>
                                <div className="catalog__top-btn">New Arrivals</div>
                                <div className="catalog__top-btn">Sale</div>
                            </div>

                            <div className="catalog__top-sort">
                                <p className="catalog__sort-text">Short by:</p>
                                <select className="catalog__sort-items">
                                    <option className="catalog__sort-items">prise</option>
                                    <option className="catalog__sort-items">size</option>
                                    <option className="catalog__sort-items">prise</option>
                                    <option className="catalog__sort-items">Кукушкина</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="catalog__items">
                            <div className="catalog__products">
                                {plants.map((plant) => {
                                    return (
                                        <CatalogItem
                                            key={plant.id}
                                            title={plant.title} 
                                            price={plant.price}
                                            img={plant.img} 
                                            link={plant.link}
                                        />
                                    )                            
                                })}
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </section>

        <div className="advance">
            <div className="container">
                <div className="advance__items">
                    {advance.map((ad) => {
                        return (
                            <AdvanceItem
                                key={ad.id}
                                title={ad.title} 
                                descr={ad.descr}
                                img={ad.img} 
                                link={ad.link}
                            />
                        )                            
                    })}
                </div>
            </div>
        </div>

        <section className="posts">
            <div className="container">
                <h4 className="posts__title">Our Blog Posts</h4>
                <p className="posts__text">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                <div className="posts__items">
                    {blogs.map((blog) => {
                        return (
                            <BlogItem
                                key={blog.id}
                                title={blog.title} 
                                descr={blog.descr}
                                img={blog.img} 
                                link={blog.link}
                                date={blog.date}
                                minutes={blog.minutes}
                            />
                        )                            
                    })}
                </div>
            </div>
        </section>
              
        </>
     );
}
 
export default MainPage;