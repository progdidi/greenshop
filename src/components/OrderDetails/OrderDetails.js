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
                    <h6 className="order__list-title products">Products</h6>
                    <h6 className="order__list-title price">Price</h6>
                    <h6 className="order__list-title quantity">Quantity</h6>
                    <h6 className="order__list-title total ">Total</h6>
                    <h6 className="order__list-title delete"></h6>
                </div>
                {items}
            </ul>
        </>
     );
}
 
export default OrderDetails;