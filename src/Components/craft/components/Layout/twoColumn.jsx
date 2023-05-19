import React from "react";
import { Container } from "../user/Container";
import { Element } from "@craftjs/core";

export function TwoColumn() {
  return (
    <div className="flex flex-1">
      <Element id="data-two-1" canvas is={Container} padding={5}/>
      <Element id="data-two-2" canvas is={Container} padding={5}/>
    </div>
  );
}
