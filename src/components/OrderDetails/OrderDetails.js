import './orderDetails.scss';
import OrderDetailsItem from '../OrderDetailsItem/OrderDetailsItem';
import { orders } from '../../helpers/orders/orders';

const OrderDetails = () => {

    const items = orders.map(order => {
        const {id, ...itemProps} = order;
        return (
            <OrderDetailsItem 
                key={id}
                {...itemProps}
            />
        )
    })

    return ( 
        <>
            <ul className="order__list">
                <div className="order__list-header">
                    <h6 className="order__list-title">Products</h6>
                    <h6 className="order__list-title">Price</h6>
                    <h6 className="order__list-title">Quantity</h6>
                    <h6 className="order__list-title">Total</h6>
                </div>
                {items}
            </ul>
        </>
     );
}
 
export default OrderDetails;