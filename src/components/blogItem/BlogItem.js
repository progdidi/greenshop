import './blogItem.scss';

const BlogItem = ({date, img, title, descr, minutes, link}) => {
    return ( 
        <>
        <div className="post">
            <img src={img} alt="img" className="post__img" />
            <div className="post__info">
                <div className="post__about">
                    <a href="" className="post__about-date">{date}</a> |
                    <p className="post__about-time">Read in {minutes} minutes</p>
                </div>
                <h4 className="post__title">{title}</h4>
                <p className="post__descr">{descr}</p>
                <a href={link} className="post__link">Read More</a>
            </div>
            
        </div>

        </>
     );
}
 
export default BlogItem;