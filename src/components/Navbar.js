import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    navBar: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        color: 'black',
    },
    menuButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    let history = useHistory();
    const classes = useStyles();

    const linkMe = (e) => {
        e.preventDefault();
        history.push(`${e.currentTarget.getAttribute('name')}`)
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.navBar} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    </IconButton>
                    <Button name="/" color="inherit" onClick={linkMe}>Home</Button>
                    <Button name="/portfolio" color="inherit" onClick={linkMe}>Directing Portfolio</Button>
                    <Button name="/acting" color="inherit" onClick={linkMe}>Acting Portfolio</Button>
                    <Button name="/cv" color="inherit" onClick={linkMe}>CV</Button>
                    <Button name="/news" color="inherit" onClick={linkMe}>News</Button>
                    <Button name="/contact" color="inherit" onClick={linkMe}>Contact Me</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;