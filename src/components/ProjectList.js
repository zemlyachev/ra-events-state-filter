import PropTypes from "prop-types";
import { nanoid } from "nanoid";

function ProjectList({ selected, projects }) {
  let filtredProjects = projects.filter(
    (item) => item.category === selected || selected === "All"
  );

  return (
    <div className="projectlist">
      {filtredProjects.map((item) => (
        <img
          className="projectlist-item"
          src={item.img}
          alt={item.category}
          key={nanoid()}
        />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  selected: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;
