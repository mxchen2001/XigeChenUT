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
import github_logo from './assets/github.png'
import js_logo from './assets/js.png'
import arm_logo from './assets/arm.png'

const SWLogos1 = [
    C_logo,
    Cpp_logo,
    git_logo,
    java_logo,
    linux_logo,
    python_logo,
    react_logo,
    github_logo,
    js_logo,
    arm_logo,
];

function mySkills() {
    return (
        <Container style={{maxWidth:'80%', marginTop: 100, marginBottom: 100,}}>
            <Typography variant="h2" color="textSecondary">
                Skills
            </Typography>
            {/* <Container style={{ paddingTop: '5vh'}}> */}
                <Grid container spacing={5} style={{paddingTop: '5vh'}}>
                {SWLogos1.map((currentLogo) => (
                    <Grid item m={2} xs={6} md={4} lg={2}>
                        <img src={currentLogo}  width='100%' />
                    </Grid>
                ))}
                </Grid>
            {/* </Container> */}
        </Container>
    );
}

export default mySkills;