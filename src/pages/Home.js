import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import intro from '../assets/images/intro-filler.png';
import project from '../assets/images/upcoming-project-filler.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    introPaper: {
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
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5vh'
    },


}));

const Home = () => {
    let history = useHistory();
    const classes = useStyles();

    const linkMe = (e) => {
        e.preventDefault();
        history.push(`${e.currentTarget.getAttribute('name')}`)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} id="top">
                    <Hero />
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                <Grid item sx={6}>
                    <img src={`${intro}`} alt="Business Cat" className={classes.introImage} />
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.introPaper}>
                        <h3 className={classes.introText}>As you can see, Moy Hinojos is a cat. He is the founding director of the Barrel Theatre, which is proud to present its annual Christmas show, "Dreamboxes: Christmas Edition." The Barrel Theatre understands that viewing such material can be profoundly upsetting to those who have been personally victimized by Bill Walters. To combat this, management will provide complimentary shots of whiskey in whatever quantity is needed to ensure no one remembers the experience.</h3>
                        <h3 className={classes.introText}>Moy is also the founding director of the Papua New Ginuea Playhouse, but you don't need to know anything about that. He produces top-quality meat babies in all situations, and can do all things through Satan who strengthens him. </h3>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Upcoming Projects</h1>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.introPaper}>
                        <h2>You never know when it's coming.</h2>
                        <br />
                        <h2>It spans all companies. It is inevitable.</h2>
                        <br />
                        <h2>In fact, the consequences of Moy's actions will haunt you wherever you go, for the rest of your life. Your only defense is to practice unwavering loyalty to our lord and savior Satan, but even that might not save you. Idk, give it a shot.</h2>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <img src={`${project}`} alt="Well, well, well, if it isn't the consequences of my own actions." className={classes.introImage} />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Portfolio and CV</h1>
                    </Paper>
                </Grid>
                <Grid container spacing={6} className={classes.buttonGroup}>
                    <Button variant="contained" name="/portfolio" onClick={linkMe}>Directing Portfolio</Button>
                    <Button variant="contained" name="/acting" onClick={linkMe}>Acting Portfolio</Button>
                    <Button variant="contained" name="/cv" onClick={linkMe}>Resume and CV</Button>
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}


export default Home;