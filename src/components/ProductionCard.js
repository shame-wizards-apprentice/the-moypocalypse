import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    media: {
        height: '50vh'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '50vh'
    }
}));

const ProductionCard = (props) => {
    const classes = useStyles();

    return (
        <div >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={props.image}
                                title={props.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {props.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            {/* Button click will make an API call for that production, then pass that through as props so the production page knows what to render. */}
                            <Button size="small" color="primary">
                                Learn More (at your own risk)
                </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h1>{props.title}</h1>
                        <h3>{props.company}</h3>
                        <h3>{props.year}</h3>
                        <h4>{props.blurb}</h4>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductionCard;