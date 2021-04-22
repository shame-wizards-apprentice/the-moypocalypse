import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import production1 from '../assets/images/production-filler-1.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    bigImage: {
        boxShadow: '5px 10px 10px',
        height: '70vh',
    },
    smallImage: {
        boxShadow: '5px 10px 10px',
        height: '10vh'
    }
}));

const Production = () => {
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
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Lime and Cheese Salad</h1>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.bigImage}></img>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Footer />
            </Grid>
        </div>
    )
}

export default Production;