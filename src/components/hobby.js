import React , {Component} from 'react';
import pizzaPic from './assets/pizzaPic.png'
import ramenPic from './assets/ramen.png'
import { makeStyles } from '@material-ui/core/styles';

import {
    Typography,
    Paper,
    Grid,
    Button,
    Box,
    List,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    Container
} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';

const listClasses = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '200px',
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
}));


class myHobbies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRecipe1: false,
        }
    }

    renderRecipe() {

        const dough = [
                        '160g flour',
                        '120g milk',
                        '1g yeast',
                        '1/2g salt',
                        '2g sugar',
                        '1/2 garlic',
                        '5-7g oil'
                    ];

  
        
        const sauce = [
                        '1 can San Marzano Net 28 Oz',
                        '1/2 - 1 carrot finely minced',
                        '2 celery minced',
                        '1/4 White Onion',
                        '1 Tbsp White Miso Paste',
                        '1 Tbsp Tomato Paste',
                        '1 Tbsp Chicken Bouillon',
                        '1 tsp salt',
                        '1-2 tsp sugar'
                    ];

        const cheese = [
            'Low Moisture Whole Milk Mozzarella',
            '(include some Provolone if you want)',

        ]

        const toppings = [
            "Salami/pepperoni (I prefer Salami)",
            "Thinly Sliced Jalapeños"
        ]
        return (
            <Grid container justify = "center" xs={12} spacing={1}>
                <Box item m={6}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={listClasses.root}
                        >
                        <ListItem>
                            <Typography variant="h2" style={{fontSize: '1.4rem'}}>Pizza Dough (1 serving)</Typography>
                        </ListItem>

                        {dough.map((ingredients) => (
                            <ListItem>
                                <ListItemText primary={ingredients} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box item m={6}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={listClasses.root}
                        >
                        <ListItem>
                            <Typography variant="h2" style={{fontSize: '1.4rem'}}>Pizza Sauce (6-8 serving)</Typography>
                        </ListItem>

                        {sauce.map((ingredients) => (
                            <ListItem>
                                <ListItemText primary={ingredients} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box item m={6}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        className={listClasses.root}
                        >
                        <ListItem>
                            <Typography variant="h2" style={{fontSize: '1.4rem'}}>Cheese</Typography>
                        </ListItem>

                        {cheese.map((ingredients) => (
                            <ListItem>
                                <ListItemText primary={ingredients} />
                            </ListItem>
                        ))}

                        <ListItem/>

                        <ListItem>
                            <Typography variant="h2" style={{fontSize: '1.4rem'}}>Toppings</Typography>
                        </ListItem>

                        {toppings.map((ingredients) => (
                            <ListItem>
                                <ListItemText primary={ingredients} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
        );
    }

    render() {
        return (
            <Container>
                <div style={{display: 'flex', height: '20vh'}} />
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '20vh'}}>
                    <Typography variant="h2" style={{alignItems: 'center'}}>
                        Hobbies 
                    </Typography>
                </div>
    
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '10vh'}}>
                    <Typography variant="h4" style={{alignItems: 'center'}}>
                        I like to cook.
                    </Typography>
                </div>
    
    
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '10vh'}}>
                    <Typography variant="h6" style={{alignItems: 'center'}}>
                        Here's a pizza I made.
                    </Typography>
                </div>
    
                <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'300px'}}>
                    <GridList cellHeight={240} style={{width: 500, height: 300,}}>
                        <GridListTile key={ramenPic} >
                            <img src={ramenPic} style={{position: 'relative', opacity: 1}}/>
                            <GridListTileBar
                            title="Sorry No Recipe Yet"
                            subtitle={<span>by: Michael</span>}
                            actionIcon={
                                <IconButton aria-label={`info about title`}
                                            style={{color: 'grey'}}
                                            disabled
                                            // onClick={() => {
                                            //     this.setState({
                                            //         showRecipe1: !this.state.showRecipe1
                                            //     })
                                            // }}
                                            >
                                    <InfoIcon />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                    </GridList>
                </Container>
                <Container style={{justifyContent:'center', alignItems:'center', maxWidth:'300px'}}>
                    <GridList cellHeight={240} style={{width: 500, height: 300,}}>
                        <GridListTile key={pizzaPic} >
                            <img src={pizzaPic} style={{alignItems:'center',  position: 'relative', opacity: 1}} />
                            <GridListTileBar
                            title="Click to see Recipe"
                            subtitle={<span>by: Michael</span>}
                            actionIcon={
                                <IconButton aria-label={`info about title`}
                                            style={{color: 'white'}}
                                            onClick={() => {
                                                this.setState({
                                                    showRecipe1: !this.state.showRecipe1
                                                })
                                            }}>
                                    <InfoIcon />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                    </GridList>
                </Container>

                <Container style={{justifyContent:'center', alignItems:'center', maxWidth: '1500px'}}>
                    {this.state.showRecipe1? this.renderRecipe(): null}
                </Container>
    
            </Container>
        );
    }
}

export default myHobbies;