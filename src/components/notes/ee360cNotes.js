import { Typography, Container } from '@material-ui/core';
import React from 'react';
import NotesTable from './notesTable'

const rootref= "https://mxchen2001.github.io/XigeChenUT/note_resources/sem4/ee360c/"


// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, link) {
    return {name, link};
}

const myData = [
    createData('Intro', rootref + 'intro.html'),
    createData('Gale-Shapley', rootref + 'stable_matching.html'),
    createData('Divide and Conquer', rootref + 'divide_conquer.html'),
];

function ee360cNotes() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <br></br>
            <Typography align='center' variant="h2" >
                Algorithms
            </Typography>
            <br></br>
            <NotesTable data={myData}/>
        </Container>
        );

}

export default ee360cNotes;