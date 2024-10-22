import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  const handleBookMark = (blog) => {
    const newBookMark = [...bookmarks, blog]
    setBookMarks(newBookMark)
  }

  const handleReadingTime = (time, id) => {
    const newTime = (readingTime + time)
    setReadingTime(newTime)
    const remainingBookMark = bookmarks.filter(book => book.id !== id)
    setBookMarks(remainingBookMark)
  }
  return (
    <>
      <Header></Header>
      <div className='sm:flex w-11/12 mx-auto'>
        <Blogs handleBookMark={handleBookMark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </>
  )
}

export default App
