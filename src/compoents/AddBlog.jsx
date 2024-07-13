import { Button, TextField } from "@mui/material"
import React from 'react'


const AddBlog = () => {
  return (
    <div  style={{textAlign:'center'}} >
     
      <TextField variant='outlined' label='blog name'></TextField><br /><br />
      <TextField variant='outlined' label='Description'></TextField><br /><br />
      <TextField variant='outlined' label='Auther name'></TextField><br/><br></br>
      <Button variant='contained' color="success">Submit</Button>
  
     </div>
  )
}

export default AddBlog