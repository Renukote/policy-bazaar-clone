import { useState, useEffect } from "react";
import "./ReviewDetail.css";
import { motion, useAnimation } from "framer-motion"
import { makeStyles,useTheme } from '@material-ui/core/styles';
import {TextField,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    RadioGroup,
    Radio,
    InputLabel,
    Select,
    MenuItem,
    Stepper,
    Step,
    StepLabel,
    Typography,
    Button,} from '@material-ui/core';

import React from 'react';

export const ReviewDetails=()=> {

    const useStyles = makeStyles((theme) => ({
        inputField: {
          width: "100%",

          margin: theme.spacing(1, 0),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 320,
            maxWidth: 400,
          },
          chips: {
            display: 'flex',
            flexWrap: 'wrap',
          },
          chip: {
            margin: 2,
          },
          noLabel: {
            marginTop: theme.spacing(3),
          },

          root: {
            width: '100%',
          },
          button: {
            marginRight: theme.spacing(1),
          },
          instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
          },
        }))

    const classes = useStyles();
    const theme = useTheme();

    const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 450,
    },
  },
};


const control=useAnimation()

  const initialValues = { username: "", email: "", income: "",occupation:"",education:"",lifeCover:"",CoverFor:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
   
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
     
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "The Name Field is required!";
    }
    if (!values.email) {
      errors.email = "The Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.income) {
      errors.password = "Income is required";
    }
     
    return errors;
  };


  return (
  <div className="review-container">
      
        <p>Please review below details before proceeding ahead.</p>
       
        <div class="reviewAllDetails">
                <div class="d-flex align-items-center">
                    <div class="reviewTitle">
                        Personal Info
                    </div>
                </div>
                <div class="reviewFormDetails">
                    <ul>
                        <li>
                            <div class="review-Detail-left">First Name:</div>
                            <div class="reviewFormRightDetail">pankaj  kumar</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Email:</div>
                            <div class="reviewFormRightDetail">mr.pankajkumar1994@gmail.com</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Annual Income:</div>
                            <div class="reviewFormRightDetail">&nbsp;<span class="formattedAmt">₹ 20000000</span></div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Occupation:</div>
                            <div class="reviewFormRightDetail"><span id="lblOccupation">Salaried</span></div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Education:</div>
                            <div class="reviewFormRightDetail">Post-Graduate &amp; Above</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">PIN Code:</div>
                            <div class="reviewFormRightDetail">800001</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">City:</div>
                            <div class="reviewFormRightDetail">Phulwari</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Nationality:</div>
                            <div class="reviewFormRightDetail">Indian</div>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <div class="reviewAllDetails">
                <div class="d-flex align-items-center">
                    <div class="reviewTitle">
                        Profile Details
                    </div>
                </div>
                <div class="reviewFormDetails">
                    <ul>
                        <li>
                            <div class="review-Detail-left">Gender:</div>
                            <div class="reviewFormRightDetail">Male</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Date of Birth:</div>
                            <div class="reviewFormRightDetail">03/06/1994</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Tobacco User:</div>
                            <div class="reviewFormRightDetail">No</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Phone Number</div>
                            <div class="reviewFormRightDetail">82******49</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="reviewAllDetails">
                <div class="d-flex align-items-center">
                    <div class="reviewTitle">
                        Plan Info
                    </div>
                </div>
                <div class="reviewFormDetails">
                    <ul>
                        <li>
                            <div class="review-Detail-left">Life Cover:</div>
                            <div class="reviewFormRightDetail">&nbsp;<span id="LifeCover">₹ 10000000</span></div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Cover for:</div>
                            <div class="reviewFormRightDetail">57 Years</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Pay for:</div>
                            <div class="reviewFormRightDetail">30 Years</div>
                        </li>
                        <li>
                            <div class="review-Detail-left">Mode of premium payment:</div>
                            <div class="reviewFormRightDetail">Monthly</div>
                        </li>
                    </ul>
                </div>
            </div>
         <Checkbox>I hereby consent to receive communication from Kotak e-Term or Its authorized representatives through</Checkbox>
        
  </div>
  )
}

