import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import images from "../img/images";

function Portfolio() {
  const filtres = ["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState("All");

  const onSelectFilter = (filter) => {
    setSelected(() => filter);
    console.log(filter);
  };

  return (
    <div className="App">
      <Toolbar
        filters={filtres}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList selected={selected} projects={images} />
    </div>
  );
}

export default Portfolio;
