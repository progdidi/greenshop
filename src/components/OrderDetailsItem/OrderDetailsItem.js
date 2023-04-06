import './orderDetailsItem.scss';
import QuantityCounter from '../QuantityCounter/QuantityCounter';

import deleteIcon from './delete.svg';
import orderImg from './order.png';

const OrderDetailsItem = ({img, title, article, price, amount}) => {
    return ( 
        <>

        <li className="order__item">
            <img src={orderImg} alt="" className="order__item-img" />
            <div className="order__item-info">
                <h6 className="order__item-title">{title}</h6>
                <p className="order__item-article">SKU: <span>{article}</span></p>
            </div>
            <p className="order__item-price">${price}</p>
            <div className="order__item-amount">
                <QuantityCounter/>
            </div>
            <div className="order__item-total">
                $
            </div>
            <div className="order__item-delete">
                <button className="order__item-delete-btn">
                    <img src={deleteIcon} alt="" className="order__item-delete-img" />
                </button>
                
            </div>
        </li>

        </>
     );
}
 
export default OrderDetailsItem;

