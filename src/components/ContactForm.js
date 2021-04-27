import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    nameEmail: {
        marginLeft: '1vh'
    },
    button: {
        marginLeft: '2vh'
    },
    message: {
        marginTop: '2vh'
    }
}));


const ContactForm = (props) => {
    const classes = useStyles();
    const [contactState, setContactState] = useState({
        name: "",
        email: "",
        message: ""
    })
    
    const handleChange = e => {
        const { name, value } = e.target;
        setContactState({
            ...contactState,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Here's what you submitted: ${JSON.stringify(contactState, null, 2)}`)
    }

    return (
        <form className={classes.root}>
            <Grid container spacing={3}>
                        <Grid container spacing={3} className={classes.nameEmail}>
                            <Grid item xs={3}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Name"
                                    placeholder="Name"
                                    multiline
                                    name="name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="outlined-textarea"
                                    label="Email"
                                    placeholder="Email"
                                    multiline
                                    name="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className={classes.message}
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={10}
                                placeholder="Message"
                                variant="outlined"
                                name="message"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                        <Button className={classes.button} variant="contained" onClick={handleSubmit} >Submit</Button>
                        </Grid>
                    </Grid>
        </form >

    )

}

export default ContactForm