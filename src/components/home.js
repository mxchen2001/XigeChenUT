import React , {Component} from 'react';
import MyTimeline from './timeline'
import GitProjects from './gitProjects'
import MySkills from './skills'
import MyHobbies from './hobby'

import UT_ECE from './assets/UTECE.png'
import UT_Tower from './assets/UT_Tower.jpeg'

import {
    Typography,
    Paper,
    Grid,
    Button,
    Container,
    Box
} from '@material-ui/core';

import GetAppIcon from '@material-ui/icons/GetApp';

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

const DEBUG = false;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false,
            ypos: 0,
            picSize: '70%',
            logo_opac: 1,
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
    
    // // Set the opacity of logos
    // setOpacity(input, lower, upper) {
    //     if (input < (logoStart - (logoSize/2))) {
    //         this.setState({
    //             logo_opac: 1
    //         })
    //         return;
    //     }

    //     const midpoint = (upper - lower) / 2;
    //     const modded_input = input % (upper - lower);

    //     let diff = 1;
    //     if (modded_input > midpoint) {
    //         diff = modded_input - midpoint;
            
    //     } else {
    //         diff = midpoint - modded_input;
            
    //     }
    //     let ratio = 1 - diff/midpoint;

    //     this.setState({
    //         logo_opac: ratio
    //     })
    //     return;
    // }

    // Get the font for dynamic titles
    getFont(input, starting, limit, end) {
        if ((input < limit)) {
            const sPercent = starting.toString();
            return sPercent + 'px';
        }
        const partition = end - limit;
        let size_factor = (end - input) / partition;
        if (size_factor < 0) {
            size_factor = 0;
        }
        const fontSize = starting * size_factor;
        const sPercent = fontSize.toString();
        return sPercent + 'px';
    }

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

    // Get if the element should be displayed
    getShowEl(input, lower, upper) {
        if (input > lower && input < upper) {
            return true;
        }
        return false;
    }



    handleScroll() {
        this.setState({
            ypos: window.scrollY
        })
        this.setPicSize(this.state.ypos, 70, 860);
        // this.setOpacity(this.state.ypos, 0, logoSize);
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false});
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({scrolling: true});
        }
    }

    render() {
        return (
            <div>

                {DEBUG? <Typography style={{alignItems: 'center', 
                                    position: 'fixed' ,  
                                    top: '10%',
                                    }}>
                        ypos: {this.state.ypos}, logo_opac: {this.state.logo_opac}
                </Typography> : null}
                

                <Container maxWidth="2400px" style={{display: 'flex', margin: 'auto', justifyContent:'center', alignItems:'center', height: '70vh'}}>
                    <img src={UT_ECE} style={{position: 'fixed', opacity: 1, maxWidth: "1900px"}} width={this.state.picSize} />
                </Container>

                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '70vh'}}>
                    <Typography variant="h2" 
                                style={{alignItems: 'center', 
                                        position: this.state.ypos > 969 ? 'fixed' : 'relative',  
                                        top: '10%', 
                                        opacity: this.getShowEl(this.state.ypos, 0, 1240)? this.getOpacity(this.state.ypos, 969, 1240): 0}}>
                        My Time at UT
                    </Typography>
                </div>

                <MyTimeline/>

                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '30vh'}}>
                    <Box m={2}>
                        <Typography variant="h2" style={{alignItems: 'center', fontSize: '2.4rem'}}>
                            Updated 2021    
                        </Typography>
                    </Box>
                    <Box m={2}>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<GetAppIcon />}
                            >
                            Resume
                        </Button>
                    </Box>
                </div>

                <MySkills/>

                <GitProjects/>

                <MyHobbies/>
            </div>
        );
    }
}

export default Home;