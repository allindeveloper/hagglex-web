import { Grid, Typography, Divider, Link, Hidden } from "@mui/material";
import React from "react";
import Aux from "../../../components/hoc/_Aux";
import CustomButton from "../../../components/ui/CustomButton/CustomButton";
import CustomInput from "../../../components/ui/CustomInput/CustomInput";
import { Space } from "../../../components/ui/Space/Space";
import LoginStyles from "../../../styles/LoginStyles";
import OnboardingRightContainer from "../../../components/shared/OnboardingRightContainer";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUpErrors } from "../../../utils/validationStates";
import { useRef } from "react";
import { ISignUpRequestPayload, ISignUpResponse } from "../../../types/SignUp";
import { validator, validatorAll } from "../../../utils/validatorFunctions";
import { linkColor } from "../../../theme/default";
import { useEffect } from "react";
import { enterHandler } from "../../../utils/globalUtils";


const SignUp: React.FC<any> = () => {
    const [step, setstep] = useState<number>(1)
    const classes = LoginStyles()
    const history = useHistory()
    const [togglePassword, settogglePassword] = useState(false)

    const [err, setError] = useState(signUpErrors);
    const hasError = useRef<any>(null);
    const hasErrorTwo = useRef<any>(null);

    const [isError, setisError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabled, setdisabled] = useState(false);
    const [errorText, seterrorText] = useState("");

    const [data, setData] = useState<ISignUpRequestPayload>({
        email: "",
        password: "",
        username: "",
        phonenumber: ""
    })



    const resetForm = () => {
        setData({
            email: "",
            password: "",
            username: "",
            phonenumber: ""
        });
        history.push('/login')
    }
    const handleCreateAccount = () => {
        // this is to make sure the code does not blow
        // we validate again if the ref value is null
        if (hasError.current === null) {
            err.all.forEach((item) => {
                setError((prevState: any) => ({
                    ...prevState,
                    all: err.all?.delete(item),
                }));
            });
        }
        setdisabled(true);
        setLoading(true)
        seterrorText("");
        validatorAll(
            [
                { name: "email", value: data.email, label: "Email" },
                { name: "password", value: data.password, label: "Password" },
                { name: "username", value: data.username, label: "Username" },
            ],
            "SignUp",
            setError,
            err,
            hasErrorTwo
        );
        if (!hasErrorTwo.current) {
            setLoading(false)
            seterrorText("")
            setdisabled(false)
            return;
        }
        if (Object.keys(hasErrorTwo?.current).length > 0) {
            setdisabled(false)
            setLoading(false)
            return;
        }
        const payload: ISignUpRequestPayload = {
            email: data.email,
            password: data.password,
            phonenumber: data.phonenumber,
            username: data.username
        }

    }

    const handleNavigate = () => {
        history.push('/login')
    }
    const handleTogglePassword = () => {
        settogglePassword(!togglePassword)

    }

    const handleCreateFormInputChange = (input: string, label: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e
        setData(prevState => ({
            ...prevState,
            [input]: target?.value
        }));
        validator({ name: input, value: target.value, label: label }, "SignUp", setError, err);
    };



    useEffect(() => {
        enterHandler('finalsignup');
    })
    return (
        <div>
            <Grid container spacing={0} className={classes.container}>
                <OnboardingRightContainer
                   
                />
                <div className={classes.formContainer}>

                    <div className={classes.signupform}>

                        <Aux>
                            <Typography variant="h4">
                                <b>Create new account</b>
                            </Typography>

                           <Space top={60} />
                            {<Aux>
                                <Space top={20} />
                                <CustomInput
                                    errorText={err.email}
                                    showError={err.email.length > 0}
                                    name="email"
                                    value={data.email}
                                    handleChange={(e) => handleCreateFormInputChange("email", "Email", e)}
                                    type="text"
                                    labelText="Email Address"
                                    id="signup-email"
                                    placeholder="Enter email address" />
                                <Space top={10} />

                                <CustomInput
                                    errorText={err.password}
                                    showError={err.password.length > 0}
                                    value={data.password}
                                    handleChange={(e) => handleCreateFormInputChange("password", "Password", e)}
                                    name="password"
                                    labelText="Password"
                                    id="signup-password"
                                    placeholder="Enter password"
                                    type={togglePassword ? 'text' : 'password'}
                                    endIcon={<div className="cursor-pointer" style={{ color: linkColor }} onClick={handleTogglePassword}>{togglePassword ? 'Hide' : 'Show'}</div>}
                                />

                                <Space top={10} />

                                <CustomInput
                                    errorText={err.username}
                                    showError={err.username.length > 0}
                                    value={data.username}
                                    handleChange={(e) => handleCreateFormInputChange("username", "Username", e)}
                                    name="username"
                                    labelText="Create username"
                                    id="signup-username"
                                    placeholder="Enter username"
                                    type={'text'}
                                />

                                <Space top={20} />

                                <Space bottom={30} />

                            </Aux>}
                        </Aux>
                        <div>
                        <Typography>
                                Got referral code ?
                            </Typography>
                        </div>

                        <Space top={25} />
                        <CustomButton 
                        text="Sign Up"
                        show
                        />
                        <Space top={25} />
                        <div className="d-flex justify-content-center mb-5">
                            <div>
                            <small>Have an account ? </small>
                            </div>
                            <div>
                            <small>Sign in to explore</small>
                                </div>
                        </div>
                    
                    <Space top={40} />
                    <div className="d-flex justify-content-between">
                    <div>
                            <small>Need help?</small>
                            </div>
                            <div>
                            <small>Privacy Terms & Policy</small>
                            </div>
                    </div>

                    </div>

                </div>
            </Grid>
        </div>

    )
}

export default SignUp;