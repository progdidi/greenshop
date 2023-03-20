import './addressPage.scss';

const AddressPage = () => {
    return ( 
        <>
        <div className="address">
            <div className="address__billing">
                <form action="" className="user__form">
                    <h5 className="user__form-title">Billing Address</h5>
                    <p className="user__form-comment">The following addresses will be used on the checkout page by default.</p>
                    <div className="user__form-address">                                
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
                            <label htmlFor="" className="user__form-label">Country / Region
                            </label>
                            <input type="text" className="user__form-input" />
                        </div>
                        <div className="user__form-item">
                            <label htmlFor="" className="user__form-label">Town / City
                            </label>
                            <input type="text" className="user__form-input" />
                        </div>
                        <div className="user__form-item">
                            <label htmlFor="" className="user__form-label">Street Address
                            </label>
                            <input type="text" className="user__form-input" />
                            <input type="text" className="user__form-input" />
                        </div>
                        <div className="user__form-item">
                            <label htmlFor="" className="user__form-label">State
                            </label>
                            <input type="text" className="user__form-input" />
                        </div>
                        <div className="user__form-item">
                            <label htmlFor="" className="user__form-label">Zip
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
                    </div>

                    <div className="user__form-btn address-form__btn">Save Change</div>
                                        
                </form>
            </div>

            <div className="address__shipping">
                <h6 className="address__shipping-title user__form-title">Shipping Address</h6>
                <p className="user__form-comment">You have not set up this type of address yet.</p>
                <label htmlFor="" className="address__shipping-check">
                    <input type="checkbox" className="address__shipping-check" /> Same as billing address
                </label>

                <button className="address__shipping-btn">Add</button>
                
            </div>
            
        </div>
        

        </>
     );
}
 
export default AddressPage;