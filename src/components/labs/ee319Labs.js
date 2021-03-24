import { Typography, Container } from '@material-ui/core';
import React from 'react';
import EEClassTable from './eeClassTable'

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function createData(name, description, language, difficulty) {
    return {name, description, language, difficulty};
}


const myData = [
    createData('Lab 1', 'Odd bit counter', 'Arm Assembly', 'Easy', null),
    createData('Lab 2', 'Temperature sensor data analysis', 'C', 'Easy', null),
    createData('Lab 3', 'LED and switch interface, circuit measurements, schematics', 'Arm Assembly', 'Easy', null),
    createData('Lab 4', 'Stepper motor software using Systick and FSM', 'Arm Assembly', 'Easy', null),
    createData('Lab 5', 'Cancelled due to COVID-19 (part of next lab)', 'N/A', 'N/A', null),
    createData('Lab 6', 'Digital Piano using a 4-bit DAC', 'C', 'Easy', null),
    createData('Lab 7', 'LCD device driver, decimal fixed-point output', 'Arm Assembly', 'Easy', null),
    createData('Lab 8', 'Real-Time Position Measurement System', 'C++', 'Easy', null),
    createData('Lab 9', 'Distributed Data Acquisition System', 'C', 'Easy', null),
    createData('Lab 10', 'Chrome Dinosaur Game built on TMC4', 'C, C++, Arm Assembly', 'Easy', null),
];

function ee319Labs() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <br></br>
            <Typography align='center' variant="h2" >
                EE 319 Intro to Embedded Systems
            </Typography>
            <br></br>
            <Typography align='center' variant="h6" >
                An intro to Embedded Systems taught in C that teaches the basic to the C language and principles such as I/O device drivers, debugging, stacks, FIFO queues, local variables and interrupts. Hardware concepts of analog to digital converter (ADC) and digital to analog converter (DAC) are also visited.
            </Typography>
            <EEClassTable data={myData}/>
        </Container>
    );
}

export default ee319Labs;