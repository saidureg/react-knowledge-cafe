import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-[#1111110D] rounded-lg p-3 md:p-1 md:ml-2 lg:ml-6 lg:p-6">
      <h3 className="text-xl lg:text-2xl font-bold p-6 md:p-2 md:mt-4 text-[#111111]">
        Bookmarked Blogs: {bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
