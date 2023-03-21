import './advanceItem.scss';

const AdvanceItem = ({title, img, descr, link}) => {
    return ( 
        <>
        <div className="advance__item">
            <img src={img} alt="" className="advance__item-img" />
            <div className="advance__item-about">
                <h4 className="advance__item-title">{title}</h4>
                <p className="advance__item-descr">{descr}</p>
                <a href={link} className="advance__item-link">Find More</a>
            </div>
        </div>
        </>
     );
}
 
export default AdvanceItem;