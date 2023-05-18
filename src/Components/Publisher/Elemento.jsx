import { useEditor } from "@craftjs/core";
import React, { useEffect } from "react";

export function Elemento({ data }) {
  const { actions,isEnabled } = useEditor((state)=>({
    isEnabled: state.options.enabled,
  }));
  useEffect(() => {
    if (data){ 
      actions.deserialize(data?.json)
      actions.setOptions((options) => (options.enabled = false))
    };
  }, [data]);
  return;
}
