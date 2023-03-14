import daizy from '../catalogItem/daizy.png';
import './catalogItem.scss';

const CatalogItem = () => {
    return ( 
        <>
            <div className="catalog__item">
                <div className="catalog__item-media">
                    <img src={daizy} alt="" className="catalog__item-img" />
                </div>
                <div className="catalog__item-about">
                    <h6 className="catalog__item-title">Barberton Daisy</h6>
                    <p className="catalog__item-price">$119.00</p>
                </div>
            </div>
        </>
     );
}
 
export default CatalogItem;