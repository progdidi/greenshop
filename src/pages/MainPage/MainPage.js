import './mainPage.scss';

import Slider from '../../components/slider/Slider';
import CatalogItem from '../../components/catalogItem/CatalogItem';

const MainPage = () => {
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <Slider/>  
            </div>
        </section>

        <section className="catalog">
            <div className="container">
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
                </div>
                <div className="catalog__products"></div>
            </div>
        </section>
              
        </>
     );
}
 
export default MainPage;