import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import hero from '../assets/images/hero-filler.png'

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
        marginTop: '2vh'
    },
    heroText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 60%)',
        color: '#dadde3',
        textAlign: 'center'
    },
    link: {
        color: '#dadde3'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.heroImage}>
            <div className={classes.heroText}>
                <h1>moy@moy.com</h1>
                <a className={classes.link} href="#top">Back to top</a>
            </div>
        </div>
    )

}

export default Footer