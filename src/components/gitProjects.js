import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Box } from '@material-ui/core';

import venmo_electron from './assets/venmo_electron.png'
import hacktx2020 from './assets/hacktx2020.png'
import thisSite from './assets/thisSite.png'

function createProject(projName, description, image, link) {
    return {projName, description, image, link}
}

const myProjs = [
                createProject("Vemno Automation", "Built using ElectronJS and Python that allows you to send a large scale transaction using a spreadsheet to multiple users", venmo_electron, "https://github.com/mxchen2001/Venmo-Automation"),
                createProject("Hack TX", "A NLP app built using React that that uses Google's NLP engine that gives feedback to help students with job inteviews.", hacktx2020, "https://github.com/ishan0102/hacktx-20"),
                createProject("This Website", "This website is built using React an Material UI and the Parallax is built using React. This gives a quick overview of my UT life. ", thisSite, "https://github.com/mxchen2001/react-personal-website"),
                ];


function projectCards(projName, description, image, link) {

    const classes = makeStyles({
        root: {
            maxWidth: 100,
            paddingTop: '56.25%', // 16:9,
            marginTop:'30',
        },
        media: {
            height: 140,
        },
    });

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'400px'}}>
            <Card className={classes.root}>
                <CardActionArea 
                        target="_blank"
                        href={link}>
                    <CardMedia
                    className={classes.media}
                    >
                        <Container style={{justifyContent:'center', alignItems:'center'}}>
                            <img src={image} width='300px'/>
                        </Container>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {projName}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" href={link}>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

function gitProjects() {
  return (

    <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%', marginTop: 100, marginBottom: 100,}}>

        <Typography variant="h2" color="textSecondary">
            My Projects
        </Typography>
        <Grid container justify = "center" spacing={1}>
            {myProjs.map((row) =>
                <Grid item m={4} xs={12} md={6} lg={4} style={{margin: 20, minWidth: "400px"}}>
                    {projectCards(row.projName, row.description, row.image, row.link)}
                </Grid>
            )}
        </Grid>
    </Container>
  );
}

export default gitProjects;