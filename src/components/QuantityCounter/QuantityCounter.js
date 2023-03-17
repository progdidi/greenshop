import './quantityCounter.scss';

const QuantityCounter = () => {
    return ( 
        <>
        <div className="quantity">
            <button className="quantity__button minus">-</button>
            <p className="quantity__number">{counter}</p>
            <button className="quantity__button plus">+</button>
        </div>
        </>
     );
}
 
export default QuantityCounter;