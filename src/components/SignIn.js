import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { CardContent, Divider, Typography, Paper, TextField, Button } from '@material-ui/core';
import image1 from './image1.jpg';
import "./Login.css";


const SignIn = () => {

    const initialvalues = { firstname: "", lastname: "", email: "", password: "", number: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [passwordShow, setPasswordShow] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    }
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, []);


    const validate = (values) => {

        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!values.email) {
            errors.email = "email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not Valid Email";
        }
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than  4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password connot  exced   more than  10 characters";
        }

        return errors;
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardContent component={Paper} className='card_display'>
                <Grid container>
                    <Grid item xs={4} alignSelf="center" className='card_left'>
                        <img src={image1} alt="" width={180} height={180}></img>
                        <Typography variant="h5">Celebrating Life</Typography>
                    </Grid>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Grid item xs={7}>
                        <Typography variant="h5" className='title'>Sign In</Typography>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className='form-control'
                            value={formValues.email} onChange={handleChange}
                        />
                        <p style={{ color: 'red' }}>{formErrors.email}</p>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Password"

                            autoComplete="email"
                            autoFocus
                            className='form-control'
                            name="password"
                            type={passwordShow ? "text" : "password"}
                            value={formValues.password} onChange={handleChange}
                        />
                        <i id="showHidePwd" className={`far ${passwordShow ? 'fa-eye-slash' : 'fa-eye'}`} onClick={togglePasswordVisiblity}></i>
                        <p style={{ color: 'red' }}>{formErrors.password}</p>
                        <div className='forget_password'>
                            <a href='/'>Forgot Password?</a>
                        </div>
                        <span className='text'>By signing in you are accepting <a href='/' className='a'>Sample's Privacy Policy</a>and <a href='/' >Terms of Services</a></span>
                        <div className='signIn_btn'>
                            <Button
                                type="submit"
                                className='btn'
                                variant="contained"
                            >Sign In</Button>
                        </div>
                        <Grid container>
                            <Grid xs={6}>
                                <div className='text1'>Create Account</div>
                            </Grid>
                            <Grid xs={6} className='btn1'>
                                <Button
                                    className='btn1'
                                    type="submit"
                                    variant="outlined"
                                >Sign Up Free</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent >
        </form>
    );
}
export default SignIn;