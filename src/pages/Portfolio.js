import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ProductionCard from '../components/ProductionCard';
import production1 from '../assets/images/production-filler-1.png';
import production2 from '../assets/images/production-filler-2.png';

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

const Portfolio = () => {
    let history = useHistory();
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} id="top">
                    <Hero />
                </Grid>
            </Grid>
            <ProductionCard image={`${production1}`} title='Lime and Cheese Salad' company='The Papua New Ginuea Playhouse' year='1955' blurb="Sometimes, these old recipes start out innocent enough, and then shock you with their horrifying contents. Not this one. Nope, it's awful from the start. Like, lime Jell-O? Are you kidding? And wtf are those weird red meat chunks in the center? Also, I don't see any cheese, so I assume that's the weird white globs in the bottom part of the Jell-O monstrocity. And while we're on the subject, what KIND of cheese are we talking here? 'Cheese' is a bit vague for my comfort levels, to be honest with you. But they do provide the onlooker with a nice limp lettuce leaf for their troubles, so I guess props to them for that." />

            <ProductionCard image={`${production2}`} title="Christmas Candle Salad" company="The Greg Moss Memorial Concert Hall" year="2025" blurb="Passing over the obvious problem with how this looks, a quick peek at the recipe reveals that those--ahem--candle drips--are actually made of mayonaise. I'm beginning to seriously suspect that there were only five ingredients in the world during the 1950's: Jell-O (normally lime, although they got little creative here with cranberry), bananas, mayonaise, lettuce, and a single green olive. Delicious."/>
        </div>
    )
}

export default Portfolio;