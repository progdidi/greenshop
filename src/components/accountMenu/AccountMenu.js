import user from './images/user.svg';
import downloads from './images/downloads.svg';
import location from './images/location.svg';
import orders from './images/orders.svg';
import reports from './images/reports.svg';
import wishlist from './images/wishlist.svg';
import support from './images/support.svg';

import './accountMenu.scss';

const AccountMenu = () => {
    return ( 
        <>
            <div className="account__menu">
                <h6 className="account__menu-title">My Account</h6>
                <ul className="account__menu-list">
                    <li className="account__menu-item">
                        <a href="" className="account__menu-link">
                            <img src={user} alt="" className="account__menu-img" />
                            Account Details
                        </a>
                    </li>
                    <li className="account__menu-item">
                        <a href="" className="account__menu-link">
                            <img src={location} alt="" className="account__menu-img" />
                            Address
                        </a>
                    </li>
                    <li className="account__menu-item">
                        <a href="" className="account__menu-link">
                            <img src={orders} alt="" className="account__menu-img" />
                            Orders
                        </a>
                    </li>
                    <li className="account__menu-item">
                        <a href="" className="account__menu-link">
                            <img src={wishlist} alt="" className="account__menu-img" />
                            Wishlist
                        </a>
                    </li>
                    <li className="account__menu-item">
                        <a href="" className="account__menu-link">
                            <img src={reports} alt="" className="account__menu-img" />
                            Reports
                        </a>
                    </li>
                    <li className="account__menu-item">
                        <a href="" className="account__menu-link">
                            <img src={downloads} alt="" className="account__menu-img" />
                            Downloads
                        </a>
                    </li>
                    <li className="account__menu-item">
                        <a href="" className="account__menu-link">
                            <img src={support} alt="" className="account__menu-img" />
                            Support
                        </a>
                    </li>
                </ul>
                <button className="account__menu-btn">Loguot</button>
            </div>
        </>
     );
}
 
export default AccountMenu;