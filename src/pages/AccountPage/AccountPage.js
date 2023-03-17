import user from './images/user.svg';



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
                                </a>
                            </li>
                            <li className="account__menu-item">
                                <a href="" className="account__menu-link">
                                    <img src={user} alt="" className="account__menu-img" />
                                </a>
                            </li>
                            <li className="account__menu-item">
                                <a href="" className="account__menu-link">
                                    <img src={user} alt="" className="account__menu-img" />
                                </a>
                            </li>
                            <li className="account__menu-item">
                                <a href="" className="account__menu-link">
                                    <img src={user} alt="" className="account__menu-img" />
                                </a>
                            </li>
                            <li className="account__menu-item">
                                <a href="" className="account__menu-link">
                                    <img src={user} alt="" className="account__menu-img" />
                                </a>
                            </li>
                            <li className="account__menu-item">
                                <a href="" className="account__menu-link">
                                    <img src={user} alt="" className="account__menu-img" />
                                </a>
                            </li>
                            <li className="account__menu-item">
                                <a href="" className="account__menu-link">
                                    <img src={user} alt="" className="account__menu-img" />
                                </a>
                            </li>
                        </ul>
                        <button className="account__menu-btn">Loguot</button>
                    </div>
                    <div className="account__content"></div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountPage;