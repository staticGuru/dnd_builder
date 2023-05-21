import { Box } from '@material-ui/core'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
     <Box sx={{ display: "flex" }}>
     <Outlet context={["open", "setOpen"]} />
     </Box>
  )
}

export default Layout