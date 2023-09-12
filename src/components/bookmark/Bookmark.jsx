import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className=" mt-4 md:mt-6">
      <h3 className="text-base lg:text-lg font-semibold bg-white rounded-xl mx-2 p-3 md:p-2 lg:p-5 text-[#111111]">
        {title}
      </h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
