import { Typography, Container } from '@material-ui/core';
import React from 'react';
import EEClassTable from './eeClassTable'

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, description, language, difficulty) {
    return {name, description, language, difficulty};
}


const myData = [
    createData('Lab 1', 'Simple Sort', 'Java 1.8', '1-2hrs', null),
    createData('Lab 2', 'Mastermind Game (Object Oriented)', 'Java 1.8', '2-3hrs', null),
    createData('Lab 2.1', 'Mastermind Computer Player', 'Java 1.8', '1-2hrs', null),
    createData('Lab 3', 'Word Ladder (BFS, DFS)', 'Java 1.8', '3-4hrs', null),
    createData('Lab 4', 'Critters Evolution Similator (Command line)', 'Java 1.8', '3-4hrs', null),
    createData('Lab 5', 'Critters UI using JavaFx', 'Java 1.8', '4-6hrs', null),
    createData('Lab 6', 'Box Office Simulator (multithreading and synchronization)', 'Java 1.8', '2-3hrs', null),
    createData('Final Project', 'Auction App (multithreading, synchronization, Client Server Communication, Database, encrytion, etc.)', 'Java 1.8', '18-24hrs', null),
];

function ee422Labs() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <br></br>
            <Typography align='center' variant="h2" >
                EE 422C Software Design and Implementation II
            </Typography>
            <br></br>
            <Typography align='center' variant="h6" >
                A software class where teaching high level algorithms, data structure and programming concepts. Taught using Java 1.8 where concepts such as Object-Orient Programming is a heavy topic.
            </Typography>
            <EEClassTable data={myData}/>
        </Container>
    );
}

export default ee422Labs;