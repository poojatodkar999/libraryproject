import React, { useRef } from "react";
import "../css/Certificate2.css";
import logoimg from "../Images/u-smart.svg";
import signimg from "../Images/badge-removebg-preview.png";
import waveimg from "../Images/wave.svg";
import { useReactToPrint } from 'react-to-print';
import * as htmlToImg from "html-to-image"
import { Grid } from "@mui/material";



const Certificate2 = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const btnstyle = {
    margin: "20px 0",
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid #555",
    cursor: "pointer",
    color:"#fff",
    backgroundColor:"#2689C3"
  }
  const handleimage=()=>{
    htmlToImg.toPng(componentRef.current,{cacheBust:true,width:1024}).then(dataurl=>{
      const link = document.createElement('a')
      link.download = "certificate.png"
      link.href = dataurl
      link.click()
    })
  }
  
  return (
    <>
      <Grid container spacing={1}>
      <Grid item xs={9}  >
        <div className="container-cert" ref={componentRef}>
        <div   className="container-left">
          <img className="waveimg" src={waveimg} alt="" />
        </div>
        <div className="container-right">
          <div className="">
            <img src={logoimg} />

            {/* <h4 className="logocontent">
              _______Course by u-smart_______
            </h4> */}
          </div>

          <div className="text-block">
            {" "}
            <span className="maintext"> Certificate of Completion</span>
            <br />
            <span className="certification-text">
              This is to certify that
            </span>{" "}
          </div>
          <div>
            {" "}
            <div class="form__group field">
              <input
                type="input"
                style={{ fontSize: "40px" }}
                class="form__field"
                // placeholder="Name"
                name="name"
                id="name"
                required
              />
              {/* <label for="name" class="form__label">Name</label> */}
            </div>{" "}
          </div>
          <div>
            <p className="certification-text">
              {" "}
              Has Successfully <br />
              Completed content Development Course
            </p>
          </div>
          <div></div>

          <div className="Bottom-sign">
            <div className="Sign-main">
              <div className="sign">
                {" "}
                <input
                  type="input"
                  class="form__field"
                  style={{ width: "200px" }}
                  // placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="sign-text-block">Signature</div>
            </div>
            <div>
              <img src={signimg} alt="" />
            </div>
            <div className="Sign-main">
              <div className="sign">
                {" "}
                <input
                  type="input"
                  class="form__field"
                  style={{ width: "200px" }}
                  // placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="sign-text-block">Signature</div>
            </div>
          </div>
        </div>
        </div>
      </Grid>
      <Grid style={{display:"flex",justifyContent:"space-around"}} item xs={3}>
        <div><button  style={btnstyle}  onClick={handlePrint}>Print this out!</button></div>
        <div> <button className="btn" onClick={handleimage} style={btnstyle} > Download as Image</button></div>
      </Grid>
      </Grid>


    </>
  );
};

export default Certificate2;
