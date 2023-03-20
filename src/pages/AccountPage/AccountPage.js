import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AccountMenu from '../../components/accountMenu/AccountMenu';

import './accountPage.scss';

import UserPage from './UserPage/UserPage';
import AddressPage from "./AddressPage/AddressPage";
import DownloadsPage from "./DownloadsPage/DownloadsPage";
import OrdersPage from "./OrdersPage/OrdersPage";
import ReportsPage from "./ReportsPage/ReportsPage";
import SupportPage from "./SupportPage/SupportPage";
import WishlistPage from "./WishlistPage/WishlistPage";


const AccountPage = () => {
    return ( 
        <>
        <section className="account">
            <div className="container">
                <div className="account__inner">

                        <AccountMenu/>       
                    
                        <div className="account__content">
                            <Routes>
                                    <Route path="user" element={<UserPage/>} />
                                    <Route path="address" element={<AddressPage/>} />
                                    <Route path="orders" element={<OrdersPage/>} />
                                    <Route path="wishlist" element={<WishlistPage/>} />
                                    <Route path="support" element={<SupportPage/>} />
                                    <Route path="reports" element={<ReportsPage/>} />
                                    <Route path="downloads" element={<DownloadsPage/>} />
                            </Routes>
                        

                        
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountPage;