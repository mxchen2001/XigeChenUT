import { Typography, Container } from '@material-ui/core';
import React from 'react';
import EEClassTable from './eeClassTable'

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, description, language, difficulty) {
    return {name, description, language, difficulty};
}


const myData = [
    createData('Project 1', 'Spell-Checker', 'C', 'Easy', null),
    createData('Project 2', 'Matrix Multiplication', 'C', 'Easy', null),
    createData('Project 3', 'Custom Strings Library', 'C', 'Easy', null),
    createData('Project 4', 'Inventory Checker', 'C', 'Easy', null),
    createData('Project 5', 'Sets', 'C', 'Easy', null),
    createData('Project 6', 'Recursion', 'C', 'Easy', null),
    createData('Project 7', 'Inventory Checker II', 'C++', 'Easy', null),
    createData('Project 8', 'Interpretor', 'C++', 'Easy', null),
];

function ee312Labs() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <br></br>
            <Typography align='center' variant="h2" >
                EE 312 Software Design and Implementation I
            </Typography>
            <br></br>
            <Typography align='center' variant="h6" >
                My first official software class where C and C++ are the main focused language. This class introduces the important C programming concepts such as the details with dynamic memory and several common but important data structures. The idea of object oriented programming is intorduced with C++.
            </Typography>
            <EEClassTable data={myData}/>
        </Container>
    );
}

export default ee312Labs;