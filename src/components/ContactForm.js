import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
}));

const ContactForm = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>CONTACT</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid container xs={6}>
                            <TextField
                                id="outlined-textarea"
                                label="Name"
                                placeholder="Name"
                                multiline
                            />

                        </Grid>
                        <Grid container xs={6}>
                            <TextField
                                id="outlined-textarea"
                                label="Name"
                                placeholder="Email"
                                multiline
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={10}
                                placeholder="Message"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )

}

export default ContactForm