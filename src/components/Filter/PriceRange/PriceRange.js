import './priceRange.scss';

const PriceRange = () => {
    return ( 
        <>
            <h6 className="catalog__filter-title">Price Range</h6>
            <form className="price-range__form" action="">   
                                            
                <input type="range" id="price-range" className="price-range__form-input" name="price" min="39" max="1500"/>
                <label for="price" className="price-range__form-label">Price: $39 - $1230</label>
                <input className="price-range__form-btn" type="submit" value="Filter"/>
            </form>
        </>
     );
}
 
export default PriceRange;