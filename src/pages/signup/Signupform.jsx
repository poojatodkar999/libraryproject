import { CheckBox } from '@mui/icons-material'
import { Checkbox, OutlinedInput } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signupform = (props) => {
    useEffect(()=>{
        props.setPage(3)
    
      },[])
      const navgator=useNavigate();
    
  return (
    <>

    <Stack>
    <div className='signup_form'>
        <p>First Name</p>
              <input type="text" />
   </div>
   <div className='signup_form'>
        <p>Last Name</p>
              <input type="text" />
   </div>
   <div className='signup_form'>
        <p>Login Email ID</p>
              <input type="text" />
   </div>
   <div className='signup_form'>
        <p>Designation</p>
              <input type="text" />
   </div>
   <div className='signup_form'>
        <p>Mobile Number</p>
              <input type="text" />
   </div>
   <div style={{display:"flex",alignItems:"flex-start" ,textAlign:"center"}} >    <input style={{marginTop:"3px"}} type="checkbox" name="" id="" />
<p style={{fontSize:"14px"}}>By clicking here, you agree to the U-Smart’s <span style={{color:"#008BCD"}}>User Agreements, Policies, and Cookie Policy</span></p></div>
<button className='btn_blue' onClick={()=>navgator('/dashboard')}>Sign Up</button>
    </Stack>
    
    
    </>
  )
}

export default Signupform