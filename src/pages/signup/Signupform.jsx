import { CheckBox } from '@mui/icons-material'
import { Checkbox, OutlinedInput } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

const Signupform = (props) => {
   
      const navgator=useNavigate();
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = (data) => {
        navgator('/')
          console.log(data);
      }
  return (
    <>
<form onSubmit={handleSubmit(onSubmit)}>
  
    <Stack>
    <div className='signup_form'>
        <p>First Name</p>
              <input type="text" {...register("firstName", { required: true, maxLength: 10 })} />
              {errors.firstName && <p className='error_red'>Please check the First Name</p>}

   </div>
   <div className='signup_form'>
        <p>Last Name</p>
              <input type="text" {...register("lastName", { required: true, maxLength: 10 })} />
              {errors.lastName && <p className='error_red'>Please check the last Name</p>}
   </div>
   <div className='signup_form'>
        <p>Login Email ID</p>
              <input type="text"  {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
                             {errors.email && <p className='error_red'>Please check the Email</p>}
   </div>
   
   <div className='signup_form'>
        <p>Mobile Number</p>
              <input type="text" {...register("Mobile number", {required: true, pattern:/^[0-9+-]+$/, minLength: 6, maxLength: 12})}  />
              {errors.email && <p className='error_red'>Please check the mobile number</p>}
   </div>
   <div className='signup_form'>
        <p>Password</p>
              <input type="password" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })} />
                                        {errors.password && <p className='error_red'>Please check the Password</p>}

   </div>
   <div style={{display:"flex",alignItems:"flex-start" ,textAlign:"center"}} >    <input style={{marginTop:"3px"}} type="checkbox" name="" id="" />
<p style={{fontSize:"14px"}}>By clicking here, you agree to the U-Smart’s <span style={{color:"#008BCD"}}>User Agreements, Policies, and Cookie Policy</span></p></div>
<button className='btn_blue'>Sign Up</button>
    </Stack>
    </form>
    
    
    </>
  )
}

export default Signupform