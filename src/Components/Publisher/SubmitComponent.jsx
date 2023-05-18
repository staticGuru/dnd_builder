import { useEditor } from '@craftjs/core';
import { Box } from '@material-ui/core'
import React from 'react'

export function SubmitComponent() {
     const { query } = useEditor();
     function submitHandler(){
          let data=query.serialize();
          console.log("submitDataaa",JSON.parse(data));

     }
  return (
     <Box onClick={submitHandler}>Submit</Box>
  )
}