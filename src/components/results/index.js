import React from "react";
import Person from "./person.js";
import Film from "./film.js";
import Planet from "./planet.js";
import Starship from "./starship.js";
import Species from "./species.js";
import "./results.scss";

const Results = props => {
  console.log("props", props);
  return (
    <ul className="results">
      {props.items.map((item, i) => {
        switch (item.type) {
          case "film":
            return <Film key={i} item={item} />;
          case "planet":
            return <Planet key={i} item={item} />;
          case "species":
            return <Species key={i} item={item} />;
          case "starship":
            return <Starship key={i} item={item} />;
          default:
            return <Person key={i} item={item} />;
        }
      })}
    </ul>
  );
};

export default Results;
