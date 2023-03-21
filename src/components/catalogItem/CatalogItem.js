import basket from './basket.svg';
import like from './like.svg';
import search from './search.svg';

import './catalogItem.scss';

const CatalogItem = ({img, title, price}) => {
    return ( 
        <>
            <div className="catalog-item">
                <a href="#" className="catalog-item__link">
                    <div className="catalog-item__media">
                        <img src={img} alt="" className="catalog-item__img" />
                        <div className="catalog-item__overlay">
                        <div className="catalog-item__overlay-buttons">
                            <button className="catalog-item__overlay-btn">
                                <img src={basket} alt="basket" className="catalog-item__overlay-img" />
                            </button>
                            <button className="catalog-item__overlay-btn">
                                <img src={like} alt="loke" className="catalog-item__overlay-img" />
                            </button>
                            <button className="catalog-item__overlay-btn">
                                <img src={search} alt="search" className="catalog-item__overlay-img" />
                            </button>
                        </div>
                        
                    </div>
                    </div>
                    <div className="catalog-item__about">
                        <h6 className="catalog-item__about-title">{title}</h6>
                        <p className="catalog-item__about-price">${price}.00</p>
                    </div>
                    
                </a>                
            </div>
        </>
     );
}
 
export default CatalogItem;