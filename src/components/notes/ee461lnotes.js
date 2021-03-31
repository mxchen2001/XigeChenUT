import { Typography, Container } from '@material-ui/core';
import React from 'react';
import NotesTable from './notesTable'

const rootref= "https://mxchen2001.github.io/XigeChenUT/note_resources/sem4/ee461l/"


// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, link) {
    return {name, link};
}

const myData = [
    createData('Functions', rootref + 'Functions.html'),
    createData('Lists', rootref + 'Lists.html'),
    createData('Exceptions', rootref + 'Exceptions.html'),
    createData('Files', rootref + 'Files.html'),
    createData('OOP', rootref + 'OOP.html'),
    createData('Matplotlib', rootref + 'Matplotlib.html'),
];

function ee461lNotes() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <br></br>
            <Typography align='center' variant="h2" >
                Software Engineering and Design Laboratory
            </Typography>
            <br></br>
            <NotesTable data={myData}/>
        </Container>
        );

}

export default ee461lNotes;