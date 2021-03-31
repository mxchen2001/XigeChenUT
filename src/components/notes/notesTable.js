import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

function getButton(name, link) {
    if (link != null) {
        return (
            <Button variant="outlined" target="_blank" href={link}>
                View {name} 
            </Button>
        );
    }

    return (
        <Button disabled variant="outlined">
            Unable
        </Button>
    );
}

function NoteTable(data) {
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
                    <TableCell>Topic</TableCell>
                    <TableCell align="right">Link</TableCell>
                </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                {data.data.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{getButton(row.name, row.link)}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}

export default NoteTable;