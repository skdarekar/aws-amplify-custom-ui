import React, { useState } from 'react';

//Material UI stuff
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//aws-amplify
import { Auth } from 'aws-amplify';

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

function CustomForgotPassword(props) {
    const classes = useStyles();
    const [verificationCode, setVerificationCode] = useState("")
    const [username, setUserName] = useState("")
    const [newPassword, setPassword] = useState("")

    const onVerifyCode = () => {
        console.log("Verification Code");
        if (verificationCode && username && newPassword) {
            console.log("VERIFY CODE", verificationCode)
            // Collect confirmation code and new password, then
            Auth.forgotPasswordSubmit(username, verificationCode, newPassword)
            .then(data => { 
                console.log(data);
                onStateChange("signIn") 
            })
            .catch(err => console.log(err));
        } else {
            console.log("Please enter all required information!")
        }
    }

    const onStateChange = (state) => {
        props.changeState(state)
    }

    return (
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="off"
                autoFocus
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="code"
                label="Verification Code"
                name="code"
                autoComplete="off"
                autoFocus
                onChange={(e) => setVerificationCode(e.target.value)}
            />
             <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onVerifyCode}
            >
                Verify Code
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2" onClick={() => onStateChange("signIn")}>
                        Back To Login
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2" onClick={() => onStateChange("signUp")}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}

export default CustomForgotPassword;