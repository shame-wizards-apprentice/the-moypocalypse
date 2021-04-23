import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
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
        marginLeft: '1vw',
        marginRight: '1vw',
        marginTop: '1vh'
    },
    bigImage: {
        boxShadow: '5px 10px 10px',
        height: '70vh',
        marginBottom: '2vh'
    },
    smallImage: {
        boxShadow: '5px 10px 10px',
        height: '30vh',
        marginBottom: '1vh',
        marginLeft: '1vw'
    },
    bottomRow: {
        marginTop: '2vh'
    },
    topRow: {
        marginTop: '2vh'
    }
}));

const Production = () => {
    let history = useHistory();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid item xs={12} id="top">
                <Hero />
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1>Lime and Cheese Salad</h1>
                        <p>The Papua New Ginuea Playhouse, 1955</p>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Tooltip title="Lime Cheese Monstrocity">
                        <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.bigImage}></img>
                    </Tooltip>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2} className={classes.topRow}>
                        <Grid item xs={6}>
                            <Tooltip title="Lime Cheese Monstrocity">
                                <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.smallImage}></img>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <h3>Kangaroos</h3>
                                <h4>Most kangaroos are left handed. A group of kangaroos is called a mob.</h4>
                                <h6>What does that have to do with anything? I have no idea. Why don't you ask the kangaroos?</h6>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.bottomRow}>
                        <Grid item xs={6}>
                            <Tooltip title="Lime Cheese Monstrocity">
                                <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.smallImage}></img>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                            <Tooltip title="Lime Cheese Monstrocity">
                                <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.smallImage}></img>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h3>Sometimes, these old recipes start out innocent enough, and then shock you with their horrifying contents. Not this one. Nope, it's awful from the start. Like, lime Jell-O? Are you kidding? And wtf are those weird red meat chunks in the center? Also, I don't see any cheese, so I assume that's the weird white globs in the bottom part of the Jell-O monstrocity. And while we're on the subject, what KIND of cheese are we talking here? 'Cheese' is a bit vague for my comfort levels, to be honest with you. But they do provide the onlooker with a nice limp lettuce leaf for their troubles, so I guess props to them for that.</h3>
                        <p>Production photos by Satan (praise be unto him)</p>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Grid container spacing={2} className={classes.topRow}>
                        <Grid item xs={6}>
                            <Tooltip title="Lime Cheese Monstrocity">
                                <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.smallImage}></img>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                            <Tooltip title="Lime Cheese Monstrocity">
                                <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.smallImage}></img>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.bottomRow}>
                        <Grid item xs={6}>
                            <Paper className={classes.paper}>
                                <h3>The Manatee Nebula</h3>
                                <h4>It's gonna look like a mantee, but then you'll realize it's a nebula. And THEN, you realize you're in space.</h4>
                                <h6>It's all part of a divine plan.</h6>
                                
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Tooltip title="Lime Cheese Monstrocity">
                                <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.smallImage}></img>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Tooltip title="Lime Cheese Monstrocity">
                        <img src={`${production1}`} alt="Lime Cheese Monstrosity" className={classes.bigImage}></img>
                    </Tooltip>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Footer />
            </Grid>
        </div>
    )
}

export default Production;