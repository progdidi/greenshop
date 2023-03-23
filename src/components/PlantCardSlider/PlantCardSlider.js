//example
import shop from "./images/shop.png";
import shop2 from "./images/shop2.png";
import shop3 from "./images/shop3.png";
import shop4 from "./images/shop4.png";
import shop5 from "./images/shop5.png";

import './plantCardSlider.scss';

const PlantCardSlider = () => {
    
    // const head = document.querySelector('.product__media'),
    //       tab = document.querySelectorAll('.product__icon'),
    //       content = document.querySelectorAll('.product__big');

    // function hideTabContent() {
    // content.forEach(item => {
    //     item.style.display = "none";
    // });

    // tab.forEach(item => {
    //     item.classList.remove('.product__icon-big');
    // })
    // }
    
    // function showTabContent(i = 0) {
    //     content[i].style.display = "block";
    //     tab[i].classList.add('.product__icon-big');
    // }
    
    // hideTabContent();
    // showTabContent();
    
    
    // head.addEventListener('click', (e) => {
    //     const target = e.target;

    //     tab.forEach((item, i) => {
    //         if (target == item || target.parentNode == item) {
    //             hideTabContent();
    //             showTabContent(i);
    //         }
    //     });

    //     // if(target.classList.contains(tabSelector.replace(/\./, '')) || 
    //     //     target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            
    //     // }
    // });



    return ( 
        <>
            <div className="product__media">
                <div className="product__icons">
                    <div className="product__icon"><img src={shop2} alt="" className="product__icon-img"/></div>
                    <div className="product__icon"><img src={shop3} alt="" className="product__icon-img"/></div>
                    <div className="product__icon"><img src={shop4} alt="" className="product__icon-img"/></div>
                    <div className="product__icon"><img src={shop5} alt="" className="product__icon-img"/></div>
                </div>
                <div className="product__big">
                    <img src={shop} alt="" className="product__big-img" />
                </div>
            </div>
        </>
     );
}
 
export default PlantCardSlider;