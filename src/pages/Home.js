import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hero from '../components/Hero';

import intro from '../assets/images/intro-filler.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '5vh',
        marginLeft: '5vh'
    },
    introImage: {
        height: '70vh',
        marginLeft: '2.5vw',
        boxShadow: '5px 10px 10px'
    },

}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Hero />
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                <Grid item sx={6}>
                    <img src={`${intro}`} alt="Business Cat" className={classes.introImage} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h3 className={classes.introText}>As you can see, Moy Hinojos is a cat. He is the founding director of the Barrel Theatre, which is proud to present its annual Christmas show, "Dreamboxes: Christmas Edition." The Barrel Theatre understands that viewing such material can be profoundly upsetting to those who have been personally victimized by Bill Walters. To combat this, management will provide complimentary shots of whiskey in whatever quantity is needed to ensure no one remembers the experience.</h3>
                        <h3 className={classes.introText}>Moy is also the founding director of the Papua New Ginuea Playhouse, but you don't need to know anything about that. He produces top-quality meat babies in all situations, and can can do all things through Satan who strengthens him. </h3>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}


export default Home;