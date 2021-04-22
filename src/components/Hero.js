import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import hero from '../assets/images/hero-filler.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    heroImage: {
        backgroundImage: `url(${hero})`,
        height: '60vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
    },
    heroText: {
        textAlign: 'left',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-150%, -75%)',
        color: '#dadde3'
    }
}));

const Hero = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroImage}>
            <Navbar />
            <div className={classes.heroText}>
                <h1>The Great and Wonderful Moy</h1>
                <h3>(Weird As He May Be)</h3>
            </div>
        </div>
    )
}

export default Hero