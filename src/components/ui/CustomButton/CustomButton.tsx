import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '@mui/material';
import customButtonStyle from './customButtonStyle';
import CustomCircleLoader from '../Loader/CustomCircleLoader';
export interface CustomButtonProps extends ButtonProps {
    loading?: boolean,
    text?: string | undefined,
    width?: number,
    height?: number,
    default?: boolean,
    show?: boolean,
    fontSize?: number,
    className?:string
}
const CustomButton = ({ show = true, fontSize, loading, text,className, width, height=55, ...rest }: CustomButtonProps) => {
    const classes = customButtonStyle();
    return (
        <>
            {show && <Button
                className={clsx(classes.root, classes.label,className)}
                classes={{
                    disabled: rest.disabled ? classes.disabled : classes.enabled,
                    root: rest.default ? classes.default : ''
                }}
                style={{
                    width: width,
                    height: height,
                    fontSize: fontSize
                }}
                disableElevation {...rest}>

                {text}{loading && <div style={{ marginTop: '6px' }} className="ms-2"><CustomCircleLoader /></div>}
            </Button>}
        </>
    );
};

export default CustomButton;