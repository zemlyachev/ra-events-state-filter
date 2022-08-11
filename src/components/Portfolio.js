import { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import images from "../img/images";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.filtres = ["All", "Websites", "Flayers", "Business Cards"];
    this.state = {
      selectedFilter: "All",
    };

    this.handleSelectFilter = this.handleSelectFilter.bind(this);
  }

  handleSelectFilter(filter) {
    console.log(filter);
    this.setState({ selectedFilter: filter });
  }

  render() {
    this.filtredProjects = images.filter(
      (item) =>
        this.state.selectedFilter === item.category ||
        this.state.selectedFilter === "All"
    );

    return (
      <div className={"portfolio-container"}>
        <Toolbar
          filters={this.filtres}
          selected={this.state.selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={this.filtredProjects} />
      </div>
    );
  }
}

export default Portfolio;
