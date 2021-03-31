import { Typography, Container } from '@material-ui/core';
import React from 'react';
import NotesTable from './notesTable'



// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, mdlink, pdflink) {
    return {name, mdlink, pdflink};
}

const myData = [
    createData('Functions'),
    createData('Lists'),
    createData('Exceptions'),
    createData('Files'),
    createData('OOP'),
    createData('Matplotlib'),
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