import './relatedSlider.scss';
import Slider from 'react-slick';
import CatalogItem from '../catalogItem/CatalogItem';

const RelatedSlider = (arrPlant) => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        dotsClass: 'slick-dots-shop',
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };

    return ( 
        <>
            <Slider {...settings}>
                
                    {{arrPlant}.map((arr) => {
                        return (
                            <div className="related__products-item">
                                <CatalogItem
                                    key={arr.id}
                                    title={arr.title} 
                                    price={arr.price}
                                    descr={arr.descr}
                                    img={arr.img} 
                                    link={arr.link}
                                />
                            </div>
                            
                        )                            
                    })}
            </Slider>
        </>
     );
}
 
export default RelatedSlider;
