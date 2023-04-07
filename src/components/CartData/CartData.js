import './cartData.scss';

const CartData = () => {
    return ( 
        <>
            <form action="" className="coupon-form">
                <label htmlFor="" className="coupon-form__label">Coupon Apply</label>
                <input type="text" className="coupon-form__input" placeholder="Enter coupon code here..."/>
                <button type="submit" className="coupon-form__btn">Apply</button>
            </form>

            <ul className="cart__list">
                <li className="cart__list-item">
                    <p className="cart__list-category">Subtotal</p>
                    <p className="cart__list-sum">$2,683.00</p>
                </li>
                <li className="cart__list-item">
                    <p className="cart__list-category">Coupon Discount</p>
                    <p className="cart__list-sum">$2,683.00</p>
                </li>
                <li className="cart__list-item">
                    <p className="cart__list-category">Shiping</p>
                    <p className="cart__list-sum">$2,683.00</p>
                </li>
                <a href="" className="cart__list-link">View shipping charge</a>
            </ul>

            <div className="cart__total">Total
                <p className="cart__total-sum">$2,699.00</p>
            </div>
        </>
     );
}
 
export default CartData;