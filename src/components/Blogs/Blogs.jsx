import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookMark,handleReadingTime }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="sm:w-2/3">
            <h2>Blogs length: {blogs.length}</h2>
            {
                blogs.map(bl => <Blog
                    bl={bl}
                    key={bl.id}
                    handleBookMark={handleBookMark}
                    handleReadingTime={handleReadingTime}
                >
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookMark: PropTypes.func,
    handleReadingTime:PropTypes.func
}

export default Blogs;