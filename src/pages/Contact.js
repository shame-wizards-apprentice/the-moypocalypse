import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Contact = () => {
    let history = useHistory();
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} id="top">
                    <Hero />
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <ContactForm />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </div>
    )
}

export default Contact;