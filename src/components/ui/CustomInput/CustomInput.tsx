import React, { ChangeEvent, useState } from "react";
import { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import customInputStyle from "./customInputStyle";
import clsx from "clsx";
import redcircle from "../../../assets/svg/redcircle.svg";
import CustomCircleLoader from "../Loader/CustomCircleLoader";
import { inputFocus } from "../../../theme/default";

export interface CustomInputProps {
  type?: string;
  labelText?: string;
  showError?: boolean;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  errorText?: string;
  text?: string;
  endIcon?: any;
  id?: string;
  startIcon?: JSX.Element;
  textfieldProps?: TextFieldProps;
  inputHeight?: number | string;
  className?: string;
  name: string;
  inputWidth?: number | string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customButtonText?: JSX.Element;
  multiline?: boolean;
  loading?: boolean;
  noStyles?: boolean;
  variant?: TextFieldProps["variant"];
  fontWeight?: React.CSSProperties["fontWeight"];
  fontSize?: React.CSSProperties["fontSize"];
  inputContainerclassName?:string
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
  loading,
  noStyles,
  fontWeight,
  fontSize,
  variant = "standard",
  inputContainerclassName
}) => {
  const classes = customInputStyle();
  const [isFocus, setisFocus] = useState(false)
  const handleInputFocus = ()=>{
    setisFocus(true)
  }
  const handleHideFocus = ()=>{
    setisFocus(false)
  }
  return (
    <div className={classes.inputContainer}>
      {labelText && (
        <label style={{color:isFocus? inputFocus:''}} className={clsx(classes.inputLabel)} htmlFor={id}>
          {labelText}
        </label>
      )}{" "}
      <TextField
        id={id}
        InputProps={{
          startAdornment: startIcon,
          autoFocus:false,
          onFocus:handleInputFocus,
          onBlur:handleHideFocus,
          endAdornment:
            endIcon ||
            (loading && (
              <div className="d-flex justify-content-center">
                {startIcon && <div>{startIcon}</div>}
                {loading && <div>{<CustomCircleLoader />}</div>}
              </div>
            )),
          className: className,
          style:{
            marginTop:0,
          },
          classes: {
            root: noStyles ? classes.noStyles : classes.root,
            focused:classes.inputFocused,
            input: !noStyles
              ? multiline
                ? classes.multilineInput
                : classes.input
              : classes.noStyles,
            // notchedOutline: classes.notchedOutline
          },
        }}
        className={inputContainerclassName}
        inputProps={{
          className: "mt-0",
          style: {
            height: inputHeight,
            width: inputWidth,
            fontWeight: fontWeight,
            fontSize: fontSize,
            
            marginTop: 0,
          },
        }}
        name={name}
        {...textfieldProps}
        onChange={handleChange}
        error={showError}
        autoComplete="new-password" //to disable autocomplete
        // variant="standard"
        variant={variant}
        value={value}
        // value={`${value } ${value&& value && 'NGN'}`}
        multiline={multiline}
        margin="normal"
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        fullWidth
      />
      {showError && (
        <div className={classes.inputErrorContainer.concat(' d-flex')}>
          <div className={classes.inputerrorIcon}>
            <img src={redcircle} />
          </div>
          <div>
            {" "}
            <small className={classes.errorLabel}>{errorText}</small>
          </div>
        </div>
      )}
      {customButtonText && (
        <div className={classes.inputErrorContainer}>
          <div className={classes.inputerrorIcon}></div>
          <div> {customButtonText}</div>
        </div>
      )}
    </div>
  );
};
export default CustomInput;
