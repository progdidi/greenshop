import { NavLink } from 'react-router-dom';

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
                        <NavLink to="/account/user" className="account__menu-link">
                            <img src={user} alt="" className="account__menu-img" />
                            Account Details
                        </NavLink>
                    </li>
                    <li className="account__menu-item">
                        <NavLink to="/account/address" className="account__menu-link">
                            <img src={location} alt="" className="account__menu-img" />
                            Address
                        </NavLink>
                    </li>
                    <li className="account__menu-item">
                        <NavLink to="/account/orders" className="account__menu-link">
                            <img src={orders} alt="" className="account__menu-img" />
                            Orders
                        </NavLink>
                    </li>
                    <li className="account__menu-item">
                        <NavLink to="/account/wishlist" className="account__menu-link">
                            <img src={wishlist} alt="" className="account__menu-img" />
                            Wishlist
                        </NavLink>
                    </li>
                    <li className="account__menu-item">
                        <NavLink to="/account/reports" className="account__menu-link">
                            <img src={reports} alt="" className="account__menu-img" />
                            Reports
                        </NavLink>
                    </li>
                    <li className="account__menu-item">
                        <NavLink to="/account/downloads" className="account__menu-link">
                            <img src={downloads} alt="" className="account__menu-img" />
                            Downloads
                        </NavLink>
                    </li>
                    <li className="account__menu-item">
                        <NavLink to="/account/support" className="account__menu-link">
                            <img src={support} alt="" className="account__menu-img" />
                            Support
                        </NavLink>
                    </li>
                </ul>
                <button className="account__menu-btn">Loguot</button>
            </div>
        </>
     );
}
 
export default AccountMenu;