import React, { useState } from "react";

import Toolbox from "../components/toolbox";
import Editor from "../components/editor";
import Resizer from "../components/resizer";

import css from "../styles/index.module.scss";

const Index = () => {
  return (
    <div className={css.page}>
      <Resizer direction="horizontal">
        <Toolbox />
        <Editor />
      </Resizer>
    </div>
  );
};

export default Index;
