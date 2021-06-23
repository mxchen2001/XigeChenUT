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
import mdSlides from './assets/mdslides.png'

function createProject(projName, description, image, link) {
    return {projName, description, image, link}
}

const myProjs = [
                createProject("Markdown Slides", "A web based slide editor/renderer that uses markdown for quick and easy editing", mdSlides, "https://www.xige.page/markdown-render/"),
                createProject("Hack TX", "A NLP app built using React that that uses Google's NLP engine that gives feedback to help students with job inteviews.", hacktx2020, "https://github.com/ishan0102/hacktx-20"),
                createProject("Vemno Automation", "Built using ElectronJS and Python that allows you to send a large scale transaction using a spreadsheet to multiple users", venmo_electron, "https://github.com/mxchen2001/Venmo-Automation"),
                createProject("This Website", "This website is built using React an Material UI and the Parallax is built using React. This gives a quick overview of my UT life. ", thisSite, "https://github.com/mxchen2001/react-personal-website"),
                ];


function projectCards(projName, description, image, link) {

    const classes = makeStyles({
        root: {
            paddingTop: '56.25%', // 16:9,
            marginTop:'30',
            maxWidth: '10vw'
        },
        media: {
            height: '10vh',
            maxWidth: '10vw'
        },
    });

    return (
        <Container style={{justifyContent:'center', alignItems:'center'}}>
            <Card className={classes.root}>
                <CardActionArea 
                        target='_blank'
                        href={link}>
                    <CardMedia
                    className={classes.media}
                    >
                        <Container style={{justifyContent:'center', alignItems:'center', padding: '2vh'}}>
                            <img src={image} width='100%'/>
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
        <Grid container justify = "center" spacing={1} style={{paddingTop: '5vh'}}>
            {myProjs.map((row) =>
                <Grid item m={4} xs={12} md={6} lg={4}>
                    {projectCards(row.projName, row.description, row.image, row.link)}
                </Grid>
            )}
        </Grid>
    </Container>
  );
}

export default gitProjects;