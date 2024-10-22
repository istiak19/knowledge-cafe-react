import PropTypes from 'prop-types';
import BookMark from './BookMark';
const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className="sm:w-1/3">
            <h2>Read Time: {readingTime}</h2>
            <h2>Bookmark: {bookmarks.length}</h2>
            {
                bookmarks.map((book,idx)=><BookMark key={idx} book={book}></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default BookMarks;