import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Button,
    Grid,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@material-ui/lab';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import MemoryIcon from '@material-ui/icons/Memory';
import DevicesIcon from '@material-ui/icons/Devices';

const UTsem1 = {
    'showCurrent' : false,
    'ee302' : false,
    'ee306' : false,
    'm427j' : false,
}

const UTsem2 = {
    'showCurrent' : false,
    'ee319H' : false,
    'ee312H' : false,
    'ee411' : false,
    'm340L' : false,
    'm325k' : false,
}

const UTsem3 = {
    'showCurrent' : false,
    'ee460n' : false,
    'ee422c' : false,
    'ee313' : false,
    'ee333t' : false,
    'ee351k' : false,
}

const UTsem4 = {
    'showCurrent' : false,
    'ee360c' : false,
    'ee461l' : false,
    'm328k' : false,
    'ee461s' : false,
}

function toggle(myClasses, toggleEl) {
    const currentState = myClasses[toggleEl];
    myClasses[toggleEl] = !currentState;
    return myClasses;
}

const listClasses = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
}));



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            sem1: UTsem1,
            sem2: UTsem2,
            sem3: UTsem3,
            sem4: UTsem4,
        }
    }

    renderListSubtitle(currentTitle) {

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Click to expand
                </ListSubheader>
                }
                className={listClasses.root}
                >

                <ListItem>
                    <ListItemText primary={currentTitle} />
                </ListItem>

            </List>
        );
    }

    renderSem1() {
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Fall 2019
                </ListSubheader>
                }
                className={listClasses.root}
                >
                <ListItem button>
                    <ListItemText primary="Intro to Electrical Engineering" />
                </ListItem>
    
                <ListItem button onClick={() => {
                    this.setState({
                        sem1: toggle(this.state.sem1, 'ee306')
                    }); 
                }}>
                    <ListItemText primary="Introduction to Computing" />
                    {this.state.sem1['ee306'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem1['ee306']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                buttons
                                primary="EE 306 Labs" />
                        </ListItem>
                    </List>
                </Collapse>
    
                <ListItem button>
                    <ListItemText primary="Differential Equations" />
                </ListItem>
            </List>
        );
    }

    renderSem2() {
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Spring 2020
                </ListSubheader>
                }
                className={listClasses.root}
                >
                <ListItem 
                    button
                    onClick={() => {
                        this.setState({
                            sem2: toggle(this.state.sem2, 'ee319h')
                        }); 
                    }}>
                    <ListItemText primary="Intro to Embedded Systems" />
                    {this.state.sem2['ee319h'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem2['ee319h']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                button 
                                primary="EE 319H Labs" />
                        </ListItem>
                    </List>
                </Collapse>
    
                <ListItem 
                    button 
                    onClick={() => {
                        this.setState({
                            sem2: toggle(this.state.sem2, 'ee312h')
                        }); 
                    }}>
                    <ListItemText primary="Software Design and Implementation I" />
                    {this.state.sem2['ee312h'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem2['ee312h']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                button
                                primary="EE 312H Labs" />
                        </ListItem>
                    </List>
                </Collapse>
    
                <ListItem button>
                    <ListItemText primary="Circuit Theory" />
                </ListItem>
    
                <ListItem button>
                    <ListItemText primary="Matrices and Matrix Calculations" />
                </ListItem>

                <ListItem button>
                    <ListItemText primary="Discrete Mathematics" />
                </ListItem>
    
            </List>
        );
    }

    renderSem3() {
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Fall 2020
                </ListSubheader>
                }
                className={listClasses.root}
                >
                <ListItem 
                    button
                    onClick={() => {
                        this.setState({
                            sem3: toggle(this.state.sem3, 'ee460n')
                        }); 
                    }}>
                    <ListItemText primary="Computer Architecture" />
                    {this.state.sem3['ee460n'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem3['ee460n']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                button 
                                primary="EE 460N Labs" />
                        </ListItem>
                    </List>
                </Collapse>
    
                <ListItem 
                    button 
                    onClick={() => {
                        this.setState({
                            sem3: toggle(this.state.sem3, 'ee422c')
                        }); 
                    }}>
                    <ListItemText primary="Software Design and Implementation II" />
                    {this.state.sem3['ee422c'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem3['ee422c']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                button
                                primary="EE 422C Labs" />
                        </ListItem>
                    </List>
                </Collapse>
    
                <ListItem button>
                    <ListItemText primary="Circuit Theory" />
                </ListItem>
    
                <ListItem button>
                    <ListItemText primary="Matrices and Matrix Calculations" />
                </ListItem>

                <ListItem button>
                    <ListItemText primary="Discrete Mathematics" />
                </ListItem>
    
            </List>
        );
    }

    renderSem4() {
        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Spring 2021
                </ListSubheader>
                }
                className={listClasses.root}
                >
                <ListItem 
                    button
                    onClick={() => {
                        this.setState({
                            sem4: toggle(this.state.sem4, 'ee360c')
                        }); 
                    }}>
                    <ListItemText primary="Algorithms" />
                    {this.state.sem4['ee360c'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem4['ee360c']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                button 
                                primary="EE 360C Labs" />
                        </ListItem>
                    </List>
                </Collapse>
    
                <ListItem 
                    button 
                    onClick={() => {
                        this.setState({
                            sem4: toggle(this.state.sem4, 'ee461l')
                        }); 
                    }}>
                    <ListItemText primary="Software Engineering and Design Lab" />
                    {this.state.sem4['ee461l'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem4['ee461l']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                button
                                primary="EE 461L Labs" />
                        </ListItem>
                    </List>
                </Collapse>
    
                <ListItem button>
                    <ListItemText primary="Intro to Number Theory" />
                </ListItem>
    
                <ListItem 
                    button 
                    onClick={() => {
                        this.setState({
                            sem4: toggle(this.state.sem4, 'ee461s')
                        }); 
                    }}>
                    <ListItemText primary="Operating Systems" />
                    {this.state.sem4['ee461s'] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
    
                <Collapse in={this.state.sem4['ee461s']} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={listClasses.nested}>
                            <ListItemText 
                                button
                                primary="EE 461S Labs" />
                        </ListItem>
                    </List>
                </Collapse>    
            </List>
        );
    }

    render(){          
        const timelineClasses = makeStyles((theme) => ({
            paper: {
                padding: '6px 32px',
                paddingRight: '10px'
            },
            secondaryTail: {
                backgroundColor: theme.palette.secondary.main,
            },
            DotButton: {
                margin: theme.spacing(1),
                borderRadius: "5em"
            },
        }));

        return (
            <div>
            <Timeline align="left">
            <TimelineItem>
                <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    Fall 2019
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot onClick={() => { 
                    this.setState({
                        sem1: toggle(this.state.sem1, 'showCurrent')
                    }); 
                    }}  
                    style={{cursor: "pointer",}}>
                    <MenuBookIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Paper m={2} elevation={3} className={timelineClasses.paper}>
                    {this.state.sem1['showCurrent']? this.renderSem1() : this.renderListSubtitle("Fall 2019")}                    
                </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    Spring 2020
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot 
                    color="primary"
                    onClick={() => { 
                        this.setState({
                            sem2: toggle(this.state.sem2, 'showCurrent')
                        });     
                    }}  
                    style={{cursor: "pointer",}}
                    >
                    <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent>
                <Paper m={2} elevation={3} className={timelineClasses.paper}>
                    {this.state.sem2['showCurrent']? this.renderSem2() : this.renderListSubtitle("Spring 2020")}                    
                </Paper>
                </TimelineContent>

            </TimelineItem>
            <TimelineItem>

                <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    Fall 2020
                </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                <TimelineDot 
                    color="primary" 
                    variant="outlined" 
                    onClick={() => { 
                        this.setState({
                            sem3: toggle(this.state.sem3, 'showCurrent')
                        });     
                    }}  
                    style={{cursor: "pointer",}}
                    >
                    <MemoryIcon />
                </TimelineDot>
                <TimelineConnector className={timelineClasses.secondaryTail} />
                </TimelineSeparator>

                <TimelineContent>
                <Paper m={2} elevation={3} className={timelineClasses.paper}>
                    {this.state.sem3['showCurrent']? this.renderSem3() : this.renderListSubtitle("Fall 2020")}                    
                </Paper>
                </TimelineContent>

            </TimelineItem>
            <TimelineItem>

                <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    Spring 2021
                </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                <TimelineDot 
                    color="primary"
                    onClick={() => { 
                        this.setState({
                            sem4: toggle(this.state.sem4, 'showCurrent')
                        });     
                    }}  
                    style={{cursor: "pointer",}}
                    >
                    <DevicesIcon />
                </TimelineDot>
                </TimelineSeparator>

                <TimelineContent>
                <Paper m={2} elevation={3} className={timelineClasses.paper}>
                    {this.state.sem4['showCurrent']? this.renderSem4() : this.renderListSubtitle("Spring 2020")}                    
                </Paper>
                </TimelineContent>

            </TimelineItem>
            </Timeline>
            </div>
        );
    }
}

export default Home;