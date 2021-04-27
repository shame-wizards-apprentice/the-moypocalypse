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
        marginLeft: '2vh'
    }, 
    button: {
        marginLeft: '1vh'
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
                <h1>Contact Me</h1>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        placeholder="Name"
                        multiline
                        name="name"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Email"
                        multiline
                        name="email"
                        onChange={handleChange}
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
                    name="message"
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} variant="contained" onClick={handleSubmit} >Submit</Button>
            </Grid>

        </form >

    )

}

export default ContactForm