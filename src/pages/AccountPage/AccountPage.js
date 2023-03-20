import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AccountMenu from '../../components/accountMenu/AccountMenu';

import './accountPage.scss';

import UserPage from './UserPage/UserPage';
import AddressPage from "./AddressPage/AddressPage";


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
                                    <Route path="orders" element={<UserPage/>} />
                                    <Route path="wishlist" element={<UserPage/>} />
                                    <Route path="support" element={<UserPage/>} />
                                    <Route path="reports" element={<UserPage/>} />
                                    <Route path="downloads" element={<UserPage/>} />
                            </Routes>
                        

                        
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountPage;