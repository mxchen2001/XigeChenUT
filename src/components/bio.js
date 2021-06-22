import React , {Component} from 'react';
import {
    Typography,
    Button,
    Container,
    Box,
} from '@material-ui/core';

import GetAppIcon from '@material-ui/icons/GetApp';

function MyBio() {
    return (
        <Container>
            <Container style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Typography variant="h2" style={{alignItems: 'center', top: '10%'}}>
                    My Time at UT
                </Typography>
            </Container>
            <Container style={{
                        display: 'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        marginTop: 100,
                        marginBottom: 100,
                        }}>
                <Typography variant="h2" 
                            style={{alignItems: 'center',
                                    fontSize: '1.2rem',
                                    top: '10%'}}>
                    Student at the University of Texas at Austin, pursuing a degree in Computer Engineering. Experienced in a variety of languages, platforms, and embedded systems. Skilled at team base work and remote development.
                </Typography>
            </Container>

            <Container style={{
                        display: 'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        marginTop: 100,
                        marginBottom: 100
                        }}>
                <Box m={2}>
                    <Typography variant="h2" style={{alignItems: 'center', fontSize: '2.4rem'}}>
                        Updated 2021    
                    </Typography>
                </Box>
                <Box m={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{backgroundColor: '#bf5700'}}
                        startIcon={<GetAppIcon />}
                        href="https://github.com/mxchen2001/mxchen2001.github.io/raw/master/UT_files/Other/xige_chen_resume.pdf"
                        >
                        Resume
                    </Button>
                </Box>
            </Container>
        </Container>
    )
}

export default MyBio