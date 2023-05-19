import React from "react";
import { Container } from "../user/Container";
import { Element } from "@craftjs/core";

export function ThreeColumn() {
  return (
    <div className="flex flex-1">
      <Element id="data-three-1" canvas is={Container} padding={5}/>
      <Element id="data-three-2" canvas is={Container} padding={5} />
      <Element id="data-three-3" canvas is={Container} padding={5} />
    </div>
  );
}
