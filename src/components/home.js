import React , {Component} from 'react';
import VisibilitySensor from 'react-visibility-sensor'

import MyBio from './bio'
import MyTimeline from './timeline'
import GitProjects from './gitProjects'
import MySkills from './skills'
import MyHobbies from './hobby'

import FadeElement from './FadeElement'

import {Motion, spring} from 'react-motion';

import UT_ECE from './assets/UTECE.png'
import UT_Tower from './assets/UT_Tower.jpeg'

import {
    makeStyles,
    Typography,
    Paper,
    Grid,
    Button,
    Container,
    Box,
    fade
} from '@material-ui/core';

import GetAppIcon from '@material-ui/icons/GetApp';

  
// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

const DEBUG = false;


const classes = makeStyles((theme) => ({
    fadeTop: {
        display: 'flex',
        marginTop: 400,
        marginBottom: 200,
    },
    fadeEl: {
        display: 'flex',
        margin: 'auto'
    },
    fadeImage: {
        display: 'flex',
        marginTop: 500,
        marginBottom: 500,
        margin: 'auto',
        justifyContent:'center', 
        alignItems:'center', 
    }
}));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ypos: 0,
            picSize: '70%',
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.handleScroll());
    }

    // Set the pic size of the home pic
    setPicSize(input, max, limit) {
        let difference = ((input/limit) * 100);
        if ((difference >= max) && window.scrollY !== 0) {
            this.setState({
                picSize: '0%'
            });
            return;
        }
        let percent = max - difference;
        let sPercent = percent.toString();
        sPercent += '%'
        this.setState({
            picSize: sPercent
        })
    }

    // // Get the font for dynamic titles
    // getFont(input, starting, limit, end) {
    //     if ((input < limit)) {
    //         const sPercent = starting.toString();
    //         return sPercent + 'px';
    //     }
    //     const partition = end - limit;
    //     let size_factor = (end - input) / partition;
    //     if (size_factor < 0) {
    //         size_factor = 0;
    //     }
    //     const fontSize = starting * size_factor;
    //     const sPercent = fontSize.toString();
    //     return sPercent + 'px';
    // }

    getOpacity(input, lower, upper) {
        if ((input < lower)) {
            return 1;
        }
        const partition = upper - lower;
        let size_factor = (upper - input) / partition;
        if (size_factor < 0) {
            size_factor = 0;
        }
        return size_factor;

    }

    // // Get if the element should be displayed
    // getShowEl(input, lower, upper) {
    //     if (input > lower && input < upper) {
    //         return true;
    //     }
    //     return false;
    // }



    handleScroll() {
        this.setState({
            ypos: window.scrollY
        })
        this.setPicSize(this.state.ypos, 70, 860);
    }


    render() {
        return (
            <div>
                {DEBUG? <Typography style={{alignItems: 'center', 
                                    position: 'fixed' ,  
                                    top: '10%',
                                    }}>
                        ypos: {this.state.ypos}
                </Typography> : null}

                {/* <Button onClick={() => this.setState({open: !this.state.open})}>Hello button</Button>

                <Motion style={{currentOpacity: spring(this.state.open ? true : false, { stiffness: 140, damping: 20 })}}>
                    {({currentOpacity}) =>
                        <div style={{opacity: currentOpacity}}>
                            <Typography variant='h2'>HELLO WORLD</Typography>
                        </div>
                    }
                </Motion> */}
                

                <Container className={classes.fadeImage} style={{marginTop: 100, marginBottom: 100}}>
                    <FadeElement part stiffness='160' damping='100'>
                        <Container maxWidth="2400px" style={{display: 'flex', margin: 'auto', justifyContent:'center', alignItems:'center'}}>
                                <img src={UT_ECE} style={{opacity: 1, maxWidth: "1900px"}} width="70%" />
                        </Container>
                    </FadeElement>
                </Container>

                <Container className={classes.fadeTop}>
                    <FadeElement part stiffness='160' damping='100'><MyBio /></FadeElement>
                </Container>
                <Container className={classes.fadeEl}>
                    <FadeElement><MySkills /></FadeElement>
                </Container>
                <Container className={classes.fadeEl}>
                    <FadeElement><GitProjects /></FadeElement>
                </Container>
                <Container className={classes.fadeEl}>
                    <FadeElement><MyTimeline /></FadeElement>
                </Container>
                <Container className={classes.fadeEl}>
                    <FadeElement><MyHobbies /></FadeElement>
                </Container>
            </div>
        );
    }
}

export default Home;