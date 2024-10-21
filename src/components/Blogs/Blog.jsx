import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({bl,handleBookMark,handleReadingTime}) => {
    const {title ,cover_photo,reading_time,posted_date,author_name,author_img,hashtags}=bl
    return (
        <div>
            <img className='w-full mb-5 rounded-lg' src={cover_photo} alt={`Cover photo title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-16' src={author_img} alt={`Author Photo`} />
                    <div>
                        <h3 className='text-2xl font-bold'>{author_name}</h3>
                        <p className='font-semibold text-gray-400'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} mint read</span>
                    <button className='ml-1 text-red-600' onClick={()=>handleBookMark(bl)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>Title: {title}</h2>
            <p>
                {
                    hashtags.map((has,idx)=><span className='mr-2' key={idx}>{has}</span>)
                }
            </p>
            <button onClick={()=>handleReadingTime(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes={
    bl: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blog;