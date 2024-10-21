import PropTypes from 'prop-types';
const BookMark = ({book}) => {
    return (
        <div className='bg-slate-300 rounded-lg shadow-md mb-2 p-3'>
            <h3 className='text-xl font-semibold'>{book.title}</h3>
        </div>
    );
};

BookMark.propTypes={
    book:PropTypes.object.isRequired
}

export default BookMark;