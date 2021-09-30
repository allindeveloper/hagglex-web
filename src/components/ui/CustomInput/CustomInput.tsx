import React, { ChangeEvent, useState } from "react";
import { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import customInputStyle from "./customInputStyle";
import clsx from 'clsx'
import redcircle from '../../../assets/svg/redcircle.svg'
import CustomCircleLoader from "../Loader/CustomCircleLoader";

export interface CustomInputProps {
  type?: string,
  labelText?: string,
  showError?: boolean,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  errorText?: string,
  text?: string,
  endIcon?: any,
  id?: string,
  startIcon?: JSX.Element,
  textfieldProps?: TextFieldProps,
  inputHeight?: number | string,
  className?: string,
  name?: string,
  inputWidth?: number | string,
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  customButtonText?: JSX.Element,
  multiline?: boolean,
  loading?: boolean
}

const CustomInput: FC<CustomInputProps> = ({
  labelText,
  errorText,
  value,
  endIcon,
  placeholder = "Text Input",
  type = "text",
  showError = false,
  disabled = false,
  textfieldProps,
  id = "",
  startIcon,
  inputHeight,
  className,
  name,
  handleChange,
  inputWidth,
  customButtonText,
  multiline,
  loading
}) => {

  const classes = customInputStyle()
  return (
    <div className={classes.inputContainer}>
      {labelText && <label className={clsx(classes.inputLabel)} htmlFor={id}>{labelText}</label>
      }      <TextField
        id={id}
        InputProps={{
          // endAdornment: endIcon,
          startAdornment: startIcon,
          endAdornment: (endIcon || loading && <div className="d-flex justify-content-center">
            {startIcon && <div>
              {startIcon}
            </div>}
            {loading && <div>
              {<CustomCircleLoader />}
            </div>}
          </div>),
          className: className,
          classes: {
            root: classes.root,
            input: multiline ? classes.multilineInput : classes.input,
            // notchedOutline: classes.notchedOutline
          },
        }}
        inputProps={{
          style: {
            height: inputHeight,
            width: inputWidth,
            marginTop: 0,
          },
        }}
        name={name}
        {...textfieldProps}
        onChange={handleChange}
        error={showError}
        autoComplete="new-password" //to disable autocomplete
        variant="standard"
        value={value}
        multiline={multiline}
        margin="normal"
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        fullWidth
      />
      {showError && <div className={classes.inputErrorContainer}>
        <div className={classes.inputerrorIcon}><img src={redcircle} /></div>
        <div>              <small className={classes.errorLabel}>{errorText}</small>
        </div>
      </div>}
      {customButtonText && <div className={classes.inputErrorContainer}>
        <div className={classes.inputerrorIcon}></div>
        <div>  {customButtonText}
        </div>
      </div>}
    </div>
  );
}
export default CustomInput