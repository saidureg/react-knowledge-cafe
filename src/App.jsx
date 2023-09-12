import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  const handleReadingTime = (id, time) => {
    setReadingTime(readingTime + time);
    // remove bookmarks
    const remaining = bookmarks.filter((item) => item.id !== id);
    setBookmarks(remaining);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-2">
      <Header></Header>
      <main className="md:flex my-10">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  );
}

export default App;
