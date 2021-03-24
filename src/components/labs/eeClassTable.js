import React from 'react';
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

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function getButton(name, link) {
    if (link != null) {
        return (
            <Button variant="outlined" href={link}>
                View {name} 
            </Button>
        );
    }

    return (
        <Button disabled variant="outlined">
            Unable to share due to University Policy.
        </Button>
    );
}

function eeClassTable(data) {
    const classes = makeStyles({
        table: {
            width: '50%',
        },
    });

    return (
        <div style={{minHeight: '90vh'}}>
        <br></br>
        <TableContainer component={Paper} elevation={10} style={{width: '80%', margin: 'auto'}}>
            <Table className={classes.table} aria-label="simple table">
                {/* Table Head */}
                <TableHead>
                <TableRow>
                    <TableCell>Lab</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Language</TableCell>
                    <TableCell align="right">Difficulty</TableCell>
                    <TableCell align="right">View Lab</TableCell>
                </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                {data.data.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.language}</TableCell>
                    <TableCell align="right">{row.difficulty}</TableCell>
                    <TableCell align="right">
                        {/* Select the class and updates the state */}
                        {getButton(row.name, row.link)}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        <br></br>
        </div>
    );
}

export default eeClassTable;