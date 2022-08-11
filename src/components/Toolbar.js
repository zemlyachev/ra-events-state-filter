import PropTypes from "prop-types";

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <ul className="toolbar">
      {filters.map((filter) => {
        const className =
          filter === selected ? "toolbar-item selected" : "toolbar-item";
        return (
          <li className={className} onClick={() => onSelectFilter(filter)}>
            {" "}
            {filter}{" "}
          </li>
        );
      })}
    </ul>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
