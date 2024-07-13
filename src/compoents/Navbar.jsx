import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<Box>
        <AppBar>
            <Toolbar>
                <Typography variant='h6' sx={{ flexGrow: 1 }}>BlogApp</Typography>&nbsp;
                <Button variant='contained' color='error'><Link to={'/h'} style={{textDecoration: "none", color:"white"}}>Home</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to={'/b'} style={{textDecoration: "none", color:"white"}}>AddBlog</Link></Button>
            </Toolbar>
        </AppBar>
</Box>
      <br /><br /><br />

    </div>
  )
}

export default Navbar