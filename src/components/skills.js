import React , {Component} from 'react';

import {
    Typography,
    Paper,
    Grid,
    Button,
    Box,
    Container
} from '@material-ui/core';

import C_logo from './assets/C_logo.png'
import Cpp_logo from './assets/Cplusplus.png'
import git_logo from './assets/git.png'
import java_logo from './assets/java.png'
import linux_logo from './assets/linux.png'
import python_logo from './assets/python.png'
import react_logo from './assets/react.png'

const SWLogos1 = [
    C_logo,
    Cpp_logo,
    git_logo,
    java_logo,
    linux_logo,
    python_logo,
    react_logo,
];

function mySkills() {
    return (
        <Container>
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '30vh'}}>
                <Typography variant="h2" style={{alignItems: 'center'}}>
                    Skills 
                </Typography>
            </div>
            
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '30vh'}}>

                <Grid container justify = "center" item xs={12} spacing={10}>
                {SWLogos1.map((currentLogo) => (
                    <Box m={4}>
                        <img src={currentLogo}  width='100px' />
                    </Box>
                ))}
                </Grid>
            </div>
        </Container>
    );
}

export default mySkills;