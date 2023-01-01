import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const UniversityDetail = (props) => {
    useEffect(()=>{
        props.setPage(2)
    
      },[])
      const navigate = useNavigate()

  return (
  <>
  <Stack>
    <div className='signup_form'>
        <p>Name of University</p>
              <input type="text" />
   </div>
   <div className='signup_form'>
        <p>UCG Registration No.</p>
              <input type="text" />
   </div>
   
   
<button className='btn_blue' onClick={()=>navigate('/signup/signup-form')}>Next</button>
    </Stack>
  
  
  
  </>
  )
};

export default UniversityDetail;
