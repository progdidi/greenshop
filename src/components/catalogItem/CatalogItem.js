import './catalogItem.scss';

const CatalogItem = ({img, title, price}) => {
    return ( 
        <>
            <div className="catalog__item">
                <a href="#" className="catalog__item-link">
                    <div className="catalog__item-media">
                        <img src={img} alt="" className="catalog__item-img" />
                    </div>
                    <div className="catalog__item-about">
                        <h6 className="catalog__item-title">{title}</h6>
                        <p className="catalog__item-price">${price}.00</p>
                    </div>
                </a>                
            </div>
        </>
     );
}
 
export default CatalogItem;