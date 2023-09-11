import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex justify-between items-center mt-8 mb-5">
        <div className="flex gap-6 items-center">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3>{author}</h3>
            <p>{posted_date} </p>
          </div>
        </div>
        <div>
          <p>
            <span>{reading_time} min read</span>
            <button
              onClick={handleAddToBookmark}
              className="ml-3 text-2xl text-red-600"
            >
              <FaBookmark></FaBookmark>
            </button>
          </p>
        </div>
      </div>
      <h4 className="text-4xl font-bold text-[#111111]">{title} </h4>
      <p className="my-5">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="pl-4">
            <a href="">#{hash} </a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
};

export default Blog;
