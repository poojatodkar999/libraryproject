import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const SignIn = (props) => {
    // const [toggle, setToggle] = useState(false);
    const toggle= props.toggle;
const setToggle= props.setToggle;
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      navigate( toggle?'admin':'dashboard')
        console.log(data);
    }
  return (
    <>
     <p className="heading">Sign In</p>
        
       <div>
       
          <div className="main_toggle">
            <div className="toggler" style={{left:toggle?'0%':'50%'}}></div>
            <div className={ !toggle?"receiver active":"receiver" } onClick={()=>setToggle(true)}>
              {" "}
              <span>
                {" "}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  //   fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 8C15 9.06087 14.5786 10.0783 13.8284 10.8284C13.0783 11.5786 12.0609 12 11 12C9.93913 12 8.92172 11.5786 8.17157 10.8284C7.42143 10.0783 7 9.06087 7 8C7 6.93913 7.42143 5.92172 8.17157 5.17157C8.92172 4.42143 9.93913 4 11 4C12.0609 4 13.0783 4.42143 13.8284 5.17157C14.5786 5.92172 15 6.93913 15 8ZM13 8C13 8.53043 12.7893 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 11 10C10.4696 10 9.96086 9.78929 9.58579 9.41421C9.21071 9.03914 9 8.53043 9 8C9 7.46957 9.21071 6.96086 9.58579 6.58579C9.96086 6.21071 10.4696 6 11 6C11.5304 6 12.0391 6.21071 12.4142 6.58579C12.7893 6.96086 13 7.46957 13 8Z"
                    // fill="#008BCD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM2 11C2 13.09 2.713 15.014 3.908 16.542C4.74723 15.4399 5.8299 14.5467 7.07143 13.9323C8.31297 13.3179 9.67974 12.9988 11.065 13C12.4323 12.9987 13.7819 13.3095 15.0109 13.9088C16.2399 14.508 17.316 15.3799 18.157 16.458C19.0234 15.3216 19.6068 13.9952 19.8589 12.5886C20.111 11.182 20.0244 9.73553 19.6065 8.36898C19.1886 7.00243 18.4512 5.75505 17.4555 4.73004C16.4598 3.70503 15.2343 2.93186 13.8804 2.47451C12.5265 2.01716 11.0832 1.88877 9.66986 2.09997C8.25652 2.31117 6.91379 2.85589 5.75277 3.68905C4.59175 4.52222 3.64581 5.61987 2.99323 6.8912C2.34065 8.16252 2.00018 9.57097 2 11ZM11 20C8.93395 20.0031 6.93027 19.2923 5.328 17.988C5.97293 17.0647 6.83134 16.3109 7.83019 15.7907C8.82905 15.2705 9.93879 14.9992 11.065 15C12.1772 14.9991 13.2735 15.2636 14.2629 15.7714C15.2524 16.2793 16.1064 17.0159 16.754 17.92C15.1393 19.2667 13.1026 20.0029 11 20Z"
                    // fill="#008BCD"
                  />
                </svg>
              </span>{" "}
              <span>Admin</span>
            </div>
            <div className={ toggle?"issuer active":"issuer" } onClick={()=>setToggle(false)}>
              {" "}
              <span>
                {" "}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                //   fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 8.42024C24.0005 8.09442 23.9147 7.77428 23.7514 7.49236C23.588 7.21045 23.3529 6.97682 23.07 6.81524L12.96 0.815239C12.6686 0.645241 12.3373 0.555664 12 0.555664C11.6627 0.555664 11.3314 0.645241 11.04 0.815239L0.914994 6.81524C0.635202 6.98126 0.403422 7.21722 0.242436 7.49994C0.081449 7.78266 -0.00320435 8.1024 -0.00320435 8.42774C-0.00320435 8.75308 0.081449 9.07282 0.242436 9.35554C0.403422 9.63826 0.635202 9.87422 0.914994 10.0402L3.79499 11.7202V15.9352C3.79673 16.2647 3.88319 16.5881 4.04606 16.8744C4.20893 17.1608 4.44274 17.4004 4.72499 17.5702L11.1 21.2452C11.3846 21.4028 11.7046 21.4855 12.03 21.4855C12.3553 21.4855 12.6754 21.4028 12.96 21.2452L19.335 17.5702C19.6173 17.4004 19.8511 17.1608 20.0139 16.8744C20.1768 16.5881 20.2633 16.2647 20.265 15.9352V11.6752L22.125 10.5802V14.6602H24V8.42024ZM18.405 15.9202L12 19.6102L5.66999 15.9352V12.8302L11.04 16.0252C11.3324 16.1923 11.6633 16.2802 12 16.2802C12.3367 16.2802 12.6676 16.1923 12.96 16.0252L18.39 12.7852L18.405 15.9202ZM12 14.4052L1.87499 8.40524L12 2.39024L22.125 8.39024L12 14.4052Z"
                    // fill="#EFF5FF"
                  />
                </svg>
              </span>{" "}
              <span>User</span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>EMAIL ID</p>
              <input type="text" {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} />
                            {errors.email && <p className='error_red'>Please check the Email</p>}
            </div>
            <div>
              <p>
                <span>PASSWORD</span>
              </p>
              <input type="password" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })} />
                         {errors.password && <p className='error_red'>Please check the Password</p>}
            </div>
            <span className="forgotbtn">forgot?</span>
            <div> 
            {  <button >Sign In</button>
            // : <button onClick={()=>navigate('dashboard')}>Sign In</button>
}
            </div>
           { !toggle && (<p className="signup_text">
              Don,t have an account? <Link to="signup" >Sign up</Link>
            </p>)}
          </form>
        </div>
    
   
         </>
  )
}

export default SignIn