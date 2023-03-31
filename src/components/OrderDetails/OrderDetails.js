import './orderDetails.scss';
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import deleteIcon from './images/delete.svg'

const OrderDetails = () => {
    return ( 
        <>
            <table className="products__table">
                <tr className="products__header">
                    <th className="products__header-title">Products</th>
                    <th className="products__header-title">Price</th>
                    <th className="products__header-title">Quantity</th>
                    <th className="products__header-title">Total</th>
                </tr>

                <tr className="products__item">
                    <td className="products__item-info">
                        <img src="" alt="" className="products__item-img" />
                        <h6 className="products__item-title">Barberton Daisy</h6>
                        <div className="products__item-article">SKU: 1995751877966</div>
                    </td>
                    <td className="products__item-price">$119.00</td>
                    <td className="products__item-quantity">
                        <QuantityCounter/>
                    </td>
                    <td className="products__item-total"></td>
                    <td className="products__item-delete">
                        <button className="delete-btn">
                            <img src={deleteIcon} alt="" className="delete-img" />
                        </button>
                    </td>
                </tr>
                <tr className="products__item">
                    <td className="products__item-info">
                        <img src="" alt="" className="products__item-img" />
                        <h6 className="products__item-title">Barberton Daisy</h6>
                        <div className="products__item-article">SKU: 1995751877966</div>
                    </td>
                    <td className="products__item-price">$119.00</td>
                    <td className="products__item-quantity">
                        <QuantityCounter/>
                        
                    </td>
                    <td className="products__item-total"></td>
                    <td className="products__item-delete">
                        <button className="delete-btn">
                            <img src={deleteIcon} alt="" className="delete-img" />
                        </button>
                    </td>
                </tr>
                <tr className="products__item">
                    <td className="products__item-info">
                        <img src="" alt="" className="products__item-img" />
                        <h6 className="products__item-title">Barberton Daisy</h6>
                        <div className="products__item-article">SKU: 1995751877966</div>
                    </td>
                    <td className="products__item-price">$119.00</td>
                    <td className="products__item-quantity">
                        <QuantityCounter/>
                    </td>
                    <td className="products__item-total"></td>
                    <td className="products__item-delete">
                        <button className="delete-btn">
                            <img src={deleteIcon} alt="" className="delete-img" />
                        </button>
                        
                    </td>
                </tr>                            
            </table>
        </>
     );
}
 
export default OrderDetails;