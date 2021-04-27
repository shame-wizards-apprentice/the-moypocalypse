import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import pinterest from '../assets/images/pinterest.png';
import imdb from '../assets/images/imdb.png';

const useStyles = makeStyles((theme) => ({
    icon: {
        height: '20vh',
    },
    title: {
        marginLeft: '5vh'
    },
    bottomRow: {
        marginTop: '7vh'
    }
}));

const SocialMedia = () => {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.title}>Or succumb to the Moy-ness</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Tooltip title="Moy Hinojos">
                    <a href="https://www.linkedin.com/in/moyhinojos/" target="blank">
                        <img className={classes.icon} src={`${linkedin}`} alt="Linkedin"></img>
                    </a>
                    </Tooltip>
                </Grid>
                <Grid item xs={6}>
                    <Tooltip title="the_moypocalypse">
                    <a href="https://www.instagram.com/the_moypocalypse/" target="blank">
                        <img className={classes.icon} src={`${instagram}`} alt="Instagram"></img>
                    </a>
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.bottomRow}>
            <Grid item xs={6}>
                    <Tooltip title="Moy Hinojos">
                    <a href="https://www.imdb.com/name/nm3282667/?ref_=ttfc_fc_cl_t3" target="blank">
                        <img className={classes.icon} src={`${imdb}`} alt="IMDb"></img>
                    </a>
                    </Tooltip>
                </Grid>
                <Grid item xs={6}>
                    <Tooltip title="breakingmoy">
                    <a href="https://www.pinterest.com/breakingmoy/_saved/" target="blank">
                        <img className={classes.icon} src={`${pinterest}`} alt="Pinterest"></img>
                    </a>
                    </Tooltip>
                </Grid>
            </Grid>

        </div>
    )
}

export default SocialMedia