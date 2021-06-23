import React, {Component} from 'react';
import { makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@material-ui/lab';

import {
    Typography,
    IconButton,
    Button,
    Paper,
    Grid,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

import {
    Link,
} from "react-router-dom";

import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MemoryIcon from '@material-ui/icons/Memory';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import UpdateIcon from '@material-ui/icons/Update';

import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import {
    blue,
    pink,
    red,
    purple,
    green,
    blueGrey
} from '@material-ui/core/colors/';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
        info: purple,
        error: pink,
    },
    status: {
      danger: 'orange',
    },
  });

const diffIcon = (index) => {
    switch (index) {
        case 0:
            return <SentimentSatisfiedAltIcon style={{color: '#4CAF50'}} />
        case 1:
            return <SentimentSatisfiedIcon style={{color: '#FFC107'}} />
        case 2:
            return <SentimentVeryDissatisfiedIcon style={{color: '#FF5252'}} />
    }
}

const UTsem1 = [
    {
        'name' : 'Intro to Electrical Engineering',
        'id' : 'EE 302',
        'difficulty' : 0
    },
    {
        'name' : 'Intro to Computing',
        'id' : 'EE 306',
        'difficulty' : 0
    },
    {
        'name' : 'Differential Equations and Linear Algebra',
        'id' : 'M 427J',
        'difficulty' : 0
    },
]

const UTsem2 = [
    {
        'name' : 'Intro to Embedded Systems',
        'id' : 'EE 319H',
        'difficulty' : 0
    },
    {
        'name' : 'Software Design and Implementation I',
        'id' : 'EE 312H',
        'difficulty' : 0
    },
    {
        'name' : 'Circuit Theory',
        'id' : 'EE 411',
        'difficulty' : 0
    },
    {
        'name' : 'Matrices and Matrix',
        'id' : 'M 340L',
        'difficulty' : 1
    },
    {
        'name' : 'Discrete Math',
        'id' : 'M 325K',
        'difficulty' : 0
    }
]

const UTsem3 = [
    {
        'name' : 'Computer Architecture',
        'id' : 'EE 460N',
        'difficulty' : 2
    },
    {
        'name' : 'Software Design and Implementation II',
        'id' : 'EE 422C',
        'difficulty' : 1  
    },
    {
        'name' : 'Linear Systems and Signals',
        'id' : 'EE 313',
        'difficulty' : 2
    },
    {
        'name' : 'Engineering Communications',
        'id' : 'EE 333T',
        'difficulty' : 0
    },
    {
        'name' : 'Probability, Statistics, and Random Processes',
        'id' : 'EE 351K',
        'difficulty' : 2
    },
]

const UTsem4 = [
    {
        'name' : 'Algorithms',
        'id' : 'EE 360C',
        'difficulty' : 2
    },
    {
        'name' : 'Software Design and Engineering Lab',
        'id' : 'EE 461L',
        'difficulty' : 1
    },
    {
        'name' : 'Number Theory',
        'id' : 'M 328K',
        'difficulty' : 0
    },
    {
        'name' : 'Operating Systems',
        'id' : 'EE 461S',
        'difficulty' : 2
    },
]


const classes = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    table: {
    },
    timelineTextContainer: {
        minWidth: '5vw',
        padding: '100vw'
    },
    timelineText: {
        padding: '100vw'
    },
    paper: {
        width: "100vw",
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    DotButton: {
        margin: theme.spacing(1),
        borderRadius: "5em"
    },
}));

class MyTimeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: UTsem4,
            height: 0,
            width: 0
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight 
        });
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render(){          
        return (
            <ThemeProvider theme={theme}>
                <Container style={{justifyContent:'center', alignItems:'center', marginTop: 100, marginBottom: 100}}>
                    <Typography variant="h2" color="textSecondary">
                        My Classes
                    </Typography>
                    
                    {/* <Grid container style={{paddingLeft: '10vh', paddingRight: '10vh'}}> */}
                    <Grid container>
                        <Grid item xs={12} md={4} lg={3} xl={3}>
                            <Timeline align="left">
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot 
                                            style={{cursor: "pointer"}}
                                            onClick={ () => {
                                                this.setState({
                                                    data: UTsem1
                                                })
                                            }}
                                        >
                                            <LaptopMacIcon />
                                        </TimelineDot>
                                    <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent style={{width: '100vw'}}>
                                        <Paper elevation={0} className={classes.paper}>
                                            <Typography variant="body2" color="textSecondary">
                                                Fall 2019
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary"
                                            style={{cursor: "pointer"}}
                                            onClick={ () => {
                                                this.setState({
                                                    data: UTsem2
                                                })
                                            }}
                                        >
                                            <LaptopMacIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent style={{width: '100vw'}}>
                                        <Paper elevation={0} className={classes.paper}>
                                            <Typography variant="body2" color="textSecondary">
                                                Spring 2020
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                    <TimelineDot color="info" variant="outlined"
                                            style={{cursor: "pointer"}}
                                            onClick={ () => {
                                                this.setState({
                                                    data: UTsem3
                                                })
                                            }}
                                    >
                                        <MemoryIcon />
                                    </TimelineDot>
                                    <TimelineConnector className={classes.secondaryTail} />
                                    </TimelineSeparator>
                                    <TimelineContent style={{width: '100vw'}}>
                                        <Paper elevation={0} className={classes.paper}>
                                            <Typography variant="body2" color="textSecondary">
                                                Fall 2020
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary"
                                            style={{cursor: "pointer"}}
                                            onClick={ () => {
                                                this.setState({
                                                    data: UTsem4
                                                })
                                            }}
                                        >
                                            <DeveloperBoardIcon />
                                        </TimelineDot>
                                    </TimelineSeparator>
                                    <TimelineContent style={{width: '100vw'}}>
                                        <Paper elevation={0} className={classes.paper}>
                                            <Typography variant="body2" color="textSecondary">
                                                Spring 2021
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                </Timeline>
                        </Grid>
                        <Grid item xs={12} md={8} lg={9} xl={9} alignItems="center" justifyContent="center">
                            <TableContainer component={Paper} elevation={3} height="100vh">
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell align="right">ID</TableCell>
                                        <TableCell align="right">Difficulty</TableCell>
                                    </TableRow>
                                    </TableHead>

                                    {this.state.data.map((row) => (
                                        <TableRow>
                                        <TableCell scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.id}</TableCell>
                                        <TableCell align="right">
                                            {diffIcon(row.difficulty)}
                                        </TableCell>
                                        </TableRow>
                                    ))}
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
            </Container>
        </ThemeProvider>
        );
    }
}

export default MyTimeline;