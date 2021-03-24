import { Typography, Container } from '@material-ui/core';
import React from 'react';
import EEClassTable from './eeClassTable'



// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, description, language, difficulty, link) {
    return {name, description, language, difficulty, link};
}

const labData = null;

const myData = [
    createData('Lab 1', 'Shift/Rotate bits', 'LC3 Machine Code', '< 1hr', 'http://users.ece.utexas.edu/~patt/19f.306/LabAssignments/Project1/index.html'),
    createData('Lab 2', 'Simple Sorting', 'LC3 Machine Code', '1-2hrs', 'http://users.ece.utexas.edu/~patt/19f.306/LabAssignments/Project2/index.html'),
    createData('Lab 3', 'Linked List', 'LC3 Assembly', '3-5hrs', 'http://users.ece.utexas.edu/~patt/19f.306/LabAssignments/Project3/index.html'),
    createData('Lab 4', 'Connect 4', 'LC3 Assembly', '3-5hrs', 'http://users.ece.utexas.edu/~patt/19f.306/LabAssignments/Project4/PA4_coverpage.html'),
    createData('Lab 5', 'Handling Interrupts', 'LC3 Assembly', '2-3hrs', 'http://users.ece.utexas.edu/~patt/19f.306/LabAssignments/Project5/index.html'),
];

function ee306Labs() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <br></br>
            <Typography align='center' variant="h2" >
                EE 306 Introduction to Computing
            </Typography>
            <br></br>
            <Typography align='center' variant="h6" >
                A true intro to computing where the concepts of computing are taught from bottom up. Starting with machine language and scaling upwards, topic of higher complexity are built ontop one another.
            </Typography>
            <EEClassTable data={myData}/>
        </Container>
        );

}

export default ee306Labs;