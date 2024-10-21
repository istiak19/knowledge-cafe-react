import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title ,cover_photo,reading_time,posted_date,author_name,author_img,hashtags}=blog
    return (
        <div>
            <img className='w-full' src={cover_photo} alt={`Cover photo title ${title}`} />
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
                </div>
            </div>
            <h2 className='text-3xl font-bold'>Title: {title}</h2>
            <p>
                {
                    hashtags.map((has,idx)=><span className='mr-2' key={idx}>{has}</span>)
                }
            </p>
        </div>
    );
};

Blog.PropTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;