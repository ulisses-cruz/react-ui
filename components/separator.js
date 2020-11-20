import React from "react";
import PropTypes from "prop-types";

import css from "../styles/separator.module.scss";

const Separator = ({ pos, onDrag, direction }) => {
  const style = {
    width: direction === "horizontal" ? "100%" : 4,
    height: direction === "horizontal" ? 4 : "100%",
    [direction === "horizontal" ? "left" : "top"]: 0,
  };

  const handleDrag = (e) => {
    if (direction === "vertical") e.clientX !== 0 && onDrag(e.clientX);
    else e.clientY !== 0 && onDrag(e.clientY);
  };

  return (
    <div
      onDrag={handleDrag}
      className={css.separator}
      style={{
        ...style,
        [direction === "horizontal" ? "top" : "left"]: pos,
        cursor: direction === "horizontal" ? "row-resize" : "col-resize",
      }}
    ></div>
  );
};

Separator.propTypes = {
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  onDrag: PropTypes.func.isRequired,
};

Separator.defaultProps = {
  direction: "horizontal",
};

export default Separator;
