import React , {Component} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {
    Typography,
    Paper,
    Grid,
    Button,
    Box,
    Container
} from '@material-ui/core';

import {
    Link,
} from "react-router-dom";

function createClassCard(className, description, image, toLink) {
    return {className, description, image, toLink}
}

function createClassField(sem, classCard) {
    return {sem, classCard}
}




const sem4Classes = [
    createClassCard("EE 461L", "Software Engineering and Design Laboratory", null, "/Notes/EE461L"),
    createClassCard("EE 461S", "Operating Systems", null, ""),
    createClassCard("EE 360C", "Algorithms", null, "/Notes/EE360C"),
    createClassCard("M 328K", "Intro to Number Theory", null, ""),
                ];

const sem3Classes = [
    createClassCard("EE 422C", "Software Implementation and Design II", null, ""),
    createClassCard("EE 460N", "Computer Architecture", null, ""),
    createClassCard("EE 351K", "Probability, Statistics and Random Processes", null, ""),
    createClassCard("EE 313", "Linear Systems and Signals", null, ""),
    createClassCard("EE 333T", "Engineering Communications", null, ""),
                ];
const sem2Classes = [
    createClassCard("EE 319H", "Intro to Embedded Systems", null, ""),
    createClassCard("EE 312H", "Software Implementation and Design I", null, ""),
    createClassCard("EE 411", "Circuit Theory", null, ""),
    createClassCard("M 325K", "Discrete Math", null, ""),
    createClassCard("M 340L", "Matrix and Matrices", null, ""),
                ];

const sem1Classes = [
    createClassCard("EE 302", "Intro to Electrical Engineering", null, ""),
    createClassCard("EE 306", "Introduction to Computing", null, ""),
    createClassCard("M 427J", "Differential Equation", null, ""),
                ];


const myClassFields = [
    createClassField("Semester 4", sem4Classes),
    createClassField("Semester 3", sem3Classes),
    createClassField("Semester 2", sem2Classes),
    createClassField("Semester 1", sem1Classes),
                ];

function classCards(className, description, image, link) {
    
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

    var notes_link = link;
    var disable_link = false;
    if (link === "") {
        notes_link = "/pageNA"
        disable_link = true;
    }

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'400px'}}>
            <Card className={classes.root}>
                <CardActionArea 
                        target="_blank"
                        disabled={disable_link}
                        component={Link} 
                        to={notes_link}>
                    <CardMedia
                    className={classes.media}
                    >
                        <Container style={{justifyContent:'center', alignItems:'center'}}>
                            <img src={image} width='300px'/>
                        </Container>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {className}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" target="_blank" 
                        component={Link} 
                        disabled={disable_link}
                        to={notes_link}>
                        {!disable_link? "See notes": "Unavailable"}
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

function classField(sem, classCard) {
    return (            
    <Container style={{margin: 50}}>
        <Container style={{margin: 10, alignItems:'start'}}>
            <Typography variant="h2" style={{fontSize: '1.8rem'}} color="textSecondary">
                {sem}
            </Typography>
        </Container>
        <Grid container justify="center" spacing={3}>
            {classCard.map((row) =>
                <Grid item xs={12} md={6} lg={4}>
                    {classCards(row.className, row.description, row.image, row.toLink)}
                </Grid>
            )}
        </Grid>
    </Container>
    );
}



function notesHome() {
    return (
    <Container style={{maxWidth:'100%'}}>
        <Container style={{display: 'flex', paddingTop: 50, justifyContent:'center', alignItems:'end'}}>
            <Typography variant="h2" color="textSecondary">
                My Notes
            </Typography>
        </Container>
            {myClassFields.map((field) =>
                <Container style={{display: 'flex', width: '100%'}}>
                    {classField(field.sem, field.classCard)}
                </Container>
            )}
    </Container>
    );
}

export default notesHome;