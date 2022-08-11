import PropTypes from "prop-types";

function ProjectList({ projects }) {
  return (
    <div className="projectlist">
      {projects.map((item) => (
        <img className="projectlist-item" src={item.img} alt={item.category} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;
