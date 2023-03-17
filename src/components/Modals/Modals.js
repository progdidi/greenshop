import thanks from "./images/thanks.svg";

import './modals.scss';

const Modals = () => {
    return ( 
        <>
        <div className="modal">
            <div className="modal__overlay">
                <div className="recieved modal__recieved">
                    <div className="recieved__top">
                        <img src={thanks} alt="" className="recieved__top-img" />
                        <p className="recieved__top-text">Your order has been received</p>
                    </div>

                    <ul className="recieved__info">
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Order Number</p>
                            <p className="recieved__info-data">19586687</p>
                        </li>
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Date</p>
                            <p className="recieved__info-data">15 Sep, 2021</p>
                        </li>
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Total</p>
                            <p className="recieved__info-data">2,699.00</p>
                        </li>
                        <li className="recieved__info-item">
                            <p className="recieved__info-category">Payment Method</p>
                            <p className="recieved__info-data">Cash on delivery</p>
                        </li>
                    </ul>

                    <div className="recieved__details">
                        <h6 className="recieved__details-title">Order Details</h6>
                        <table className="recieved__details-table">
                            <tr className="recieved__details-headers">
                                <th className="recieved__details-header">Products</th>
                                <th className="recieved__details-header">Qty</th>
                                <th className="recieved__details-header">Subtotal</th>
                            </tr>

                            <tr className="recieved__details-item">
                                <td className="recieved__details-data">product</td>
                                <td className="recieved__details-data">2</td>
                                <td className="recieved__details-data">238$</td>
                            </tr>
                        </table>

                        <p className="recieved__details-ship">Shiping $16.00</p>
                        <p className="recieved__details-total">Total $2,699.00</p>
                    </div>

                    <p className="recieved__comment">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>          

                    <button className="recieved__btn">Track your order</button>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Modals;