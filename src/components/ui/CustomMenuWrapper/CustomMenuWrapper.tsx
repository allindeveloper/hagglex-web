import React, { Fragment } from 'react'
import Menu from '@mui/material/Menu'
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from '@mui/material';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuRoot:{
            borderRadius:theme.spacing(1),
        },
        menuButton: {
            display: 'inline-block',
            color: theme.palette.text.primary,
            '& div:hover': {
                backgroundColor: theme.palette.action.hover,
            },
        },
        
    }),
);
const CustomMenuWrapper = (props:any) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const children = React.Children.toArray(props.children)
    let { shouldCloseOnItemClick = true, horizontalPosition = 'left' } = props
    const classes = useStyles()

    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Fragment>
            <div className={classes.menuButton} onClick={handleClick}>
                {props.menuButton}
            </div>
                <Menu
                    elevation={8}
                    // getContentAnchorEl={null}
                    anchorEl={anchorEl}
                    open={!!anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: horizontalPosition,
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: horizontalPosition,
                    }}
                    PaperProps={{
                        style:{
                            borderRadius:props?.borderRadius
                        },
                        classes:{
                            rounded:classes.menuRoot
                        }
                    }}
                >
                   {props.hasMultiple ? children.map((child, index) => (
                        <div
                            onClick={
                                shouldCloseOnItemClick ? handleClose : () => {}
                            }
                            key={index}
                        >
                            {child}
                        </div>
                    ))
                    :
                    props.content
                    }
                </Menu>
        </Fragment>
    )
}

export default CustomMenuWrapper
