import { Button, FormControl, MenuItem, OutlinedInput, Select, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Detailorganization = (props) => {
    const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    useEffect(()=>{
        props.setPage(2)
    
      },[])
      const navigate = useNavigate()

  return (<>
    <Stack spacing={2}>
      <div>
        <p style={{textAlign:"left",marginBottom:"5px"}}>NAME OF THE INSTITUTE</p>
      <OutlinedInput sx={{background:" #EFF5FF"}}  fullWidth />

      </div>
      <div>

    <p style={{textAlign:"left",marginBottom:"5px"}}>NAME OF THE INSTITUTE</p>
    <FormControl sx={{mt:2,  minWidth: 120  ,background:" #EFF5FF"}} fullWidth>

<Select
  value={age}
  onChange={handleChange}
  displayEmpty
  sx={{textAlign:"left"}}
>
  {/* <MenuItem disabled={true} value="">
    Select Registration Type
  </MenuItem> */}
  <MenuItem value={10}>Company Incorporation Number</MenuItem>
  <MenuItem value={20}>PAN Number</MenuItem>
  <MenuItem value={30}>Other Registeration Number</MenuItem>
  
</Select> 

</FormControl>

      </div>
   
      <div>
        <p style={{textAlign:"left",marginBottom:"5px"}}>REGISTRATION NO</p>
      <OutlinedInput sx={{background:" #EFF5FF"}}  fullWidth />

      </div>
    
    </Stack>
       <div className='Blue_button'> <button onClick={()=>navigate('/signup/signup-form')}>Next</button> </div> 
    </>
  )
}

export default Detailorganization