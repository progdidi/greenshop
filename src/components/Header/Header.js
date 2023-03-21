import { NavLink } from 'react-router-dom';


import logo from './logo.svg';
import search from './search.svg';
import basket from './basket.svg';

import './header.scss';

const Header = () => {
    return ( 
        <>
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="logo" className="logo-img" />
                    </NavLink>

                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                <NavLink to="/" className="menu__list-link">Home</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/shop" className="menu__list-link">Shop</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/plantcare" className="menu__list-link">Plant Care</NavLink>
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/blogs" className="menu__list-link">Blogs</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__buttons">
                        <form action="" className="search-bar">
                            <input type="text" className="search-bar__input" />
                            <button className="search-bar__btn">
                                <img src={search} alt="search" className="search-bar__btn-img" />
                            </button>
                        </form>

                        <div className="basket">
                            <NavLink to="/shop/shoppingcart" className="basket__btn">
                                <img src={basket} alt="basket" className="basket__btn-img" />
                            </NavLink>
                            <p className="basket__number">6</p>
                        </div>

                        <button className="login-btn">Login</button>
                    </div>
                </div>
                
            </div>

        </header>
        </>
     );
}
 
export default Header;