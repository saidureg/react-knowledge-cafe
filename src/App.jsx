import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header></Header>
      <main className="md:flex ">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </div>
  );
}

export default App;
