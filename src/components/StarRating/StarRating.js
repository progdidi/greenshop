import { ReactComponent as Star } from './star.svg';
import {useState} from 'react';

import './starRating.scss';

const StarRating = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return ( 
        <>
        {[...Array(5)].map((star, i) => {

            const ratingValue = i + 1;

            return (<label>
                      <input 
                      type="radio" 
                      name="rating" 
                      value={ratingValue} 
                      onClick={() => setRating(ratingValue)}
                      />

                      <Star 
                      fill={ratingValue <= (hover || rating) ? '#FFAC0C' : '#C4C4C4'} 
                      className="star"
                      onMouseEnter={() => setHover(ratingValue)} 
                      onMouseEnd={() => setHover(null)}
                      />
                    </label>)
        })}
        </>
     );
}
 
export default StarRating;