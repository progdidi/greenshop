import AccountMenu from '../../components/accountMenu/AccountMenu';
import UserPage from './UserPage/UserPage';

import './accountPage.scss';


const AccountPage = () => {
    return ( 
        <>
        <section className="account">
            <div className="container">
                <div className="account__inner">

                    <AccountMenu/>                   
                    
                    <div className="account__content">
                        <UserPage/>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default AccountPage;