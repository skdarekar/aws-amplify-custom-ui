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

function Reset(props) {
    const classes = useStyles();
    const [username, setUserName] = useState("")

    const onForgotPassword = () => {
        console.log("Forgot Password");
        if (username) {
                props.toggleForgot("verify");

            Auth.forgotPassword(username)
            .then(res => { 
                console.log("ForgotPassword", res);
                props.toggleForgot("verify");
                })
                .catch(err => console.log("ERROR FORGOT PASSWORD", err))
        } else {
            console.log("User name can't be empty")
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
                onChange={(e) => setUserName(e.target.value)}
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onForgotPassword}
            >
                Send Verification Code
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

export default Reset;