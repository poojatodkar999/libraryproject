import { Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useForm } from "react-hook-form";


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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onformSubmit = (data) => {
        console.log(data);

    }

    const [state, setState] = useState(data)


    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value,
        });
    };




    const onSubmit = (newData) => {
        // e.preventDefault();
        const data1 = [...data, { ...newData, id: "id" + Math.random().toString(16).slice(2) }]
        setState([...data, { ...newData, id: "id" + Math.random().toString(16).slice(2) }])





        console.log(data1)

    }
    return (
        <>
            <div className="cert_container">
                <span className="cert_heading"> Add Book </span>

                <form onSubmit={handleSubmit(onformSubmit)}>

                    <Grid container sx={{ mt: 3 }} spacing={4}>
                        <Grid item xs={5}>
                            <div><p>Enter Book Title</p>
                                <input type="text"
                                    value={state[data]}
                                    onChange={handleInputChange}
                                    {...register("title", { required: true, maxLength: 20 })} />
                                {errors.title && <p className='error_red'>Please check the book title</p>}</div>
                            <div><p>Enter Author Name</p>
                                <input type="text" value={state.autor}
                                    onChange={handleInputChange}  {...register("author", { required: true, maxLength: 20 })} />
                                {errors.author && <p className='error_red'>Please check the Author name</p>}</div>

                        </Grid>
                        <Grid item xs={5}> <div><p>Publisher</p>
                            <input type="text" value={state.publisher}
                                onChange={handleInputChange}  {...register("publisher", { required: true, maxLength: 20 })} />
                            {errors.publisher && <p className='error_red'>Please check the publisher name</p>}
                        </div>
                            <div><p>Category</p>
                                <FormControl variant="standard" fullWidth sx={{ mt: 1 }}>
                                    {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={state.cat}
                                        onChange={handleInputChange}
                                        label="Age"
                                        {...register("dropdown", { required: true })}
                                    >
                                        <MenuItem value="">
                                            <em>select category</em>
                                        </MenuItem>
                                        <MenuItem value={"Adventure"}>Adventure stories</MenuItem>
                                        <MenuItem value={"Classics"}>Classics</MenuItem>
                                        <MenuItem value={"Historical"}>Historical fiction</MenuItem>
                                        <MenuItem value={"other"}>other</MenuItem>
                                    </Select>
                                    {errors.dropdown && <p className='error_red'>Please select option</p>}
                                </FormControl>

                            </div>
                        </Grid>

                        <Grid sx={{ alignItems: "center", textAlign: "center", justifyContent: "center", display: "flex" }} item xs={8}>

                            <Grid xs={4}>  <button className="btn_blue" onClick={onSubmit} >Submit</button></Grid>
                        </Grid>

                    </Grid>
                </form>
            </div>
        </>
    );
};

export default AddBook;
