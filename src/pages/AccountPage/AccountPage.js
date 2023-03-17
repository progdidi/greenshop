import user from './images/user.svg';
import downloads from './images/downloads.svg';
import location from './images/location.svg';
import orders from './images/orders.svg';
import reports from './images/reports.svg';
import wishlist from './images/wishlist.svg';
import support from './images/support.svg';



import './accountPage.scss';


const AccountPage = () => {
    return ( 
        <>
        <section className="account">
            <div className="container">
                <div className="account__inner">
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
                    <div className="account__content">
                        <form action="" className="user__form">
                            <h5 className="user__form-title">Personal Information</h5>
                            <div className="user__form-personal">                                
                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">First Name
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>
                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">Last Name
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>
                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">Email address
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>
                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">Phone Number
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>
                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">Username
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>
                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">Photo
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>
                            </div>

                            <h5 className="user__form-title">Password change</h5>
                            <div className="user__form-password">                                
                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">Current password
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>

                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">New password
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>

                                <div className="user__form-item">
                                    <label htmlFor="" className="user__form-label">Confirm new password
                                    </label>
                                    <input type="text" className="user__form-input" />
                                </div>

                            </div>

                            <div className="user__form-btn">Save Change</div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountPage;