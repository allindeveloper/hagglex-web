import React, { ChangeEvent, useState } from "react";
import { FC } from "react";
import {  TextField, TextFieldProps } from "@mui/material";
import customInputStyle from "./customInputStyle";
import clsx from 'clsx'
import redcircle from '../../../assets/svg/redcircle.svg'
import CustomCircleLoader from "../Loader/CustomCircleLoader";
import NumberFormat,{NumberFormatValues} from 'react-number-format';
import CustomInput, { CustomInputProps } from "./CustomInput";

export interface CustomFormatInputProps extends CustomInputProps {
  onValueChange?:(values:NumberFormatValues) => void,
}

const CustomFormatInput: FC<CustomFormatInputProps> = ({
 value,
 onValueChange,
 name,
 endIcon,
 handleChange,
 inputWidth
}) => {

  const classes = customInputStyle()
  const onValueInputChange = (values:NumberFormatValues)=>{
    debugger
    // const e:any = {
    //   target:{
    //     value:values.floatValue
    //   }
    // }
    // handleChange?.(e)
  }
  const onChange = ()=>{
    debugger
  }
  return (
<NumberFormat
        // customInput={TextField}
        customInput={CustomInput}
        isNumericString={true}
        variant="standard"
        decimalSeparator="."
        decimalScale={2}
        inputProps={{
          style: {
            width: `${inputWidth}vw`,
            marginTop: 0,
            fontWeight:500,
            fontSize:27
          },
        }}
        endIcon={endIcon}
        InputProps={{
          classes: {
            root:  classes.root,
            input: classes.input
          },
        }}
        // suffix={'NGN'}
        value={value}
        name={name}
        type="text"
        onChange={onChange}
        // handleChange={handleChange}
        onValueChange={onValueChange}
        // onValueChange={onValueInputChange}
       />
  );
}
export default CustomFormatInput