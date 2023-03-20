import './userPage.scss';

const UserPage = () => {
    return ( 
        <>
            <form action="" className="account__form user__form">
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
        </>
     );
}
 
export default UserPage;