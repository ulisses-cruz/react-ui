import React from "react";
import PropTypes from "prop-types";

import Separator from "../components/separator";

import css from "../styles/resizer.module.scss";

const Resizer = ({ children, direction }) => {
  const [pos, setPos] = React.useState(450);
  const [First, Second] = children;

  return (
    <div
      className={css.resizer}
      style={{ flexDirection: direction === "horizontal" ? "row" : "column" }}
    >
      <div
        className={css.resizerController}
        style={{ [direction === "horizontal" ? "width" : "height"]: pos }}
      >
        {First}
      </div>
      <Separator
        pos={pos}
        onDrag={setPos}
        direction={direction === "horizontal" ? "vertical" : "horizontal"}
      />
      <div className={css.resizerControlled}>{Second}</div>
    </div>
  );
};

Resizer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
};

Resizer.defaultProps = {
  direction: "horizontal",
};

export default Resizer;
