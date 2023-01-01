import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link, Navigate ,useNavigate} from 'react-router-dom';



const Organization = (props) => {
    const [org, setOrg] = useState("");
  const handleChange = (event) => {
    setOrg(event.target.value);
  };
  useEffect(()=>{
    props.setPage(1)

  },[])

  const navgator=useNavigate();
  const navigatefunc=()=>{
    navgator(org=='Institude'?'org-detail':'uni-detail')

  }

  return (
    <>
      <FormControl  sx={{mt:2,  minWidth: 120  ,background:" #EFF5FF"}}>
        <Select
          value={org}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem disabled={true} value="">
            Select Organization Type
          </MenuItem>
          <MenuItem value={"university"}>University</MenuItem>
          <MenuItem value={"Institude"}>Institude</MenuItem>
          
        </Select> 
       
      </FormControl>
      <form onSubmit={(e)=>e.preventDefault()}>

      <div style={{marginTop:"50px"}}><button onClick={navigatefunc} >Next</button></div>

      </form>
    </>
  )
}

export default Organization