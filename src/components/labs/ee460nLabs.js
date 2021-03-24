import { Typography, Container } from '@material-ui/core';
import React from 'react';
import EEClassTable from './eeClassTable'
// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, description, language, difficulty, link) {
    return {name, description, language, difficulty, link};
}

const myData = [
    createData('Lab 1', 'Assembler', 'C', 'Easy', 'https://docs.google.com/document/d/1A6a9WFPtdgF6YK_HUH29u06mfrXP3wAiFFDtLAJ1Pew/edit?usp=sharing'),
    createData('Lab 2', 'Instruction Level Simulator', 'C', 'Easy', 'https://docs.google.com/document/d/1uGZi6moXRGBXR_o3PbNtqK9m_HpGpGRMo7mZCKx9XD4/edit?usp=sharing'),
    createData('Lab 3', 'Cycle Level Simulator', 'C', 'Easy', 'https://docs.google.com/document/d/1Xw2s-3LIQslkvBcrtOioobUXdMBQZf8MTUQMh8AYm1g/edit?usp=sharing'),
    createData('Lab 4', 'Simulator with Interrupts and Exceptions', 'C', 'Easy', 'https://docs.google.com/document/d/19bx3W5OIixSxeuA7Jq9aMf6j3923SCc7S-q04gYScxE/edit?usp=sharing'),
    createData('Lab 5', 'Simulator with Interrupts, Exceptions, and Virtual Memory', 'C', 'Easy', 'https://docs.google.com/document/d/1UHMp3T_WjxS8-QGJ3Umw0vDMgQ_3CbLH8EBTIf4uT6s/edit?usp=sharing'),
    createData('Lab 6', 'Pipelined Simulator', 'C', 'Easy', 'https://docs.google.com/document/d/1kdIaZ0-aDeP2rSOgp8k31rYDogC_ZACvXdd7aLuD-t4/edit?usp=sharing'),
];

function ee460nLabs() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <br></br>
            <Typography align='center' variant="h2" >
                EE 460N Computer Architecture
            </Typography>
            <br></br>
            <Typography align='center' variant="h6" >
                This class teaches the trade-offs that comes with Computer Architecture design. Concepts such as Branch Prediction, Physical and Virtual Memory, Instruction and Data Caching, and Pipelining are taught along with the possibly trade-offs between performance, cost, energy etc. associated with each choice. 
            </Typography>
            <EEClassTable data={myData}/>
        </Container>
    );
}

export default ee460nLabs;