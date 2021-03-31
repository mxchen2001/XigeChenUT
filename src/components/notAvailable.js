import React from 'react';
import { Typography, Container } from '@material-ui/core';

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function NApage() {

    return (
        <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'80%'}}>
            <Typography align='center' variant="h2" >
                Sorry this page is unavailable or still work-in-progress
            </Typography>
        </Container>
        );

}

export default NApage;