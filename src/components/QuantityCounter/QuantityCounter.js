import {useState} from 'react';

import './quantityCounter.scss';


const QuantityCounter = () => {

    const [count, setCount] = useState(1);

    const minus = () => {
        setCount(count - 1);
        if (count <=0) {
            document.querySelector('.counter__button-min').classList.add('disabled');
        } 
    };

    const plus = () => {
        setCount(count + 1);
        if (count >= 0) {
            document.querySelector('.counter__button-min').classList.remove('disabled');
        }
    };

    return ( 
        <>
        <div className="counter">
            <button className="counter__button counter__button-min" onClick={minus}>-</button>

            <div className="counter__number">
                <input type="text" className="counter__number-input" disabled value={count <=0 ? 0 : count}/>
            </div>

            <button className="counter__button counter__button-plus" onClick={plus}>+</button>
        </div>
        </>
     );
}
 
export default QuantityCounter;