import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const data = [
    {
        // id:"id" + Math.random().toString(16).slice(2), 
        id: "defid",
        title: 'Programming concepts',
        autor: "Rajaraman, V",
        publisher: "	PHI",
        cat: "education"
    },
    {
        id: "id" + Math.random().toString(16).slice(2),
        title: 'C Language concepts',
        autor: "Joseph, Mathai; Prasad, V. R; Natarajan, N",
        publisher: "	PHI",
        cat: "education"
    },
    {
        id: "id" + Math.random().toString(16).slice(2),
        title: 'OOPS concepts with JAVA',
        autor: "",
        publisher: "	PHI",
        cat: "education",
    }
]

const AddBook = () => {

  
    const [state, setState] = useState(data)

   
    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value,
        });
    };

  


   const onSubmit=(newData)=>{
    // e.preventDefault();
   const data1 = [...data,{...newData,id:"id" + Math.random().toString(16).slice(2)}]
    setState([...data,{...newData,id:"id" + Math.random().toString(16).slice(2)}])


  

console.log(data1)

   }
    return (
        <>
            <div className="cert_container">
                <span className="cert_heading"> Add Book </span>

                <Grid container sx={{ mt: 3 }} spacing={4}>
                    <Grid item xs={4}>
                        <div><p>Enter Book Title</p>
                            <input type="text" 
                            value={state[data]}
                                onChange={handleInputChange} 
                                /></div>
                        <div><p>Enter Author Name</p>
                            <input type="text" value={state.autor}
                                onChange={handleInputChange}  /></div>

                    </Grid>
                    <Grid item xs={4}> <div><p>Publisher</p>
                        <input type="text" value={state.publisher}
                                onChange={handleInputChange}  /></div>
                        <div><p>Category</p>
                            <FormControl variant="standard" fullWidth sx={{ mt: 1 }}>
                                {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={state.cat}
                                    onChange={handleInputChange}
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>select category</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Adventure stories</MenuItem>
                                    <MenuItem value={20}>Classics</MenuItem>
                                    <MenuItem value={30}>Historical fiction</MenuItem>
                                    <MenuItem value={30}>other</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                    </Grid>

                    <Grid sx={{ alignItems: "center", textAlign: "center", justifyContent: "center", display: "flex" }} item xs={8}>

                        <Grid xs={4}>  <button className="btn_blue" onClick={onSubmit} >Submit</button></Grid>
                    </Grid>

                </Grid>
            </div>
        </>
    );
};

export default AddBook;
